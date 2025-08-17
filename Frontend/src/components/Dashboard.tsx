import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  isDarkMode: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({ isDarkMode }) => {
  interface EsgData {
    category: string;
    total_esg_terms_matched?: number;
    score: number;
    unique_keywords_matched?: number;
    term_percentage?: number;
    risk_percentage: number;
  }

  const [esgData, setEsgData] = useState<EsgData[]>([]);
  const COLORS = ['#4CAF50', '#2196F3', '#9C27B0']; // Colors for Environmental, Social, Governance
  //const API_BASE = 'http://127.0.0.1:5000';
  const API_BASE = "https://esg-risk-reporter.onrender.com";
  useEffect(() => {
    // Fetch ESG data from the backend
    const fetchEsgData = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/esg-analysis`);
        setEsgData(response.data);
      } catch (error) {
        console.error('Error fetching ESG data:', error);
      }
    };

    fetchEsgData();
  }, []);

  return (
    <div className={`p-4 sm:p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
    <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">ESG Risk Dashboard</h1>

      {/* Table: ESG Data */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">ESG Data Overview</h2>
        <div className="overflow-x-auto">
          <table className={`min-w-full border rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <thead className={`${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'}`}>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Total ESG Terms Matched</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Weighted ESG Risk Score</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Unique Keywords Matched</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Term Percentage (%)</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Risk Percentage (%)</th>
              </tr>
            </thead>
            <tbody>
              {esgData.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? (isDarkMode ? 'bg-gray-800' : 'bg-gray-50') : (isDarkMode ? 'bg-gray-700' : 'bg-white')}`}>
                  <td className="px-4 py-4 text-sm">{item.category}</td>
                  <td className="px-4 py-4 text-sm">{item.total_esg_terms_matched || 'N/A'}</td>
                  <td className="px-4 py-4 text-sm">{item.score}</td>
                  <td className="px-4 py-4 text-sm">{item.unique_keywords_matched || 'N/A'}</td>
                  <td className="px-4 py-4 text-sm">{item.term_percentage || 'N/A'}</td>
                  <td className="px-4 py-4 text-sm">{item.risk_percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bar Chart: Risk Percentage by Category */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">Risk Percentage by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={esgData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#444' : '#ccc'} />
            <XAxis dataKey="category" stroke={isDarkMode ? '#fff' : '#000'} />
            <YAxis stroke={isDarkMode ? '#fff' : '#000'} />
            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }} />
            <Legend />
            <Bar dataKey="risk_percentage" fill={isDarkMode ? '#8884d8' : '#82ca9d'} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {esgData.map((item, index) => (
          <div
            key={index}
            className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg border p-6 transition-colors duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {item.category}
              </h3>
              {item.risk_percentage < 50 ? (
                <span className="text-green-500 font-bold">Low Risk</span>
              ) : (
                <span className="text-red-500 font-bold">High Risk</span>
              )}
            </div>

            <div className="mb-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.risk_percentage}%</div>
              <div className={`w-full bg-gray-200 rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : ''}`}>
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                  style={{ width: `${item.risk_percentage}%` }}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Weighted Score: {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pie Chart: Contribution of Each Category to Total Risk */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">Contribution of Each Category to Total Risk</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={esgData}
              dataKey="risk_percentage"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label={(entry) => `${entry.category}: ${entry.risk_percentage}%`}
            >
              {esgData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
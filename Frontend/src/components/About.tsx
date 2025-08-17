import React from 'react';
import { Shield, Target, Users, Leaf } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
          About ESG Risk Assessment
        </h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Understanding our mission and approach to ESG risk analysis
        </p>
      </div>

      {/* Mission Statement */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg border p-8 transition-colors duration-300`}>
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
            <Leaf className="text-white" size={32} />
          </div>
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Our Mission
          </h3>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg leading-relaxed max-w-3xl mx-auto`}>
            We empower organizations to identify, assess, and mitigate ESG risks through advanced document analysis 
            and comprehensive reporting. Our platform helps businesses make informed decisions that drive sustainable 
            growth while meeting regulatory requirements and stakeholder expectations.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg border p-6 transition-colors duration-300`}>
          <div className="mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3">
              <Leaf className="text-white" size={24} />
            </div>
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Environmental Analysis
            </h4>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              Comprehensive assessment of environmental risks, climate impact, and sustainability practices.
            </p>
          </div>
        </div>

        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg border p-6 transition-colors duration-300`}>
          <div className="mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3">
              <Users className="text-white" size={24} />
            </div>
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Social Impact
            </h4>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              Evaluation of social responsibility, employee welfare, and community engagement initiatives.
            </p>
          </div>
        </div>

        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg border p-6 transition-colors duration-300`}>
          <div className="mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-3">
              <Shield className="text-white" size={24} />
            </div>
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Governance Review
            </h4>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              Analysis of corporate governance structures, transparency, and ethical business practices.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg border p-8 transition-colors duration-300`}>
        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
          How It Works
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Upload Documents
            </h4>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              Upload your corporate documents, reports, or policies for analysis.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-purple-600 font-bold text-lg">2</span>
            </div>
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              AI Analysis
            </h4>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              Our AI engine analyzes content for ESG risks and compliance indicators.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold text-lg">3</span>
            </div>
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Generate Reports
            </h4>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              Receive detailed reports with actionable insights and recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
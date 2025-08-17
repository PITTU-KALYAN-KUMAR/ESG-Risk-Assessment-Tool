import React from 'react';
import { HelpCircle, FileText, Upload, Download, AlertCircle } from 'lucide-react';

interface HelpProps {
  isDarkMode: boolean;
}

const Help: React.FC<HelpProps> = ({ isDarkMode }) => {
  const faqs = [
    {
      question: "What file formats are supported?",
      answer: "We support PDF, DOC, DOCX, and TXT files up to 50MB in size."
    },
    {
      question: "How long does the analysis take?",
      answer: "Analysis typically takes 2-5 minutes depending on document size and complexity."
    },
    {
      question: "What ESG frameworks do you use?",
      answer: "Our analysis is based on established ESG frameworks including GRI, SASB, and TCFD standards."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, all documents are processed securely and are not stored permanently on our servers."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
          Help & Support
        </h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Find answers to common questions and learn how to use the platform effectively
        </p>
      </div>

      {/* Quick Start Guide */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg border p-8 transition-colors duration-300`}>
        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
          Quick Start Guide
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Upload className="text-blue-600" size={16} />
            </div>
            <div>
              <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                1. Upload Your Document
              </h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Click the upload area or drag and drop your document. Ensure it's in PDF, DOC, DOCX, or TXT format.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="text-purple-600" size={16} />
            </div>
            <div>
              <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                2. Wait for Analysis
              </h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Our AI will analyze your document for ESG risks. This typically takes 2-5 minutes.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Download className="text-green-600" size={16} />
            </div>
            <div>
              <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                3. Download Your Report
              </h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Once analysis is complete, download your comprehensive ESG risk assessment report.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg border p-8 transition-colors duration-300`}>
        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
          Frequently Asked Questions
        </h3>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pb-4 last:border-b-0`}>
              <div className="flex items-start space-x-3">
                <HelpCircle className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} flex-shrink-0 mt-1`} size={20} />
                <div>
                  <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {faq.question}
                  </h4>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Troubleshooting */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg border p-8 transition-colors duration-300`}>
        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
          Troubleshooting
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
            <div>
              <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                Upload Issues
              </h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                If your upload fails, check that your file is under 50MB and in a supported format. Try refreshing the page and uploading again.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
            <div>
              <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                Analysis Taking Too Long
              </h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Large documents may take longer to process. If analysis exceeds 10 minutes, please try again with a smaller document.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
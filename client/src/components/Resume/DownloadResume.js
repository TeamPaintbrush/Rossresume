import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { FaDownload, FaFilePdf, FaChevronDown } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ModernResumePDF from './ModernResumePDF';
import ProfessionalResumePDF from './ProfessionalResumePDF';
import { resumeData } from '../../data/resumeData';
import './DownloadResume.css';

const DownloadResume = ({ variant = 'primary', showDropdown = true }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const generateAndDownload = async (type = 'modern') => {
    setIsGenerating(true);
    setShowOptions(false);

    try {
      // Select the appropriate template
      const ResumeComponent = type === 'modern' ? ModernResumePDF : ProfessionalResumePDF;
      
      // Generate PDF blob
      const blob = await pdf(<ResumeComponent data={resumeData} />).toBlob();
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Leroy-Ross-Resume-${type === 'modern' ? 'Modern' : 'Professional'}.pdf`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cleanup
      URL.revokeObjectURL(url);
      
      // Success notification
      toast.success(`Resume downloaded! 🎉 (${type === 'modern' ? 'Modern' : 'Professional'} version)`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate resume. Please try again.', {
        position: 'bottom-right',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  if (!showDropdown) {
    // Simple single button version
    return (
      <button
        className={`download-resume-btn ${variant} ${isGenerating ? 'generating' : ''}`}
        onClick={() => generateAndDownload('modern')}
        disabled={isGenerating}
      >
        <FaDownload className="btn-icon" />
        <span>{isGenerating ? 'Generating...' : 'Download Resume'}</span>
      </button>
    );
  }

  // Dropdown version with both options
  return (
    <div className="download-resume-wrapper">
      <button
        className={`download-resume-btn ${variant} ${isGenerating ? 'generating' : ''}`}
        onClick={() => setShowOptions(!showOptions)}
        disabled={isGenerating}
      >
        <FaDownload className="btn-icon" />
        <span>{isGenerating ? 'Generating PDF...' : 'Download Resume'}</span>
        <FaChevronDown className="dropdown-icon" />
      </button>

      {showOptions && !isGenerating && (
        <div className="resume-options-dropdown">
          <button
            className="resume-option"
            onClick={() => generateAndDownload('modern')}
          >
            <FaFilePdf className="option-icon modern" />
            <div className="option-details">
              <span className="option-title">Modern/Creative</span>
              <span className="option-description">Colorful design with visual elements</span>
            </div>
          </button>
          <button
            className="resume-option"
            onClick={() => generateAndDownload('professional')}
          >
            <FaFilePdf className="option-icon professional" />
            <div className="option-details">
              <span className="option-title">Professional/Conservative</span>
              <span className="option-description">Traditional black & white layout</span>
            </div>
          </button>
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {showOptions && (
        <div 
          className="dropdown-overlay" 
          onClick={() => setShowOptions(false)}
        />
      )}
    </div>
  );
};

export default DownloadResume;

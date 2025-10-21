import React from 'react';

interface ResponsiveLogoProps {
  className?: string;
  maxWidth?: string;
  responsive?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const ResponsiveLogo: React.FC<ResponsiveLogoProps> = ({
  className = '',
  maxWidth = '150px',
  responsive = true,
  size,
}) => {
  // Define size classes for different text sizes
  const getSizeClasses = () => {
    if (size) {
      switch (size) {
        case 'sm':
          return 'text-xs';
        case 'md':
          return 'text-sm';
        case 'lg':
          return 'text-lg';
        case 'xl':
          return 'text-xl';
        default:
          return 'text-base';
      }
    }
    return '';
  };

  const sizeClasses = getSizeClasses();

  return (
    <span
      className={`inline-block font-bold ${sizeClasses} ${className}`}
      style={{
        maxWidth: responsive ? maxWidth : undefined,
      }}
      role="img"
      aria-label="Atsumarii Logo"
    >
      <span className="text-[#f9a785]">A</span>
      <span className="text-[#99c7d4]">t</span>
      <span className="text-[#f8e09e]">s</span>
      <span className="text-[#f5c49b]">u</span>
      <span className="text-[#f9a785]">m</span>
      <span className="text-[#99c7d4]">a</span>
      <span className="text-[#f8e09e]">r</span>
      <span className="text-[#99c7d4]">i</span>
      <span className="text-[#f9a785]">i</span>
    </span>
  );
};

export default ResponsiveLogo;

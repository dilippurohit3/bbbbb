import React from 'react';

interface BoltzyLogoProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const BoltzyLogo: React.FC<BoltzyLogoProps> = ({ 
  size = 48, 
  className,
  style 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Background circle */}
      <circle cx="24" cy="24" r="24" fill="#e50914"/>
      
      {/* Lightning bolt */}
      <path 
        d="M18 12L30 24L22 24L26 36L14 24L22 24L18 12Z" 
        fill="white" 
        stroke="white" 
        strokeWidth="1"
      />
      
      {/* Video play icon overlay */}
      <circle cx="24" cy="24" r="8" fill="rgba(255,255,255,0.2)"/>
      <path d="M20 18L20 30L30 24L20 18Z" fill="white"/>
    </svg>
  );
};

export default BoltzyLogo;

import React, { useState, useEffect } from 'react';

interface ResponsiveImageProps {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  width: string;
  height: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  mobileSrc,
  desktopSrc,
  alt,
  width,
  height
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  return (
    <img
      src={isMobile ? mobileSrc : desktopSrc}
      alt={alt}
      height={height}
      width={width}
    />
  );
};

export default ResponsiveImage;

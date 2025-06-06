// components/PageBanner.tsx
'use client';

import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  breadcrumb = '',
  backgroundImage = '/asssets/hero-img.jpg',
}) => {
  return (
    <div
      className="relative h-64 flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className='text-lg'>{subtitle}</p>
        {breadcrumb && (
          <p className="text-sm mt-2">
            Home / <span className="text-white font-medium">{breadcrumb}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;

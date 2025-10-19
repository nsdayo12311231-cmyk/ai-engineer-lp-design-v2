'use client';
import React, { useEffect } from 'react';

export default function Hero() {
  // Pattern 1固定: URLパラメータ不要
  const FIXED_PATTERN = 1;

  useEffect(() => {
    // ヒーロー画像を優先的にプリロード（Pattern 1の画像のみ）
    const mobileImage = '/hero-mobile-1.jpg';
    const desktopImage = '/hero-desktop-1.jpg';

    // モバイル画像をプリロード（767px以下のみ）
    const mobileLink = document.createElement('link');
    mobileLink.rel = 'preload';
    mobileLink.as = 'image';
    mobileLink.href = mobileImage;
    mobileLink.media = '(max-width: 767px)';
    mobileLink.setAttribute('fetchpriority', 'high');
    document.head.appendChild(mobileLink);

    // デスクトップ画像をプリロード（768px以上のみ）
    const desktopLink = document.createElement('link');
    desktopLink.rel = 'preload';
    desktopLink.as = 'image';
    desktopLink.href = desktopImage;
    desktopLink.media = '(min-width: 768px)';
    desktopLink.setAttribute('fetchpriority', 'high');
    document.head.appendChild(desktopLink);
  }, []);

  return (
    <section className="bg-white" style={{ margin: 0, padding: 0, marginTop: '60px', position: 'relative' }}>
      <div className="w-full" style={{ margin: 0, padding: 0 }}>
        {/* モバイル用画像 - Pattern 1固定 */}
        <img
          className="block md:hidden w-full cursor-pointer"
          src="/hero-mobile-1.jpg"
          alt="AI Engineer Hero - Pattern 1"
          width="768"
          height="1024"
          fetchPriority="high"
          onClick={() => {
            if (typeof window !== 'undefined' && window.fbq) {
              window.fbq('track', 'Lead');
            }
            window.open('https://lin.ee/t4LoPRo', '_blank');
          }}
          style={{
            width: '100vw',
            height: 'auto',
            maxHeight: '100vh',
            objectFit: 'contain',
            margin: 0,
            padding: 0
          }}
        />

        {/* デスクトップ用画像 - Pattern 1固定 */}
        <img
          className="hidden md:block w-full cursor-pointer"
          src="/hero-desktop-1.jpg"
          alt="AI Engineer Hero - Pattern 1"
          width="1920"
          height="1080"
          fetchPriority="high"
          onClick={() => {
            if (typeof window !== 'undefined' && window.fbq) {
              window.fbq('track', 'Lead');
            }
            window.open('https://lin.ee/t4LoPRo', '_blank');
          }}
          style={{
            width: '100vw',
            height: 'auto',
            maxHeight: '80vh',
            objectFit: 'contain',
            margin: 0,
            padding: 0
          }}
        />

      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
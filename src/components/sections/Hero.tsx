'use client';
import React, { useState, useEffect } from 'react';

export default function Hero() {
  // URLパラメータを初期化時に読み取ってチラつきを防ぐ
  const [currentPattern, setCurrentPattern] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const pattern = urlParams.get('pattern');
      if (pattern) {
        const validPattern = parseInt(pattern, 10);
        if (validPattern >= 1 && validPattern <= 3) {
          return validPattern;
        }
      }
    }
    return 1; // デフォルトはパターン1
  });

  // サーバー/クライアント間のハイドレーションエラーを防ぐ
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // ヒーロー画像を優先的にプリロード（media条件で片方のみ）
    const mobileImage = currentPattern === 1 ? '/hero-mobile-1.jpg' : currentPattern === 2 ? '/hero-mobile-2.jpg' : '/hero-mobile-3.jpg';
    const desktopImage = currentPattern === 1 ? '/hero-desktop-1.jpg' : currentPattern === 2 ? '/hero-desktop-2.jpg' : '/hero-desktop-3.jpg';

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
  }, [currentPattern]);

  // ローディングスケルトン表示（サーバーサイド & 初回レンダリング）
  if (!isMounted) {
    return (
      <section className="bg-white" style={{ margin: 0, padding: 0, marginTop: '60px', position: 'relative' }}>
        <div className="w-full" style={{ margin: 0, padding: 0 }}>
          {/* モバイル用スケルトン */}
          <div
            className="block md:hidden w-full"
            style={{
              width: '100vw',
              height: '667px', // 典型的なモバイル画像の高さ
              backgroundColor: '#f0f0f0',
              backgroundImage: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'loading 1.5s ease-in-out infinite',
              margin: 0,
              padding: 0
            }}
          />
          {/* デスクトップ用スケルトン */}
          <div
            className="hidden md:block w-full"
            style={{
              width: '100vw',
              height: '600px', // 典型的なデスクトップ画像の高さ
              backgroundColor: '#f0f0f0',
              backgroundImage: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
              backgroundSize: '200% 100%',
              animation: 'loading 1.5s ease-in-out infinite',
              margin: 0,
              padding: 0
            }}
          />
        </div>
        <style jsx>{`
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="bg-white" style={{ margin: 0, padding: 0, marginTop: '60px', position: 'relative' }}>
      <div className="w-full" style={{ margin: 0, padding: 0 }}>
        {/* モバイル用画像 */}
        <img
          className="block md:hidden w-full cursor-pointer"
          src={currentPattern === 1 ? '/hero-mobile-1.jpg' : currentPattern === 2 ? '/hero-mobile-2.jpg' : '/hero-mobile-3.jpg'}
          alt="AI Engineer Hero"
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
            padding: 0,
            animation: 'fadeIn 0.3s ease-in'
          }}
        />

        {/* デスクトップ用画像 */}
        <img
          className="hidden md:block w-full cursor-pointer"
          src={currentPattern === 1 ? '/hero-desktop-1.jpg' : currentPattern === 2 ? '/hero-desktop-2.jpg' : '/hero-desktop-3.jpg'}
          alt="AI Engineer Hero"
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
            padding: 0,
            animation: 'fadeIn 0.3s ease-in'
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
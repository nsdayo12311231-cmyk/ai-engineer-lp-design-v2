'use client';

import React from 'react';

interface CTAButtonProps {
  text?: string;
  onClick?: () => void;
}

export default function CTAButton({
  text = '無料セミナーに参加する',
  onClick
}: CTAButtonProps) {
  return (
    <section
      style={{
        backgroundColor: 'white',
        padding: '40px 16px',
        textAlign: 'center'
      }}
    >
      <button
        onClick={onClick}
        style={{
          background: 'linear-gradient(135deg, #ff6b35, #f39c12)',
          color: 'white',
          fontWeight: 'bold',
          padding: '16px 32px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer',
          width: '100%',
          maxWidth: '400px',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {text}
      </button>
    </section>
  );
}

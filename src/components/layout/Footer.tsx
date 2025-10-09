import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <div
          style={{
            fontSize: '48px',
            marginBottom: '10px'
          }}
        >
          🕵️
        </div>

        <h3
          style={{
            fontSize: 'clamp(20px, 4vw, 24px)',
            fontWeight: 'bold',
            margin: 0,
            lineHeight: 1.4
          }}
        >
          同業、スパイ、競合スパイ大歓迎
        </h3>

        <p
          style={{
            fontSize: 'clamp(16px, 3vw, 18px)',
            margin: 0,
            lineHeight: 1.6
          }}
        >
          競合他社に負けない<br />
          圧倒的な自信があります
        </p>
      </div>
    </footer>
  );
}

'use client';

import Button from '../ui/Button';

export default function FixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
      <Button
        variant="primary"
        size="large"
        className="w-full"
        onClick={() => {
          if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Lead');
          }
          window.open('https://lin.ee/t4LoPRo', '_blank');
        }}
      >
        📱 無料セミナーに参加する
      </Button>
    </div>
  );
}
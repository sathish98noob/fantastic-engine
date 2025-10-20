
import React from 'react';
import AnimatedCheckIcon from './icons/AnimatedCheckIcon';

interface ThankYouProps {
  rating: number;
}

const ThankYou: React.FC<ThankYouProps> = ({ rating }) => {
    const message = rating > 3
    ? "We appreciate you taking the time to share your thoughts."
    : "Your feedback has been received. Thank you for helping us improve.";

  return (
    <div className="w-full max-w-md text-center animate-fade-in p-8">
        <div className="mb-6">
            <AnimatedCheckIcon />
        </div>
      <h2 className="text-3xl font-bold text-slate-100 mb-2">Thank You!</h2>
      <p className="text-slate-400">
        {message}
      </p>
    </div>
  );
};

export default ThankYou;

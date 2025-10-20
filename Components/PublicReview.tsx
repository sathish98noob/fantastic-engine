import React from 'react';

const PublicReview: React.FC = () => {
  return (
    <div className="w-full max-w-md text-center animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-100 mb-2">Thank you for the high rating!</h2>
      <p className="text-slate-400 mb-8">We will now redirect you to leave a public review on Google.</p>
      <div className="flex justify-center items-center">
        <svg className="animate-spin h-8 w-8 text-violet-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="ml-4 text-slate-300">Redirecting...</span>
      </div>
    </div>
  );
};

export default PublicReview;
import React, { useState, useCallback } from 'react';
import { AppStatus } from './types';
import StarRating from './components/StarRating';
import FeedbackForm from './components/FeedbackForm';
import ThankYou from './components/ThankYou';
import AnimatedCheckIcon from './components/icons/AnimatedCheckIcon';
import { analyzeFeedback } from './services/geminiService';
import { saveFeedbackToSheet } from './services/googleSheetService';

const GOOGLE_REVIEW_URL = 'https://reviewthis.biz/LotusCare';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [rating, setRating] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    if (newRating <= 3) {
      setStatus(AppStatus.LOW_RATING);
    } else {
      // For high ratings, save, open review link in a new tab, and show thank you.
      saveFeedbackToSheet({ rating: newRating });
      window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
      setStatus(AppStatus.COMPLETE);
    }
  };

  const handleFeedbackSubmit = useCallback((name: string, email: string, feedback: string) => {
    saveFeedbackToSheet({ rating, name, email, feedback });
    
    analyzeFeedback(feedback).then(analysis => {
      console.log("Feedback Received:", { name, email, feedback });
      console.log("Feedback Analysis:", analysis);
      // You could potentially save the analysis result as well
      // saveFeedbackToSheet({ rating, name, email, feedback, category: analysis.category, summary: analysis.summary });
    });

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setStatus(AppStatus.COMPLETE);
    }, 2000);

  }, [rating]);

  const renderContent = () => {
    switch (status) {
      case AppStatus.IDLE:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-100 mb-2">How was your experience?</h1>
            <p className="text-slate-400 mb-8">Your feedback helps us improve.</p>
            <StarRating rating={rating} onRatingChange={handleRatingChange} />
          </div>
        );
      case AppStatus.LOW_RATING:
        return (
          <FeedbackForm
            onSubmit={handleFeedbackSubmit}
          />
        );
      case AppStatus.COMPLETE:
        return <ThankYou rating={rating} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg mx-auto bg-slate-800 rounded-2xl shadow-2xl p-8 transition-all duration-500 relative main-card">
        {showSuccess && (
            <div className="absolute inset-0 bg-slate-800 bg-opacity-95 flex flex-col items-center justify-center rounded-2xl z-10 animate-fade-in">
                <AnimatedCheckIcon />
                <h3 className="text-xl font-semibold text-slate-100 mt-4">Feedback Submitted</h3>
            </div>
        )}
        <div className={`flex flex-col items-center justify-center min-h-[350px] transition-opacity duration-300 ${showSuccess ? 'opacity-0' : 'opacity-100'}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
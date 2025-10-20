
import React, { useState } from 'react';

interface FeedbackFormProps {
  onSubmit: (name: string, email: string, feedback: string) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      onSubmit(name.trim(), email.trim(), feedback.trim());
    }
  };

  return (
    <div className="w-full max-w-md animate-fade-in text-center">
      <h2 className="text-2xl font-bold text-slate-100 mb-2">We're sorry to hear that.</h2>
      <p className="text-slate-400 mb-6">Please tell us what went wrong. Your feedback is valuable and helps us improve.</p>
      <form onSubmit={handleSubmit} className="text-left">
        <div className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name (Optional)</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 focus:outline-none transition"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email (Optional)</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 focus:outline-none transition"
                />
            </div>
            <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-slate-400 mb-1">Feedback</label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your experience..."
                  className="w-full h-32 p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 focus:outline-none transition"
                  required
                  minLength={10}
                />
            </div>
        </div>
        <button
          type="submit"
          disabled={feedback.trim().length < 10}
          className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-violet-700 disabled:from-slate-500 disabled:to-slate-600 disabled:cursor-not-allowed disabled:shadow-none transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
        >
          Submit Private Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

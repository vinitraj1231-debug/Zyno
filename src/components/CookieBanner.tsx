'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Cookie, X } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('zyno_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('zyno_cookie_consent', 'granted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('zyno_cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-slate-900/95 border border-indigo-500/30 backdrop-blur-xl p-5 rounded-2xl shadow-2xl shadow-slate-950 text-slate-200 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-indigo-600/20 rounded-xl text-indigo-400">
            <Cookie className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">Privacy & Cookie Settings</h4>
        </div>
        <button
          onClick={handleDecline}
          className="text-slate-400 hover:text-white p-1"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="mt-2 text-xs text-slate-400 leading-relaxed">
        Zynochat.in uses cookies and privacy-friendly telemetry to analyze site performance, ensure AdSense security compliance, and personalize content. Learn more in our{' '}
        <Link href="/privacy-policy" className="text-indigo-400 underline hover:text-indigo-300">
          Privacy Policy
        </Link>.
      </p>

      <div className="mt-4 flex items-center justify-end gap-2 text-xs font-semibold">
        <button
          onClick={handleDecline}
          className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          Essential Only
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/20 transition"
        >
          Accept All Cookies
        </button>
      </div>
    </div>
  );
}

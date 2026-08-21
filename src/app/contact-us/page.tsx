'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

      <div className="space-y-4 border-b border-slate-800 pb-8 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
          <Mail className="w-4 h-4" />
          <span>Support & Engineering Inquiries</span>
        </div>
        <h1 className="text-4xl font-black text-white">Contact Zynochat</h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Have a question regarding technical benchmarks, WebCrypto security audits, or partnership opportunities? Get in touch with our engineering team below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Info Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              <span>Direct Support Channel</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="space-y-1">
                <span className="text-slate-500 font-bold block">PRIMARY EMAIL</span>
                <a href="mailto:support@zynochat.in" className="text-indigo-400 font-mono text-sm hover:underline">
                  support@zynochat.in
                </a>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-slate-500 font-bold block">RESPONSE TIME</span>
                <p className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Within 24-48 business hours</span>
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-slate-500 font-bold block">VULNERABILITY DISCLOSURE</span>
                <p className="text-slate-300">
                  To report cryptographic vulnerabilities, prefix your email subject with <code className="text-emerald-400 font-mono">[VULN]</code>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-7 p-6 sm:p-8 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-4">
          <h3 className="text-lg font-bold text-white">Send Inquiry Message</h3>

          {submitted ? (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-3 text-center animate-in fade-in">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">Message Received!</h4>
              <p className="text-xs text-slate-300">
                Thank you for contacting Zynochat.in. Our technical team will review your inquiry and respond to your email address shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-300">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Feedback on WebSockets vs WebRTC Guide"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Your Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Write your technical inquiry or feedback message here..."
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Technical Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}

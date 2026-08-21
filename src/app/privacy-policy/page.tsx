import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zynochat',
  description: 'Zynochat.in Privacy Policy. Learn about our strict data protection principles, Google AdSense compliance, and cookie policy.',
  alternates: {
    canonical: 'https://zynochat.in/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Google AdSense & GDPR Compliant Policy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400 font-mono">Effective Date: August 21, 2026 • Last Updated: August 21, 2026</p>
      </div>

      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-400" />
            <span>1. Our Zero-Knowledge Privacy Commitment</span>
          </h2>
          <p>
            At <strong>Zynochat.in</strong>, we prioritize user privacy above all else. As an engineering resource dedicated to zero-knowledge encryption, WebRTC, and local browser AI execution, our digital infrastructure is designed from the ground up to minimize data collection.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-400" />
            <span>2. Information We Collect</span>
          </h2>
          <p>When you access Zynochat.in, we process limited telemetry necessary for delivering high-performance content:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>Log & Technical Data:</strong> Standard web server logs including IP address, browser type, operating system, HTTP referral source, and timestamp to protect against DDOS attacks.</li>
            <li><strong>Cookies & Local Storage:</strong> Essential session preferences and anonymous performance measurement tokens.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <span>3. Google AdSense & DoubleClick DART Cookies</span>
          </h2>
          <p>
            Zynochat.in uses Google AdSense to serve privacy-safe advertisements. Google, as a third-party vendor, uses cookies to serve ads based on your visit to this and other websites on the Internet:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to Zynochat.in and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">Google Ads Settings</a>.</li>
            <li>For more information regarding third-party ad vendor compliance, visit <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">AboutAds.info</a>.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. GDPR & CCPA Data Rights</h2>
          <p>Under applicable international privacy laws (GDPR, CCPA), you hold the following rights:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-xs">Right to Access & Export</h4>
              <p className="text-[11px] text-slate-400">Request copies of personal telemetry logs stored by our server firewall.</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-xs">Right to Erasure ("Right to be Forgotten")</h4>
              <p className="text-[11px] text-slate-400">Request complete purging of contact inquiry records from our system.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Contact Our Privacy Officer</h2>
          <p>If you have any questions regarding this Privacy Policy or cookie management, reach out directly to our engineering team:</p>
          <p className="font-mono text-indigo-400 text-xs">Email: support@zynochat.in</p>
        </section>

      </div>

    </div>
  );
}

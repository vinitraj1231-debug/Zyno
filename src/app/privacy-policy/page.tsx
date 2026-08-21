import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, Cookie, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zynochat Engineering Hub',
  description: 'Zynochat.in Privacy Policy. Detailed disclosures covering zero-knowledge privacy, Google AdSense, DoubleClick DART cookies, GDPR & CCPA rights.',
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
          <span>Google AdSense, GDPR & CCPA Compliant Policy</span>
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
            At <strong>Zynochat.in</strong>, we prioritize user privacy above all else. As an engineering resource hub dedicated to zero-knowledge encryption, WebRTC, local browser WebGPU AI runtimes, and sub-second messaging architectures, our digital infrastructure is designed to minimize data collection and maintain strict compliance with global privacy standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-400" />
            <span>2. Information We Process</span>
          </h2>
          <p>When you access Zynochat.in, we process limited telemetry necessary for delivering high-performance technical content:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>Technical Log Telemetry:</strong> Standard web server logs including anonymized IP addresses, browser user agent, HTTP referral sources, and timestamp metrics used exclusively for DDoS mitigation and firewall security.</li>
            <li><strong>Local Storage Tokens:</strong> Non-tracking <code className="text-emerald-400 font-mono">localStorage</code> tokens used to preserve theme settings and your privacy consent preferences.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cookie className="w-5 h-5 text-indigo-400" />
            <span>3. Google AdSense & Third-Party Advertising Disclosures</span>
          </h2>
          <p>
            Zynochat.in uses Google AdSense to serve advertisements. Google and its third-party ad vendor partners use cookies to serve ads based on prior user visits to this website or other internet sites:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>DoubleClick DART Cookie:</strong> Enables Google to serve privacy-safe advertisements to users based on their visits to Zynochat.in and other locations on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">Google Ads Settings</a>.</li>
            <li>For more information on third-party ad vendor cookie opt-outs, visit <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">AboutAds.info</a>.</li>
            <li>Read our detailed <Link href="/cookie-policy" className="text-indigo-400 underline">Cookie Policy</Link> for complete details on cookie management.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-400" />
            <span>4. GDPR & CCPA Data Subject Rights</span>
          </h2>
          <p>Under international privacy regulations (General Data Protection Regulation & California Consumer Privacy Act), users possess the following statutory rights:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-xs">Right to Access & Data Portability</h4>
              <p className="text-[11px] text-slate-400">Request copies of server access log records associated with your request IP.</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-xs">Right to Erasure ("Right to be Forgotten")</h4>
              <p className="text-[11px] text-slate-400">Request complete purging of contact inquiry communications sent to our support team.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-white">5. Privacy Officer Contact</h2>
          <p>For questions or formal privacy requests, contact our privacy officer directly:</p>
          <p className="font-mono text-indigo-400 text-xs">Email: support@zynochat.in</p>
        </section>

      </div>

    </div>
  );
}

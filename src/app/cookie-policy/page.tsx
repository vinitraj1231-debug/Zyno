import React from 'react';
import { Metadata } from 'next';
import { Cookie, Shield, Eye, Settings, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | Zynochat Engineering Hub',
  description: 'Detailed Cookie Policy for Zynochat.in. Learn about essential session tokens, Google AdSense ad cookies, DART cookies, and cookie management.',
  alternates: {
    canonical: 'https://zynochat.in/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold">
          <Cookie className="w-4 h-4" />
          <span>Cookie & Tracking Disclosures</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Cookie Policy</h1>
        <p className="text-xs text-slate-400 font-mono">Effective Date: August 21, 2026</p>
      </div>

      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-400" />
            <span>1. What Are Cookies?</span>
          </h2>
          <p>
            Cookies are small text files stored on your web browser or device when you visit web pages. At <strong>Zynochat.in</strong>, we use cookies and HTML5 local storage tokens to deliver secure, responsive web performance and support privacy-compliant advertising via Google AdSense.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-400" />
            <span>2. Categories of Cookies We Use</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Strictly Necessary Cookies</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Essential for website navigation, dark mode theme preferences, and saving cookie consent choices in <code className="text-emerald-400 font-mono">localStorage</code>.
              </p>
            </div>

            <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Settings className="w-4 h-4 text-indigo-400" />
                <span>Performance & Telemetry Cookies</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Anonymous statistical metrics that help us evaluate page load speeds, WebGPU feature detection, and server latency.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cookie className="w-5 h-5 text-indigo-400" />
            <span>3. Third-Party Google AdSense Cookies</span>
          </h2>
          <p>
            Google AdSense uses cookies to serve relevant advertisements to users based on their browsing behavior:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>Google DART Cookie:</strong> Enables Google and its partner networks to serve privacy-friendly ads to visitors based on visits to Zynochat.in and other web locations.</li>
            <li>Users can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">Google Ads Settings</a>.</li>
            <li>Visit <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">AboutAds.info</a> to opt out of third-party vendor cookies across web browsers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Managing Your Cookie Preferences</h2>
          <p>
            You can modify or revoke your cookie consent preferences at any time using our on-site Cookie Consent Banner or directly through your web browser settings. Most browsers allow you to block or delete cookies in the "Privacy & Security" section.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-lg font-bold text-white">Cookie Policy Inquiries</h2>
          <p>For questions regarding our cookie disclosures, email:</p>
          <p className="font-mono text-indigo-400 text-xs">Email: support@zynochat.in</p>
        </section>

      </div>

    </div>
  );
}

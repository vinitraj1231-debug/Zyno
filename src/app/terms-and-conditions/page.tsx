import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Shield, AlertTriangle, Scale, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Zynochat Engineering Hub',
  description: 'Terms and Conditions governing the use of Zynochat.in technical research, code routines under MIT license, and AdSense publishing.',
  alternates: {
    canonical: 'https://zynochat.in/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
          <FileText className="w-4 h-4" />
          <span>Legal Agreement & Publisher Terms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Terms and Conditions</h1>
        <p className="text-xs text-slate-400 font-mono">Effective Date: August 21, 2026</p>
      </div>

      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-400" />
            <span>1. Acceptance of Terms</span>
          </h2>
          <p>
            By accessing or reading technical guides on <strong>Zynochat.in</strong>, you agree to be bound by these Terms and Conditions and all applicable software licensing laws. If you do not agree with any part of these terms, you must discontinue website access.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Code className="w-5 h-5 text-indigo-400" />
            <span>2. Intellectual Property & Code Licensing</span>
          </h2>
          <p>
            All original technical research articles, architectural diagrams, and benchmarks published on Zynochat.in are protected by intellectual property laws. Code snippets provided within our engineering guides are licensed under the open-source MIT License for commercial and non-commercial development.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" />
            <span>3. Acceptable Use Policy</span>
          </h2>
          <p>You agree not to engage in any prohibited conduct, including:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>Using automated web scrapers or bots to extract content without authorization.</li>
            <li>Attempting to bypass security firewalls, DDoS protections, or server infrastructure.</li>
            <li>Republishing our copyrighted benchmarks or articles without attribution.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-indigo-400" />
            <span>4. Technical & AdSense Disclaimer</span>
          </h2>
          <p>
            Our guides are provided for informational and educational purposes. See our full <Link href="/disclaimer" className="text-indigo-400 underline">Disclaimer</Link> for technical liability waivers and Google AdSense disclosures.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-lg font-bold text-white">Contact Information</h2>
          <p>For questions regarding software licensing or usage terms, contact:</p>
          <p className="font-mono text-indigo-400 text-xs">Email: support@zynochat.in</p>
        </section>

      </div>

    </div>
  );
}

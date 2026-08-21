import React from 'react';
import { Metadata } from 'next';
import { FileText, Shield, AlertTriangle, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Zynochat',
  description: 'Terms and Conditions governing the use of Zynochat.in technical publications, benchmarks, and code routines.',
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
          <span>Legal Agreement</span>
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
            By accessing or reading content on <strong>Zynochat.in</strong>, you agree to be bound by these Terms and Conditions and all applicable local and international laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-400" />
            <span>2. Intellectual Property & Code License</span>
          </h2>
          <p>
            Unless explicitly stated otherwise, all technical guides, benchmarks, and architectural designs on Zynochat.in are protected by copyright. Code snippets embedded inside our articles are provided under the MIT License for educational and production usage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-indigo-400" />
            <span>3. Technical Disclaimer</span>
          </h2>
          <p>
            The benchmarks, network topologies, and code examples provided on Zynochat.in are offered "AS IS" without warranty of any kind. Developers should perform rigorous security audits prior to deploying cryptographic or messaging code into financial or high-risk environments.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Contact Information</h2>
          <p>For questions regarding software licensing or technical usage terms, contact:</p>
          <p className="font-mono text-indigo-400 text-xs">Email: support@zynochat.in</p>
        </section>

      </div>

    </div>
  );
}

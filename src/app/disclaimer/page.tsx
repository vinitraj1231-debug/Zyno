import React from 'react';
import { Metadata } from 'next';
import { AlertTriangle, ShieldAlert, FileCode, ExternalLink, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer | Zynochat Engineering Hub',
  description: 'Technical, advertising, and legal disclaimers for Zynochat.in publications, benchmarks, code samples, and Google AdSense advertisements.',
  alternates: {
    canonical: 'https://zynochat.in/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
          <AlertTriangle className="w-4 h-4" />
          <span>Technical & Legal Notice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Disclaimer</h1>
        <p className="text-xs text-slate-400 font-mono">Last Updated: August 21, 2026</p>
      </div>

      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileCode className="w-5 h-5 text-indigo-400" />
            <span>1. Technical Content & Code Routine Disclaimer</span>
          </h2>
          <p>
            All information, benchmarks, network topologies, architectural blueprints, and code routines published on <strong>Zynochat.in</strong> are provided for educational and research purposes only. While our engineering team attempts to verify code accuracy, all content is provided "AS IS" without warranty of any kind, express or implied.
          </p>
          <p>
            Developers must perform independent security audits and testing prior to deploying any WebCrypto, WebRTC, WebSocket, or AI model code into production systems or mission-critical software.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-indigo-400" />
            <span>2. Google AdSense & Advertising Disclaimer</span>
          </h2>
          <p>
            Zynochat.in participates in the Google AdSense advertising program. Advertisements displayed on this website are served automatically by Google and third-party ad networks.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>Display of an advertisement on Zynochat.in does not constitute an endorsement, guarantee, or recommendation of the advertised products or services.</li>
            <li>Zynochat.in has no control over the content of third-party advertisements served by Google AdSense algorithms.</li>
            <li>Any transactions or interactions between users and third-party advertisers are strictly between the user and the advertiser.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-indigo-400" />
            <span>3. External Links Disclaimer</span>
          </h2>
          <p>
            Zynochat.in may contain links to external third-party websites or services that are not owned, operated, or controlled by Zynochat.in. We accept no responsibility for the accuracy, security practices, privacy policies, or content of external sites.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-400" />
            <span>4. Limitation of Liability</span>
          </h2>
          <p>
            In no event shall Zynochat.in, its authors, or contributors be held liable for any direct, indirect, incidental, consequential, or punitive damages resulting from the use of or inability to use our technical content, code snippets, or linked external resources.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-lg font-bold text-white">Contact & Feedback</h2>
          <p>For questions regarding our technical disclaimers, please email:</p>
          <p className="font-mono text-indigo-400 text-xs">Email: support@zynochat.in</p>
        </section>

      </div>

    </div>
  );
}

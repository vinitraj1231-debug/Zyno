import React from 'react';
import { Metadata } from 'next';
import { ShieldAlert, FileText, CheckCircle2, Mail, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DMCA & Copyright Policy | Zynochat',
  description: 'Zynochat.in Digital Millennium Copyright Act (DMCA) notice procedure, copyright infringement guidelines, and designated copyright agent information.',
  alternates: {
    canonical: 'https://zynochat.in/dmca',
  },
};

export default function DMCAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <ShieldAlert className="w-4 h-4" />
          <span>Copyright & Intellectual Property Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">DMCA Policy</h1>
        <p className="text-xs text-slate-400 font-mono">Effective Date: August 21, 2026</p>
      </div>

      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <span>1. Intellectual Property Compliance</span>
          </h2>
          <p>
            <strong>Zynochat.in</strong> respects the intellectual property rights of copyright holders and complies fully with the provisions of the United States Digital Millennium Copyright Act (DMCA) and international copyright standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-400" />
            <span>2. Submitting a DMCA Infringement Notice</span>
          </h2>
          <p>
            If you believe that any technical article, diagram, or material published on Zynochat.in infringes upon your copyright, please send a written notification to our Designated Copyright Agent containing the following details:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the exact material on Zynochat.in to be removed (including specific article URLs).</li>
            <li>Your contact information, including full name, mailing address, telephone number, and email address.</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement that the information in the notification is accurate under penalty of perjury.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-indigo-400" />
            <span>3. Designated DMCA Agent Contact</span>
          </h2>
          <p>Please transmit formal DMCA take-down notices to our engineering compliance office:</p>
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
            <p className="text-xs font-bold text-white">Designated DMCA Agent — Zynochat Legal Office</p>
            <p className="text-xs font-mono text-indigo-400">Email: support@zynochat.in</p>
            <p className="text-[11px] text-slate-400">Subject line must begin with: <code className="text-cyan-400">[DMCA NOTICE]</code></p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Counter-Notification Procedure</h2>
          <p>
            If material you posted was removed due to a DMCA notice and you believe it was removed in error or misidentification, you may submit a formal counter-notification to our agent containing your contact info, URL, statement under penalty of perjury, and consent to jurisdiction.
          </p>
        </section>

      </div>

    </div>
  );
}

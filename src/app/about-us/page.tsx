import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ShieldCheck, Cpu, Users, Award, FileCode } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Zynochat Engineering Hub',
  description: 'Learn about Zynochat.in — our engineering mission to advance real-time web technologies, browser WebGPU AI runtimes, zero-knowledge E2EE, and sub-second messaging.',
  alternates: {
    canonical: 'https://zynochat.in/about-us',
  },
};

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

      <div className="space-y-4 border-b border-slate-800 pb-8 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
          <Zap className="w-4 h-4" />
          <span>Engineering Hub & Technical Research</span>
        </div>
        <h1 className="text-4xl font-black text-white">About Zynochat.in</h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Empowering software architects with peer-reviewed benchmarks, zero-knowledge security blueprints, and low-latency messaging infrastructures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Our Engineering Mission</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We bridge the gap between academic protocol specifications and production web applications. From WebSockets vs WebRTC latency testing to in-browser WebGPU LLM execution, our research provides actionable code routines.
          </p>
        </div>

        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Zero-Knowledge First</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Digital privacy is a non-negotiable right. We advocate for client-side WebCrypto API operations, Double Ratchet key generation, and decentralized sub-second message broker topologies.
          </p>
        </div>
      </div>

      <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-400" />
          <span>Core Editorial & Engineering Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white">Dr. Aris Thorne</h4>
            <p className="text-xs text-indigo-400 font-semibold">Principal Systems Architect</p>
            <p className="text-xs text-slate-400">Distributed NATS/Redis broker clusters and high-concurrency WebSocket edge nodes.</p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white">Elena Rostova</h4>
            <p className="text-xs text-emerald-400 font-semibold">Lead Cryptographic Engineer</p>
            <p className="text-xs text-slate-400">Pioneer in WebCrypto API implementations and client-side Double Ratchet encryption.</p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white">Kavya Nair</h4>
            <p className="text-xs text-purple-400 font-semibold">VP of Search Intelligence</p>
            <p className="text-xs text-slate-400">Specializes in Generative Engine Optimization (GEO) for ChatGPT, Claude, and Google AI Overviews.</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-900/30 border border-slate-800/80 rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white">Legal & Compliance Documentation</h4>
          <p className="text-xs text-slate-400">Explore our mandatory legal disclosures, cookie policy, and terms of service.</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <Link href="/privacy-policy" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition">Terms & Conditions</Link>
          <Link href="/contact-us" className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">Contact Engineering</Link>
        </div>
      </div>

    </div>
  );
}

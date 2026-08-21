import React from 'react';
import { Metadata } from 'next';
import { Zap, ShieldCheck, Cpu, Bot, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Zynochat Engineering Hub',
  description: 'Learn about Zynochat.in — our mission to advance real-time web technology, browser WebGPU AI runtimes, and zero-knowledge encryption.',
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
          Empowering web developers with peer-reviewed benchmarks, zero-knowledge security blueprints, and low-latency messaging architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Our Engineering Mission</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We bridge the gap between academic network protocol research and production web implementation. From WebSockets vs WebRTC benchmarks to WebGPU browser AI execution, our guides provide actionable code.
          </p>
        </div>

        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Zero-Knowledge First</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Digital privacy is a fundamental human right. We advocate for client-side WebCrypto API operations, Double Ratchet key generation, and decentralized messaging topologies.
          </p>
        </div>
      </div>

      <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-400" />
          <span>Core Engineering Editorial Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white">Dr. Aris Thorne</h4>
            <p className="text-xs text-indigo-400 font-semibold">Principal Systems Architect</p>
            <p className="text-xs text-slate-400">Specializes in distributed Redis/NATS message brokers and high-concurrency WebSocket clusters.</p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white">Elena Rostova</h4>
            <p className="text-xs text-emerald-400 font-semibold">Lead Cryptographic Engineer</p>
            <p className="text-xs text-slate-400">Pioneer in WebCrypto API integrations and client-side Signal Double Ratchet key exchanges.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

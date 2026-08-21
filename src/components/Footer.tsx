import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/blogs';
import { Zap, Shield, FileText, Mail, Info, Heart, Globe, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Zynochat<span className="text-indigo-500">.in</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Zynochat.in is an engineering knowledge hub and digital privacy platform focused on WebSockets, WebRTC, low-latency messaging, browser AI models, and zero-knowledge end-to-end encryption.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://zynochat.in"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition"
                aria-label="Global Domain"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@zynochat.in"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition"
                aria-label="Support Mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Categories</h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-indigo-400 transition"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-indigo-400 transition">Tech Articles</Link></li>
              <li><Link href="/archive" className="hover:text-indigo-400 transition">All Guides Archive</Link></li>
              <li><Link href="/search" className="hover:text-indigo-400 transition">Search Knowledgebase</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-indigo-400 transition">XML Sitemap</a></li>
            </ul>
          </div>

          {/* Column 4: Mandatory Legal Pages */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Compliance & Policy</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="flex items-center gap-1.5 hover:text-indigo-400 transition">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="flex items-center gap-1.5 hover:text-indigo-400 transition">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="flex items-center gap-1.5 hover:text-indigo-400 transition">
                  <Info className="w-3.5 h-3.5" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="flex items-center gap-1.5 hover:text-indigo-400 transition">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Zynochat.in — All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered for low latency, zero-knowledge privacy & AI search intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}

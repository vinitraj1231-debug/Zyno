'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/blogs';
import { Zap, Search, Menu, X, ShieldCheck, Bot, MessageSquare, TrendingUp, Sparkles, Shield, FileText, Info, Mail, AlertTriangle, Cookie, ShieldAlert } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-4 h-4 text-amber-400" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-cyan-400" />;
      case 'Bot': return <Bot className="w-4 h-4 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-rose-400" />;
      default: return <Sparkles className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition">
                Zynochat<span className="text-indigo-500">.in</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold -mt-1">
                Real-Time Tech & AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition"
            >
              Home
            </Link>

            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition"
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.name}</span>
              </Link>
            ))}

            <Link
              href="/archive"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition"
            >
              Archive
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/search"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg border border-slate-800 transition flex items-center gap-2 text-xs"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Search tech guides...</span>
            </Link>

            <Link
              href="/about-us"
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg shadow-md shadow-indigo-600/20 transition"
            >
              About Hub
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/search"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
            >
              <Search className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-2">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-lg"
          >
            Home Hub
          </Link>

          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 pt-2">
            Categories
          </div>

          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-900 rounded-lg"
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </Link>
          ))}

          <div className="border-t border-slate-800 my-2 pt-2 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 pt-1">
              Legal & Compliance
            </div>
            <Link
              href="/privacy-policy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 hover:text-white"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Privacy Policy</span>
            </Link>
            <Link
              href="/terms-and-conditions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 hover:text-white"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Terms & Conditions</span>
            </Link>
            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 hover:text-white"
            >
              <Info className="w-4 h-4 text-purple-400" />
              <span>About Us</span>
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 hover:text-white"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Support</span>
            </Link>
            <Link
              href="/disclaimer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 hover:text-white"
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Disclaimer</span>
            </Link>
            <Link
              href="/cookie-policy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 hover:text-white"
            >
              <Cookie className="w-4 h-4 text-purple-400" />
              <span>Cookie Policy</span>
            </Link>
            <Link
              href="/dmca"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 hover:text-white"
            >
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>DMCA Policy</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

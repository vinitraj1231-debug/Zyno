import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS, CATEGORIES } from '@/data/blogs';
import { AdContainer } from '@/components/AdContainer';
import { Clock, BookOpen, ArrowRight, FolderArchive, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Full Technical Articles Archive (2026) | Zynochat',
  description: 'Complete chronological index of engineering publications, benchmarks, and architectural guides published on Zynochat.in.',
  alternates: {
    canonical: 'https://zynochat.in/archive',
  },
};

export default function ArchivePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
          <FolderArchive className="w-4 h-4" />
          <span>Complete Publication Index</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Engineering Guides Archive</h1>
        <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
          Browse our complete repository of technical blueprints covering WebSockets, WebRTC, zero-knowledge encryption, and local browser AI engines.
        </p>
      </div>

      <AdContainer slotId="5000000001" />

      {/* Categories Fast Filter Bar */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white text-xs font-medium transition"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Article List */}
      <div className="space-y-4">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="p-6 bg-slate-900/40 border border-slate-800 hover:border-slate-700 rounded-2xl transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-semibold">
                  {post.categoryName}
                </span>
                <span className="text-slate-500">{post.publishDate}</span>
                <span className="text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg font-bold text-white hover:text-indigo-300 transition">
                  {post.title}
                </h3>
              </Link>

              <p className="text-xs text-slate-400 line-clamp-2">
                {post.excerpt}
              </p>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition shrink-0 flex items-center gap-1"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </article>
        ))}
      </div>

    </div>
  );
}

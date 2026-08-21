'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchBlogs, BLOG_POSTS } from '@/data/blogs';
import { AdContainer } from '@/components/AdContainer';
import { Search as SearchIcon, Clock, ArrowRight, BookOpen } from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  const filteredPosts = searchBlogs(query);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-black text-white">Search Technical Knowledgebase</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Find deep dives on WebSockets, WebRTC, WebGPU, local LLMs, and E2EE cryptography.
        </p>

        <div className="relative mt-6">
          <SearchIcon className="w-5 h-5 absolute left-4 top-3.5 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search keywords, protocols, or tags (e.g. WebGPU, E2EE, NATS)..."
            className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-sm shadow-xl"
          />
        </div>
      </div>

      <AdContainer slotId="4000000001" />

      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
          <span>Found <strong className="text-white">{filteredPosts.length}</strong> matching technical guides</span>
          {query && <span>Filter: "{query}"</span>}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3">
            <BookOpen className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-sm text-slate-400">No matching technical publications found.</p>
            <button
              onClick={() => setQuery('')}
              className="text-xs font-semibold text-indigo-400 hover:underline"
            >
              Clear search filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/40 transition duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-semibold uppercase">
                      {post.categoryName}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-white hover:text-indigo-300 transition line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
                  <span className="text-[11px] text-slate-500">{post.publishDate}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-400">Loading search interface...</div>}>
      <SearchContent />
    </Suspense>
  );
}

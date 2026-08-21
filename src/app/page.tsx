import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS, CATEGORIES } from '@/data/blogs';
import { AdContainer } from '@/components/AdContainer';
import {
  Zap,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Bot,
  MessageSquare,
  Clock,
  User,
  BookOpen,
  TrendingUp,
  Cpu,
  Lock,
  Globe
} from 'lucide-react';

export default function HomePage() {
  const featuredPost = BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.slice(1);

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'real-time-tech': return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'web-messaging': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'ai-chat-tools': return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'privacy-security': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'seo-geo-growth': return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      default: return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div className="space-y-16 pb-12">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-Time Web Tech & AI Intelligence Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Architecting Sub-Second <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Real-Time Web</span> & AI Systems
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              Explore technical blueprints, network benchmarks, browser WebGPU AI runtimes, and zero-knowledge cryptography guides for next-generation web communication platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition group"
              >
                <span>Read Featured Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/archive"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm transition"
              >
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>Explore All 2026 Guides</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Categories Bar */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span>Core Engineering Disciplines</span>
            </h2>
            <Link href="/archive" className="text-xs font-semibold text-indigo-400 hover:underline flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group p-5 bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white group-hover:text-indigo-300 transition text-base">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition">
                  <span>Explore Topic</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Ad Banner Unit 1 */}
        <AdContainer slotId="1000000001" />

        {/* Featured Article Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Editor's Engineering Deep Dive</h2>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px]">
              <img
                src={featuredPost.featuredImage}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className={`px-2.5 py-1 rounded-full border font-semibold ${getCategoryBadgeColor(featuredPost.category)}`}>
                    {featuredPost.categoryName}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white hover:text-indigo-300 transition leading-snug">
                    {featuredPost.title}
                  </h3>
                </Link>

                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                    {featuredPost.author.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{featuredPost.author.name}</p>
                    <p className="text-[10px] text-slate-400">{featuredPost.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Technical Articles Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Latest Technical Publications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/5 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-2.5 py-1 rounded-full border text-xs font-semibold backdrop-blur-md bg-slate-950/80 ${getCategoryBadgeColor(post.category)}`}>
                        {post.categoryName}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{post.publishDate}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-white hover:text-indigo-300 transition line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/40 mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">
                    By {post.author.name}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group"
                  >
                    <span>Full Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Ad Banner Unit 2 */}
        <AdContainer slotId="1000000002" />

        {/* Feature Highlights Grid */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 lg:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Why Engineers Trust Zynochat</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We eliminate fluff and provide peer-reviewed benchmark datasets, cryptographic specifications, and clean code routines for web developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Sub-Second Low Latency</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Benchmark comparisons of WebSockets, WebRTC DataChannels, and Server-Sent Events across global edge networks.
              </p>
            </div>

            <div className="p-6 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Zero-Knowledge E2EE</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                WebCrypto API specifications, Double Ratchet key exchanges, and non-extractable key storage protocols in IndexedDB.
              </p>
            </div>

            <div className="p-6 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Browser WebGPU AI</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Run 3B and 7B local language models directly inside user browser tabs using WebGPU and 4-bit quantization.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

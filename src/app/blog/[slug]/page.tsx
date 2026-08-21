import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogBySlug, BLOG_POSTS as ALL_POSTS } from '@/data/blogs';
import { AdContainer } from '@/components/AdContainer';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle2,
  Tag,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Zynochat',
    };
  }

  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `https://zynochat.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://zynochat.in/blog/${post.slug}`,
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = ALL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Schema.org structured data for GEO & Google Search
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `https://zynochat.in/blog/${post.slug}/#article`,
        'isPartOf': {
          '@type': 'WebPage',
          '@id': `https://zynochat.in/blog/${post.slug}/`
        },
        'headline': post.title,
        'description': post.description,
        'image': post.featuredImage,
        'datePublished': `${post.publishDate}T08:00:00+00:00`,
        'dateModified': `${post.publishDate}T08:00:00+00:00`,
        'author': {
          '@type': 'Person',
          'name': post.author.name,
          'jobTitle': post.author.role,
          'worksFor': {
            '@type': 'Organization',
            'name': 'Zynochat',
            'url': 'https://zynochat.in/'
          }
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Zynochat',
          'url': 'https://zynochat.in/',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://zynochat.in/assets/logo.png'
          }
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `https://zynochat.in/blog/${post.slug}/#faq`,
        'mainEntity': post.faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      }
    ]
  };

  return (
    <article className="pb-16 pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Breadcrumb & Info */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Knowledge Hub</span>
        </Link>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-semibold uppercase tracking-wider">
              {post.categoryName}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishDate}
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                {post.author.name[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.author.name}</p>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <button className="p-2 hover:bg-slate-900 rounded-lg border border-slate-800 hover:text-white transition" aria-label="Share Article">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-slate-900 rounded-lg border border-slate-800 hover:text-white transition" aria-label="Bookmark Article">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-8">
        <div className="relative h-[280px] sm:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">

        {/* Table of Contents Box */}
        <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Table of Contents</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {post.tableOfContents.map((toc) => (
              <li key={toc.id}>
                <a href={`#${toc.id}`} className="hover:text-indigo-400 transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>{toc.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ad Container Before Article Text */}
        <AdContainer slotId="2000000001" />

        {/* Render Rich Markdown/HTML Article Body */}
        <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-p:leading-relaxed prose-code:text-indigo-300 prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800 prose-li:text-slate-300">
          <div dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }} />
        </div>

        {/* Ad Container Mid-Article */}
        <AdContainer slotId="2000000002" />

        {/* FAQ Section (Key for GEO & Generative AI Indexing) */}
        <section className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Frequently Asked Technical Questions</h3>
          </div>

          <div className="space-y-4">
            {post.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-start gap-2">
                  <span className="text-indigo-400 font-mono">Q:</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Article Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <Tag className="w-4 h-4 text-slate-500" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Technical Articles */}
        <section className="border-t border-slate-800 pt-10 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>Recommended Engineering Guides</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="p-5 bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 rounded-xl transition group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                    {rel.categoryName}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-4 text-xs font-semibold text-indigo-400 flex items-center gap-1">
                  <span>Read Guide</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}

// Simple Helper to format markdown headers, lists, bold text, and code blocks cleanly
function formatMarkdown(content: string): string {
  let html = content;

  // Code blocks
  html = html.replace(/```(typescript|javascript|plaintext|html|http)([\s\S]*?)```/g, (match, lang, code) => {
    return `<div className="my-6 rounded-xl overflow-hidden border border-slate-800 bg-slate-950"><div className="px-4 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-indigo-400 uppercase font-bold">${lang}</div><pre className="p-4 overflow-x-auto text-xs font-mono text-slate-200"><code>${escapeHtml(code.trim())}</code></pre></div>`;
  });

  // Headers
  html = html.replace(/^## (.*$)/gim, '<h2 className="text-2xl font-bold text-white mt-10 mb-4 border-b border-slate-800/80 pb-2">$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3 className="text-xl font-bold text-indigo-300 mt-8 mb-3">$1</h3>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code className="px-1.5 py-0.5 rounded bg-slate-900 text-indigo-300 border border-slate-800 text-xs font-mono">$1</code>');

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong className="font-bold text-white">$1</strong>');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li className="ml-4 list-disc text-slate-300 my-1">$1</li>');

  // Paragraph breaks
  html = html.split('\n\n').map(p => {
    if (p.startsWith('<h2') || p.startsWith('<h3') || p.startsWith('<div') || p.startsWith('<li')) {
      return p;
    }
    return `<p className="mb-4 text-slate-300 leading-relaxed">${p}</p>`;
  }).join('');

  return html;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

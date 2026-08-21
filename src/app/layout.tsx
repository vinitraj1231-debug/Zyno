import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://zynochat.in'),
  title: {
    default: 'Zynochat | Real-Time Web Technology, AI Tools & Privacy Intelligence',
    template: '%s | Zynochat'
  },
  description: 'Explore deep-dive technical guides, benchmark comparisons, and architectural blueprints for WebSockets, WebRTC, AI chatbots, end-to-end encryption, and web privacy.',
  keywords: [
    'Zynochat',
    'WebSockets',
    'WebRTC',
    'real-time messaging',
    'AI chatbot privacy',
    'end to end encryption',
    'Generative Engine Optimization',
    'WebGPU AI',
    'Zero Knowledge Architecture'
  ],
  authors: [{ name: 'Zynochat Engineering Team' }],
  creator: 'Zynochat Engineering Team',
  publisher: 'Zynochat',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://zynochat.in/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zynochat.in/',
    siteName: 'Zynochat',
    title: 'Zynochat | Real-Time Web Technology, AI Tools & Privacy Intelligence',
    description: 'Master low-latency web architecture, WebSockets, WebRTC, privacy-first AI chatbots, and browser cryptography with engineering benchmarks and code.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Zynochat Real-Time Web Technology & AI Intelligence'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zynochat',
    creator: '@zynochat',
    title: 'Zynochat | Real-Time Web Tech & AI Privacy Hub',
    description: 'Technical blueprints and benchmarks for WebSockets, WebRTC, E2EE messaging, and browser AI integration.',
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://zynochat.in/#organization',
        'name': 'Zynochat',
        'url': 'https://zynochat.in/',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://zynochat.in/assets/logo.png'
        },
        'sameAs': [
          'https://twitter.com/zynochat',
          'https://github.com/zynochat'
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'email': 'support@zynochat.in',
          'contactType': 'customer support',
          'availableLanguage': ['English']
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://zynochat.in/#website',
        'url': 'https://zynochat.in/',
        'name': 'Zynochat',
        'description': 'Real-Time Web Technology, AI Tools & Privacy Intelligence Hub',
        'publisher': {
          '@id': 'https://zynochat.in/#organization'
        },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://zynochat.in/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-indigo-500 selection:text-white`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

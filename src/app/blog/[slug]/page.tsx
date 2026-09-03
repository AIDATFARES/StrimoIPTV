import React from "react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import ArticleFAQAccordion from "@/components/blog/ArticleFAQAccordion";
import BlogOfferCard from "@/components/blog/BlogOfferCard";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<import('next').Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found | Strimo IPTV' };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

function parseArticleContent(content: string) {
  const faqMatch = content.match(/## Frequently Asked Questions([\s\S]*?)(?=\n## |$)/);
  if (!faqMatch) {
    return { beforeFaq: content, faqs: [], afterFaq: "" };
  }

  const faqBlock = faqMatch[0];
  const faqStartIndex = content.indexOf("## Frequently Asked Questions");
  const beforeFaq = content.substring(0, faqStartIndex);
  const afterFaq = content.substring(faqStartIndex + faqBlock.length);

  const faqItems: { question: string; answer: string }[] = [];
  const qBlocks = faqMatch[1].split(/\n### /).slice(1);

  for (const block of qBlocks) {
    const lines = block.trim().split("\n");
    const question = lines[0].trim();
    const answer = lines.slice(1).join("\n").trim().replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
    if (question && answer) {
      faqItems.push({ question, answer });
    }
  }

  return { beforeFaq, faqs: faqItems, afterFaq };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { beforeFaq, faqs, afterFaq } = parseArticleContent(post.content);

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  const markdownComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ node, ...props }: any) => <h2 className="text-2xl font-bold mt-12 mb-6 text-white" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ node, ...props }: any) => <h3 className="text-xl font-bold mt-8 mb-4 text-white" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: ({ node, ...props }: any) => <p className="mb-6 leading-relaxed" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ul: ({ node, ...props }: any) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ol: ({ node, ...props }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: ({ node, ...props }: any) => <a className="text-[#36a9ff] hover:text-[#2196f3] underline underline-offset-2 font-semibold transition-colors" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ node, ...props }: any) => <blockquote className="border-l-4 border-[#36a9ff] pl-4 py-1 mb-6 italic bg-[#031726]/50 rounded-r" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ({ node, ...props }: any) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse" {...props} /></div>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    th: ({ node, ...props }: any) => <th className="border-b border-[#36a9ff]/20 py-3 px-4 font-semibold text-white bg-[#031726]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    td: ({ node, ...props }: any) => <td className="border-b border-[#36a9ff]/10 py-3 px-4" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: ({ node, alt, src, ...props }: any) => (
      <span className="my-8 flex flex-col items-center">
        <img src={src} alt={alt} className="rounded-xl max-w-full shadow-lg" {...props} />
        {alt && <span className="text-sm text-center block mt-2 opacity-70 text-gray-400">{alt}</span>}
      </span>
    ),
    cta: () => <div className="not-prose my-12"><BlogOfferCard /></div>,
  };

  return (
    <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-[1024px] mx-auto w-full relative z-10">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Link href="/blog" className="inline-flex items-center text-[#36a9ff] hover:text-[#2196f3] mb-8 transition-colors group font-bold tracking-wider uppercase text-sm">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <article className="bg-[#051f33] border border-[#36a9ff]/20 rounded-2xl p-6 md:p-12 shadow-xl">
        <header className="mb-10 text-center">
          <span className="inline-block px-3 py-1 bg-[#36a9ff]/10 text-[#36a9ff] rounded-full text-[12px] font-bold tracking-widest uppercase mb-6 w-max border border-[#36a9ff]/30">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 font-bold uppercase tracking-wider text-xs">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {post.coverImage && (
          <div className="mb-12 rounded-xl overflow-hidden relative w-full h-[300px] md:h-[500px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-gray-300 
          prose-headings:text-white prose-headings:font-bold 
          prose-a:text-[#36a9ff] hover:prose-a:text-[#2196f3] prose-a:underline prose-a:font-semibold
          prose-strong:text-white prose-strong:font-bold
          prose-code:text-[#36a9ff] prose-code:bg-[#031726]/50 prose-code:px-1 prose-code:rounded
          prose-pre:bg-[#031726] prose-pre:border prose-pre:border-[#36a9ff]/20
          prose-blockquote:border-l-[#36a9ff] prose-blockquote:bg-[#031726]/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic
          prose-img:rounded-xl
          prose-th:text-white prose-th:border-b prose-th:border-[#36a9ff]/20 prose-th:py-2
          prose-td:border-b prose-td:border-[#36a9ff]/10 prose-td:py-2"
        >
          {beforeFaq.split("<cta></cta>").map((section, index, array) => (
            <React.Fragment key={index}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {section}
              </ReactMarkdown>
              {index < array.length - 1 && (
                <div className="not-prose my-12 w-full"><BlogOfferCard /></div>
              )}
            </React.Fragment>
          ))}

          {faqs.length > 0 && (
            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <ArticleFAQAccordion faqs={faqs} />
            </div>
          )}

          {afterFaq && (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {afterFaq}
            </ReactMarkdown>
          )}
        </div>
      </article>

      {/* Related Articles Section */}
      {(() => {
        const relatedPosts = blogPosts
          .filter((p) => p.slug !== post.slug)
          .slice(0, 3);
        if (relatedPosts.length === 0) return null;
        return (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link href={`/blog/${relPost.slug}`} key={relPost.id}>
                  <article className="bg-[#051f33] rounded-xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300 h-full border border-[#36a9ff]/20 hover:border-[#36a9ff]/50 shadow-lg">
                    <div className="h-40 relative overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={relPost.title}
                        src={relPost.coverImage || "/blog/high-quality-iptv-service.webp"}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="text-[10px] text-[#36a9ff] font-bold tracking-widest uppercase mb-2">{relPost.category}</span>
                      <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-[#36a9ff] transition-colors leading-snug">
                        {relPost.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-auto">
                        {relPost.date}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}
    </main>
  );
}


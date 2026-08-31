"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Mail } from "lucide-react";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full relative z-10">
      {/* Header */}
      <header className="mb-16 text-center md:text-left">
        <h1 className="font-display-lg text-display-lg text-slate-900 mb-4 font-bold tracking-tight">Latest News &amp; Streaming Tips</h1>
        <p className="font-body-lg text-body-lg text-slate-600 max-w-2xl mx-auto md:mx-0">
          Stay updated with the latest in 4K streaming technology, new channel additions, and guides to optimize your realmiptv experience.
        </p>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-24">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="bg-[#051f33] border border-[#36a9ff]/20 rounded-2xl overflow-hidden flex flex-col md:flex-row group cursor-pointer transition-all duration-500 shadow-2xl hover:shadow-[#36a9ff]/20 hover:border-[#36a9ff]/50">
              <div className="md:w-3/5 h-64 md:h-[450px] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  alt={featuredPost.title}
                  src={featuredPost.coverImage || ""}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051f33] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#051f33] opacity-90 md:opacity-100"></div>
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center z-10 relative bg-[#051f33] md:bg-transparent">
                <span className="inline-block px-3 py-1 bg-[#36a9ff]/10 text-[#36a9ff] rounded-full font-label-caps text-[12px] font-bold tracking-widest uppercase mb-6 w-max border border-[#36a9ff]/30">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#36a9ff] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 text-lg mb-8 line-clamp-3 leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <span className="text-white font-bold text-base uppercase tracking-wider">Read Article</span>
                  <ArrowRight className="text-[#36a9ff] w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {gridPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="bg-[#051f33] border border-[#36a9ff]/20 rounded-xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300 h-full shadow-lg hover:shadow-[#36a9ff]/20 hover:border-[#36a9ff]/50">
              <div className="h-56 relative overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={post.title}
                  src={post.coverImage || ""}
                />
                <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#051f33] to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white rounded-md font-bold text-[10px] tracking-widest uppercase border border-white/10">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xl font-bold text-white mb-3 group-hover:text-[#36a9ff] transition-colors leading-snug">
                  {post.title}
                </p>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-gray-500 text-xs font-semibold tracking-wider uppercase">
                  <span>{post.date}</span>
                  <span className="text-[#36a9ff] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#051f33] border border-[#36a9ff]/20 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#36a9ff]/10 to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <Mail className="w-12 h-12 text-[#36a9ff] mb-6 mx-auto" />
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to our newsletter for the latest streaming tips, platform updates, and exclusive reseller offers delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-[#031726] border border-[#36a9ff]/30 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-[#36a9ff] focus:ring-1 focus:ring-[#36a9ff] w-full sm:w-96 transition-all shadow-inner"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="bg-[#36a9ff] hover:bg-[#2196f3] text-white font-bold text-base tracking-wider uppercase px-8 py-4 rounded-lg whitespace-nowrap transition-colors shadow-lg shadow-[#36a9ff]/20"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

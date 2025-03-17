"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "./animations/FadeIn";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The Future of AI in Customer Success",
    excerpt: "Discover how artificial intelligence is transforming customer success teams and enhancing user experiences.",
    date: "May 15, 2025",
    author: "Alex Rivera",
    image: "https://ext.same-assets.com/3158617101/3044498050.png",
    tag: "AI",
    slug: "future-of-ai-in-customer-success"
  },
  {
    title: "5 Ways to Improve Product Documentation",
    excerpt: "Learn effective strategies for creating documentation that users will actually read and benefit from.",
    date: "May 8, 2025",
    author: "Jamie Chen",
    image: "https://ext.same-assets.com/1481231525/3021869311.png",
    tag: "Documentation",
    slug: "improve-product-documentation"
  },
  {
    title: "Measuring the ROI of Customer Education",
    excerpt: "How to quantify the business impact of investing in customer education and training resources.",
    date: "May 1, 2025",
    author: "Priya Sharma",
    image: "https://ext.same-assets.com/4068490162/3295631986.png",
    tag: "ROI",
    slug: "measuring-roi-of-customer-education"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and strategies to help you improve customer experience and drive product adoption.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={0.1 * (index + 1)}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                          {post.tag}
                        </span>
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center">
          <FadeIn delay={0.4}>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/blog">
                View All Posts
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

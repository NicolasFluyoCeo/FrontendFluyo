"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "./animations/FadeIn";

const testimonials = [
  {
    quote: "SAMMY transformed our customer onboarding process. The AI-generated tutorials have cut our support tickets by 40% and greatly improved user activation.",
    author: "Sarah Johnson",
    title: "Head of Customer Success at TechFlow",
    image: "https://ext.same-assets.com/790998179/1319482991.png"
  },
  {
    quote: "The product walkthroughs automatically adapt to our UI changes, saving us countless hours of manual updates. It's like having an extra team member dedicated to documentation.",
    author: "Michael Chen",
    title: "Product Director at FinanceAI",
    image: "https://ext.same-assets.com/790998179/1319482991.png"
  },
  {
    quote: "Our customer support team now handles complex issues while SAMMY takes care of common questions. The personalized guides for each user segment have been a game-changer.",
    author: "Elena Rodriguez",
    title: "CTO at HealthConnect",
    image: "https://ext.same-assets.com/790998179/1319482991.png"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our Customers Say
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden relative border-4 border-white shadow">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <svg className="text-primary h-8 w-8 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                </svg>

                <p className="text-lg italic mb-6">
                  {testimonials[activeIndex].quote}
                </p>

                <div>
                  <p className="font-bold text-lg">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-600">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={previousTestimonial}
                className="h-10 w-10 rounded-full p-0 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === activeIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full p-0 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

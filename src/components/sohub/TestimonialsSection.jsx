"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      "SOHUB Connect transformed our e-commerce business. Customers love the instant Click-to-Call feature on our product pages. Our response time went from hours to seconds.",
    name: "Fahim Ahmed",
    jobTitle: "Founder, DhakaShop.com",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "HotScan QR codes on our delivery packaging have been a game-changer. Customers can reach support instantly just by scanning. No more missed calls or lost sales.",
    name: "Nusrat Jahan",
    jobTitle: "Operations Manager, Quick Delivery BD",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Finally, a PBX that understands SOHO businesses in Bangladesh. Setup took 5 minutes. Our team of 4 is now reachable professionally without sharing personal numbers.",
    name: "Karim Rahman",
    jobTitle: "CEO, TechStart Bangladesh",
    avatar:
      "https://images.pexels.com/photos/33073497/pexels-photo-33073497.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "The free plan is perfect for small businesses. We're growing and love that we can scale easily. SOHUB Connect feels built specifically for us.",
    name: "Shabnam Akter",
    jobTitle: "Owner, Handmade Crafts BD",
    avatar:
      "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 2)) %
        Math.ceil(testimonials.length / 2),
    );
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="py-20 md:py-24 px-6 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div className="space-y-4 mb-6 md:mb-0">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#22C55E]">
              <Star size={14} className="mr-1 text-[#22C55E]" />
              <span className="font-inter font-medium text-xs text-[#16A34A] dark:text-[#22C55E]">
                Testimonials
              </span>
            </div>

            {/* Main heading */}
            <h2 className="font-plus-jakarta-sans font-bold text-3xl md:text-4xl text-[#111111] dark:text-white leading-tight">
              Trusted by Bangladesh Businesses
            </h2>

            {/* Intro paragraph */}
            <p className="font-inter text-base max-w-2xl text-[#6B7280] dark:text-white dark:text-opacity-70 leading-relaxed">
              See how SOHO and e-commerce businesses across Bangladesh are using
              SOHUB Connect to transform their customer communication.
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white dark:bg-[#1E1E1E] border border-[#E5E7EB] dark:border-gray-600 flex items-center justify-center transition-all duration-200 hover:bg-gray-50 dark:hover:bg-[#262626] active:bg-gray-100 dark:active:bg-[#2A2A2A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
            >
              <ChevronLeft
                size={20}
                className="text-[#6B7280] dark:text-white dark:text-opacity-70"
              />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center transition-all duration-200 hover:bg-[#16A34A] active:bg-[#15803D] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E5E7EB] dark:border-gray-700 p-8 transition-all duration-200 hover:border-[#22C55E] dark:hover:border-[#22C55E] hover:shadow-xl"
            >
              {/* Star Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#22C55E"
                    className="text-[#22C55E]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-inter text-base mb-6 text-[#374151] dark:text-white dark:text-opacity-87 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Reviewer */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <div className="font-inter font-semibold text-base text-[#111111] dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="font-inter text-sm text-[#6B7280] dark:text-white dark:text-opacity-60">
                    {testimonial.jobTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white dark:bg-[#1E1E1E] border border-[#E5E7EB] dark:border-gray-600 flex items-center justify-center transition-all duration-200 hover:bg-gray-50 dark:hover:bg-[#262626] active:scale-95"
          >
            <ChevronLeft
              size={20}
              className="text-[#6B7280] dark:text-white dark:text-opacity-70"
            />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center transition-all duration-200 hover:bg-[#16A34A] active:scale-95"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

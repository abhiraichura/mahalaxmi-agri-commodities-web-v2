import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "In 15 years of sourcing cumin for export, I've worked with dozens of brokers. Mahalaxmi Agri is the only one who calls me before I need to call him. That's the difference.",
    author: "Managing Director",
    company: "Export House, Ahmedabad",
  },
  {
    quote: "The market intelligence they provide is unmatched. Their price tracking and seasonal insights have helped us time our purchases perfectly, saving us significant costs.",
    author: "Procurement Head",
    company: "Spice Trading Co., Mumbai",
  },
  {
    quote: "As a supplier from Saurashtra, I was always dependent on local mandi rates. Through Mahalaxmi Agri, I've connected with export buyers who pay 30-40% premium. Game changer.",
    author: "Farmer & Aggregator",
    company: "Rajkot, Gujarat",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <blockquote className="editorial text-text-primary mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-bg-warm flex items-center justify-center">
                <span className="text-brand-primary font-bold text-sm">
                  {testimonials[current].author.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <p className="font-barlow font-medium text-sm text-text-primary">
                  {testimonials[current].author}
                </p>
                <p className="text-text-muted text-xs">
                  {testimonials[current].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-brand-primary w-6' : 'bg-border-light'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

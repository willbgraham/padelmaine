"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

const investmentOptions = [
  "$25K–$100K",
  "$100K–$250K",
  "$250K+",
  "Just Learning",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    investmentInterest: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-32 bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle="Get In Touch"
            title="Be Part of Maine's Padel Story"
            description="We are actively raising our founding investment round. Request the full investor deck or schedule a call with our team."
            dark
          />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-16">
            {/* Contact Form */}
            <motion.div variants={slideInLeftVariants}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <CheckCircle className="text-cream mb-6" size={48} />
                  <h3 className="font-display text-2xl font-bold text-cream">
                    Thank You
                  </h3>
                  <p className="text-cream/60 mt-3 max-w-sm">
                    We&apos;ve received your inquiry and will be in touch within
                    24 hours with the full investor deck.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-cream/60 text-sm mb-1.5">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream/5 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-cream/40 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-cream/60 text-sm mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream/5 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-cream/40 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-cream/60 text-sm mb-1.5">
                      Organization / Fund
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-cream/5 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-cream/40 transition-colors"
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label htmlFor="investmentInterest" className="block text-cream/60 text-sm mb-1.5">
                      Investment Interest *
                    </label>
                    <select
                      id="investmentInterest"
                      required
                      value={formData.investmentInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          investmentInterest: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-cream/5 border border-cream/10 rounded-xl text-cream focus:outline-none focus:border-cream/40 transition-colors appearance-none"
                    >
                      <option value="" className="bg-forest text-cream">
                        Select range
                      </option>
                      {investmentOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-forest text-cream"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-cream/60 text-sm mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-cream/5 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-cream/40 transition-colors resize-none"
                      placeholder="Tell us about your interest..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-300 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-cream hover:bg-white text-forest font-medium rounded-full transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    {sending ? "Sending..." : "Submit"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={slideInRightVariants} className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="text-cream mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-cream/50 text-sm">Email</p>
                  {/* TODO: Replace with real email */}
                  <a
                    href="mailto:william@padelmaine.com"
                    className="text-cream hover:text-cream transition-colors"
                  >
                    william@padelmaine.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-cream mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-cream/50 text-sm">Location</p>
                  <p className="text-cream">
                    The Downs
                    <br />
                    Scarborough, Maine 04074
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23313.39825!2d-70.37!3d43.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb29e3a2eb037db%3A0xbbd87e59cc33d0a1!2sThe%20Downs%20in%20Scarborough!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Downs, Scarborough, Maine"
                  className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {/* TODO: Replace with real social links */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/40 hover:text-cream transition-colors text-sm"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/40 hover:text-cream transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

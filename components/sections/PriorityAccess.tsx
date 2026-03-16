"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function PriorityAccess() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/priority-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="priority-access"
      className="scroll-mt-20 py-24 md:py-32 bg-forest"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle="Be First"
            title="Join the Priority Access List"
            description="Be among the first to play when Maine Padel opens its doors. Priority Access members will receive early membership offers, exclusive event invitations, and founding member benefits."
            dark
          />

          <motion.div
            variants={fadeUpVariants}
            className="mt-12 max-w-lg mx-auto"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8"
              >
                <CheckCircle className="text-cream mb-4" size={44} />
                <h3 className="font-display text-2xl font-bold text-cream">
                  You&apos;re on the List
                </h3>
                <p className="text-cream/60 mt-3 max-w-sm">
                  We&apos;ll be in touch with exclusive updates and early access
                  details as we get closer to opening day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="flex-1 px-5 py-3.5 bg-cream/5 border border-cream/10 rounded-full text-cream placeholder:text-cream/30 focus:outline-none focus:border-cream/40 transition-colors"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="flex-1 px-5 py-3.5 bg-cream/5 border border-cream/10 rounded-full text-cream placeholder:text-cream/30 focus:outline-none focus:border-cream/40 transition-colors"
                    placeholder="Your email"
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
                  {sending ? "Joining..." : "Get Priority Access"}
                  {!sending && <ArrowRight size={16} />}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

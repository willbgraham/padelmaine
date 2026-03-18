"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle, ArrowRight, ChevronDown } from "lucide-react";

interface Signup {
  name: string;
  date: string;
}

export default function PriorityAccess() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [showOnList, setShowOnList] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [signups, setSignups] = useState<Signup[]>([]);
  const [listOpen, setListOpen] = useState(false);

  // Fetch the public signup list
  useEffect(() => {
    fetch("/api/priority-access")
      .then((res) => res.json())
      .then((data) => setSignups(data.signups || []))
      .catch(() => {});
  }, [submitted]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/priority-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, showOnList }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
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
                    placeholder="First name"
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

                {/* Show on list checkbox */}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={showOnList}
                      onChange={(e) => setShowOnList(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded border border-cream/30 bg-cream/5 peer-checked:bg-cream peer-checked:border-cream transition-colors flex items-center justify-center">
                      {showOnList && (
                        <svg
                          className="w-3 h-3 text-forest"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-cream/60 text-sm group-hover:text-cream/80 transition-colors">
                    Add my first name to the Priority Access list on this website
                  </span>
                </label>

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

          {/* Collapsible signup list */}
          {signups.length > 0 && (
            <motion.div
              variants={fadeUpVariants}
              className="mt-12 max-w-lg mx-auto"
            >
              <button
                onClick={() => setListOpen(!listOpen)}
                className="w-full flex items-center justify-center gap-2 text-cream hover:text-white transition-colors cursor-pointer text-sm font-medium"
              >
                <span>
                  {signups.length} {signups.length === 1 ? "person" : "people"} on
                  the Priority Access List
                </span>
                <motion.div
                  animate={{ rotate: listOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {listOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 rounded-xl border border-cream/20 bg-cream/10 divide-y divide-cream/10">
                      {signups.map((signup, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between px-5 py-3"
                        >
                          <span className="text-cream text-sm font-medium">
                            {signup.name}
                          </span>
                          <span className="text-cream/70 text-xs">
                            {formatDate(signup.date)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

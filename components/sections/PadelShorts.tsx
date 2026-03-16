"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import { padelShorts } from "@/lib/facilityData";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  YouTube IFrame API types (minimal subset we need)                  */
/* ------------------------------------------------------------------ */
interface YTPlayerEvent {
  target: YTPlayerInstance;
  data: number;
}

interface YTPlayerInstance {
  pauseVideo: () => void;
  getIframe: () => HTMLIFrameElement;
}

declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement | string,
        opts: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onStateChange?: (e: YTPlayerEvent) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState: { PLAYING: number };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function PadelShorts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const playersRef = useRef<Map<string, YTPlayerInstance>>(new Map());
  const containerRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  /* ---------- Load YouTube IFrame API once ---------- */
  useEffect(() => {
    // If the API is already loaded, initialize players directly
    if (window.YT && window.YT.Player) {
      initPlayers();
      return;
    }

    // Otherwise, load the script and wait
    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]'
    );

    window.onYouTubeIframeAPIReady = () => initPlayers();

    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }

    return () => {
      // Cleanup: remove callback
      window.onYouTubeIframeAPIReady = () => {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------- Create YT.Player for each short ---------- */
  const initPlayers = useCallback(() => {
    padelShorts.forEach((short) => {
      const el = containerRefs.current.get(short.videoId);
      if (!el || playersRef.current.has(short.videoId)) return;

      const player = new window.YT.Player(el, {
        videoId: short.videoId,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onStateChange: (event: YTPlayerEvent) => {
            // State 1 = PLAYING
            if (event.data === 1) {
              pauseAllExcept(short.videoId);
            }
          },
        },
      });

      playersRef.current.set(short.videoId, player);
    });
  }, []);

  /* ---------- Pause every player except the active one ---------- */
  const pauseAllExcept = (activeId: string) => {
    playersRef.current.forEach((player, id) => {
      if (id !== activeId) {
        try {
          player.pauseVideo();
        } catch {
          // Player may not be ready yet — safe to ignore
        }
      }
    });
  };

  /* ---------- Horizontal scroll ---------- */
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  /* ---------- Ref setter for each player container ---------- */
  const setContainerRef = (videoId: string) => (el: HTMLDivElement | null) => {
    if (el) containerRefs.current.set(videoId, el);
  };

  return (
    <section className="py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerVariants}
        >
          <SectionHeading
            subtitle="The Culture"
            title="Padel Is Everywhere"
            description="From viral rallies to celebrity courts — the world can't stop playing padel."
            dark
          />

          {/* Scroll Controls */}
          <motion.div variants={fadeUpVariants} className="mt-12 relative">
            {/* Arrow buttons */}
            <div className="hidden md:flex justify-end gap-3 mb-6">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-6 px-6 lg:-mx-8 lg:px-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {padelShorts.map((short, index) => (
                <motion.div
                  key={short.videoId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="snap-start flex-shrink-0"
                >
                  <div className="w-[220px] md:w-[250px] group">
                    {/* 9:16 aspect ratio container — YT API replaces the div with an iframe */}
                    <div
                      className="relative w-full rounded-2xl overflow-hidden bg-charcoal-light border border-cream/5 group-hover:border-cream/15 transition-colors [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:w-full [&>iframe]:h-full"
                      style={{ aspectRatio: "9/16" }}
                      ref={setContainerRef(short.videoId)}
                    />
                    {/* Title + Category */}
                    <div className="mt-3 px-1">
                      <p className="text-cream/80 text-sm font-medium truncate">
                        {short.title}
                      </p>
                      <p className="text-cream/30 text-xs mt-0.5 capitalize">
                        {short.category === "womens"
                          ? "Women's Padel"
                          : short.category === "trickshot"
                          ? "Trick Shot"
                          : short.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fade edges */}
            <div className="pointer-events-none absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-charcoal to-transparent z-10 hidden md:block" />
            <div className="pointer-events-none absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-charcoal to-transparent z-10 hidden md:block" />
          </motion.div>

          {/* Mobile swipe hint */}
          <p className="text-cream/20 text-xs text-center mt-4 md:hidden">
            Swipe to explore →
          </p>
        </motion.div>
      </div>
    </section>
  );
}

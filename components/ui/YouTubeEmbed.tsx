"use client";

import { useRef, useEffect, useCallback } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasPlayed = useRef(false);

  const postMessage = useCallback(
    (action: string) => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: action, args: [] }),
        "*"
      );
    },
    []
  );

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Listen for state changes from YouTube to know when user starts playing
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data.event === "onStateChange" && data.info === 1) {
          hasPlayed.current = true;
        }
      } catch {
        // ignore non-JSON messages
      }
    };
    window.addEventListener("message", handleMessage);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && hasPlayed.current) {
          postMessage("pauseVideo");
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(iframe);

    return () => {
      observer.disconnect();
      window.removeEventListener("message", handleMessage);
    };
  }, [postMessage]);

  return (
    <iframe
      ref={iframeRef}
      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      className="absolute inset-0 w-full h-full"
    />
  );
}

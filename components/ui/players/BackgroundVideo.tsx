"use client";

import { useEffect, useRef } from "react";

type BackgroundVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export default function BackgroundVideo({
  src,
  poster,
  className = "",
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS + Safari autoplay fix
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
      {/* Optional WebM for better compression */}
      {/* <source src="/video-bg.webm" type="video/webm" /> */}
    </video>
  );
}

"use client";
import { Desktop } from "@/components/desktop";
import { Mobile } from "@/components/mobile";
import useResponsive from "@/hooks/useResponsive";
import { useEffect, useState } from "react";

export default function Home() {
  const responsive = useResponsive();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (responsive === "desktop") {
    return <Desktop scroll={scrollPosition} />;
  } else {
    return <Mobile scroll={scrollPosition} />;
  }
}

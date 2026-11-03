"use client";

import { useState } from "react";
import { MdLocationOn } from "react-icons/md";

import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MapEmbedProps {
  src: string;
  title: string;
  className?: string;
}

/**
 * Peta Google baru dimuat setelah pengunjung menekan tombol.
 * Peta memuat skrip, cookie pihak ketiga, dan menulis peringatan ke Console;
 * menundanya menjaga skor Best Practices dan mempercepat halaman.
 */
export function MapEmbed({ src, title, className }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className={cn("border-0 bg-line", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 bg-line p-6 text-center",
        className,
      )}
    >
      <MdLocationOn size={40} aria-hidden="true" className="text-ink" />
      <p className="max-w-xs text-sm text-ink">
        Peta dari Google dimuat setelah Anda menekan tombol ini.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className={buttonStyles("dark")}
      >
        Tampilkan peta
      </button>
    </div>
  );
}

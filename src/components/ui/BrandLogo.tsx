import Image from "next/image";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      alt="Zyminex IPTV"
      className={`block shrink-0 object-contain object-left drop-shadow-[0_2px_10px_rgba(229,9,20,0.3)] transition-all ${compact ? "h-20 w-56" : "h-28 w-80"}`}
      src="/zyminexiptv-logo-v2.webp"
      width={320}
      height={112}
      sizes="(max-width: 768px) 224px, 320px"
      priority
    />
  );
}

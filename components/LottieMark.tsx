"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

/**
 * Laadt een Lottie-animatie (After Effects-export) uit een JSON-bestand.
 * Gebruik: zet bijv. een export in /public/lottie/flourish.json en render
 *   <LottieMark src="/lottie/flourish.json" className="mx-auto w-40" />
 * Toont niets zolang er geen bestand is (geen breuk).
 */
export function LottieMark({ src, className = "" }: { src: string; className?: string }) {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    let active = true;
    fetch(src)
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (active && json) setData(json);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [src]);

  if (!data) return null;
  return <Lottie animationData={data} loop autoplay className={className} />;
}

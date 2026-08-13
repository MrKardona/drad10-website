"use client";

import { useState, useRef, useEffect } from "react";
import type { FaqItem } from "@/lib/tratamientos/types";

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : "0px";
  }, [isOpen]);

  return (
    <div className="border-b" style={{ borderColor: "rgba(184,154,106,0.2)" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b89a6a]"
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            fontSize: "1rem",
            color: isOpen ? "#b89a6a" : "#1c1c1c",
            letterSpacing: "0.01em",
            lineHeight: 1.4,
            transition: "color 0.3s",
          }}
        >
          {item.q}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 mt-0.5 select-none"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "1.35rem",
            lineHeight: 1,
            color: isOpen ? "#b89a6a" : "#1c1c1c",
            width: "1.25rem",
            textAlign: "center",
            opacity: isOpen ? 1 : 0.55,
            transition: "all 0.3s",
          }}
        >
          {isOpen ? "×" : "+"}
        </span>
      </button>

      <div
        ref={answerRef}
        role="region"
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <p
          className="pb-6"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            color: "rgba(28,28,28,0.68)",
            maxWidth: "58ch",
            lineHeight: 1.75,
            paddingRight: "2.5rem",
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export function TratamientoFAQ({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? null : i)}
        />
      ))}
    </div>
  );
}

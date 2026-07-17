"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section title="FAQ">
      <div className="space-y-4">
        {site.faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Reveal key={item.question} delay={index * 80}>
              <div className="sketch-card overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-xl transition-transform",
                      isOpen ? "rotate-45" : "rotate-0",
                    )}
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <div className="border-t border-border px-6 py-5 text-sm leading-7 text-muted">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

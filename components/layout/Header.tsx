"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-header/95 text-white backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white text-sm font-bold text-header"
        >
          M
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:gap-8 md:flex">
          {site.nav.map((item) =>
            item.href.includes("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm lowercase tracking-wide text-white/90 transition hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm lowercase tracking-wide text-white/90 transition hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-accent-bright/60 px-3 py-1.5 text-xs font-semibold text-accent-bright transition hover:bg-accent-bright hover:text-header lg:inline-flex"
          >
            Resume
          </a>
          <div className="hidden items-center gap-3 md:flex">
            {site.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-accent-bright hover:bg-white/8 hover:text-accent-bright"
              >
                <SocialIcon name={social.icon} className="h-[17px] w-[17px]" />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="rounded-full border border-white/20 px-3 py-2 text-sm font-medium md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-header md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label="Mobile" className="section-shell flex flex-col gap-4 py-4">
          {site.nav.map((item) =>
            item.href.includes("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm lowercase tracking-wide text-white/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm lowercase tracking-wide text-white/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-accent-bright"
            onClick={() => setOpen(false)}
          >
            Resume ↗
          </a>
          <div className="flex items-center gap-3 pt-2">
            {site.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-accent-bright hover:bg-white/8 hover:text-accent-bright"
              >
                <SocialIcon name={social.icon} className="h-[17px] w-[17px]" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

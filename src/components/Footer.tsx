// FILE: src/components/(root)/Footer.tsx
"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Mail,
  Phone,
  Users,
  LucideIcon,
} from "lucide-react";
import { FC } from "react";

// ✅ Type definition for SocialIcon props
interface SocialIconProps {
  href: string;
  children: LucideIcon;
}

// ✅ SocialIcon Component
const SocialIcon: FC<SocialIconProps> = ({ href, children: Icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/15 text-zinc-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
  >
    <Icon className="h-4 w-4" />
  </Link>
);

// ✅ Main Footer Component
const Footer: FC = () => {
  const secondaryLinks: string[] = ["About Us", "Projects", "Team", "Pricing"];
  const serviceLinks: string[] = [
    "Install & Upgrades",
    "Faulty & Old Wiring",
    "Diagnosis & Repair",
    "Cable Networking",
  ];

  return (
    <footer className="w-full bg-[#0a0a0b] py-16 rounded-t-3xl border-t border-white/5">
      {/* MAIN CONTENT WRAPPER */}
      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid items-center gap-8 border-b border-white/10 pb-10 md:grid-cols-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            We&apos;re here to fix your community service needs quickly and
            reliably.
          </h2>
          <div className="flex justify-start md:justify-end">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-lg font-medium text-white shadow-xl hover:opacity-90 transition-opacity"
            >
              <Users className="h-5 w-5" />
              Join Community
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand + Social */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center text-2xl font-bold text-white tracking-tight"
            >
              COMMSERVE.
            </Link>
            <p className="mt-4 max-w-xs text-sm text-zinc-400">
              Look no further, because COMMSERVE is here to illuminate your
              world with excellence in community services.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialIcon href="#" children={Facebook} />
              <SocialIcon href="#" children={Twitter} />
              <SocialIcon href="#" children={Linkedin} />
              <SocialIcon href="#" children={Instagram} />
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {serviceLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    href={`/services#${l
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/ /g, "-")}`}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium text-white mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {secondaryLinks.map((l, i) => {
                const href = l.toLowerCase().replace(/ /g, "-");
                return (
                  <li key={i}>
                    <Link
                      href={`/${href}`}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-medium text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <a
                  href="tel:+001123456789"
                  className="hover:text-orange-500 transition-colors"
                >
                  (001) 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <a
                  href="mailto:hello@gmail.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  hello@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 text-orange-500" />
                <span>5241 Elgin st. Celina, 10258</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>Copyright © 2024 COMMSERVE</p>
          <div className="flex gap-4">
            <Link href="/help" className="hover:text-orange-500">
              Help & Support
            </Link>
            <Link href="/privacy" className="hover:text-orange-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

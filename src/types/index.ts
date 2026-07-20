// ─── Shared TypeScript types for Scaleezy ────────────────────────────────────

import type { LucideIcon } from 'lucide-react';

// ── Navigation ────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface NavModule {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

// ── Footer ────────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

// ── Re-exports from existing data files ──────────────────────────────────────
// Use these for convenience so consumers can import from a single location.

export type { PlatformModule, ModuleId } from '../components/moduleData';
export type { BlogArticle } from '../components/blogData';

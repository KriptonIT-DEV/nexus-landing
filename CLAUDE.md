# CLAUDE.md — astrobunl

## Stack
- **Framework**: Astro v5 + React v19 (`@astrojs/react`)
- **Language**: TypeScript ~5.9 (strict)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (NOT postcss)
- **Components**: shadcn/ui — style `radix-sera`, base color `olive`, icons `phosphor`
- **Typography**: Syne (display headings) + Karla (body) + Geist Mono (accent labels) — all variable via `@fontsource-variable/*`
- **Theme**: purple OKLCH, swappable via `--brand-h` / `--brand-c` in `src/styles/global.css`. Generous radius (`--radius: 1.25rem`) for the rounded bento aesthetic.
- **Type scale**: Tailwind defaults (`text-sm` 14px, `text-base` 16px, `text-lg` 18px, `text-3xl` 30px, etc.) — same as shadcn. Use `text-sm` for UI controls (buttons, badges), `text-base` for body prose, `text-3xl`/`text-4xl`+ for headings. Don't hardcode pixel sizes.
- **Package manager**: Bun

## Commands
| Task | Command |
|------|---------|
| Dev | `bun run dev` |
| Build | `bun run build` |
| Lint | `bun run lint` |
| Format | `bun run format` |
| Type check | `bun run typecheck` |

## Path Aliases
- `@/*` → `src/*`

## Project Structure
```
src/
  components/ui/   ← shadcn/ui components
  layouts/         ← Astro layouts
  lib/utils.ts     ← cn() utility
  pages/           ← Astro pages (file-based routing)
  styles/global.css
```

---

## Active Skills (essential for this project)

1. **`astro`** — Astro framework patterns
2. **`shadcn`** — auto-triggered (project has `components.json`)
3. **`impeccable`** — design / redesign / audit / polish frontend (requires PRODUCT.md)

---

## Skill: astro

### CLI (use Bun runner)
- `bunx --bun astro dev` — dev server
- `bunx --bun astro build` — production build
- `bunx --bun astro check` — typecheck
- `bunx --bun astro add <integration>` — add adapter or integration (e.g. `vercel`, `cloudflare`, `netlify`, `node`)
- `bunx --bun astro sync` — regenerate TS types after config changes
- **Re-run `astro sync` after adding/changing plugins or content collections.**

### Conventions
- `src/pages/` — file-based routing (REQUIRED location for routes)
- `src/components/` — `.astro` (no JS) or `.tsx` (React islands)
- `src/layouts/` — wrappers for pages
- `src/content/` — content collections (Markdown, MDX, JSON, YAML with Zod schemas)
- `public/` — static assets, copied as-is
- Set `site:` in `astro.config.mjs` for sitemaps + canonical URLs

### Astro components (`.astro`)
```astro
---
// Frontmatter runs at build time (server-only)
import Layout from "@/layouts/main.astro"
const { title } = Astro.props
---
<Layout>
  <h1>{title}</h1>
  <slot />
</Layout>
```

### React islands hydration directives
| Directive | When |
|-----------|------|
| `client:load` | Hydrate immediately on page load |
| `client:idle` | Hydrate when browser is idle (low priority) |
| `client:visible` | Hydrate when scrolled into view (best for below-the-fold) |
| `client:media="(max-width: 768px)"` | Hydrate based on media query |
| `client:only="react"` | Skip SSR, render only on client |
| (none) | Static HTML, no JS shipped |

**Default to no directive.** Add hydration only when interactivity is required.

### Image optimization
- Use `import { Image } from "astro:assets"` for local images — automatic optimization
- Place images in `src/assets/`, NOT `public/` (public skips optimization)

---

## Skill: shadcn

**Package runner**: `bunx --bun shadcn@latest` (always Bun, NOT npx)

### Critical Rules

**Styling**
- `className` for layout only — never override component colors or typography
- No `space-x-*` / `space-y-*` — use `flex` + `gap-*`
- Use `size-*` when width = height (`size-10` not `w-10 h-10`)
- No manual `dark:` overrides — use semantic tokens (`bg-background`, `text-muted-foreground`)
- Use `cn()` for conditional classes — never manual ternaries with template literals
- No manual `z-index` on overlays (Dialog, Sheet, Popover handle their own stacking)

**Icons** (`@phosphor-icons/react`)
- Icons in Button use `data-icon` — `data-icon="inline-start"` or `data-icon="inline-end"`
- No sizing classes on icons inside components (no `size-4` or `w-4 h-4`)

**Composition**
- Items always inside their Group (`SelectItem` → `SelectGroup`, etc.)
- Dialog/Sheet/Drawer always need a Title (use `className="sr-only"` if visually hidden)
- Full Card composition: `CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter`
- `Avatar` always needs `AvatarFallback`
- `TabsTrigger` must be inside `TabsList`
- Use `Alert` for callouts, `Skeleton` for loading, `Badge` for tags, `Separator` instead of `<hr>`

**Astro-specific**
- `isRSC` is false — no `"use client"` needed
- Add `client:*` only on shadcn components that need interactivity
- Static shadcn components (Card, Badge, Separator, Avatar without dropdown) work without directive

### Workflow
1. Check installed: `bunx --bun shadcn@latest info --json`
2. Search registry: `bunx --bun shadcn@latest search -q "<term>"`
3. Get docs: `bunx --bun shadcn@latest docs <component>`
4. Add: `bunx --bun shadcn@latest add <component>`
5. Update: `--dry-run` + `--diff` BEFORE `--overwrite`

### Patterns
```tsx
// ✅ Spacing
<div className="flex flex-col gap-4">
// ❌ <div className="space-y-4">

// ✅ Equal dimensions
<div className="size-10">
// ❌ <div className="w-10 h-10">

// ✅ Icon in button
<Button>
  <MagnifyingGlass data-icon="inline-start" />
  Search
</Button>

// ✅ Conditional classes
<div className={cn("base", condition && "extra", className)} />

// ✅ Semantic colors
<Badge variant="secondary">Active</Badge>
// ❌ <span className="text-emerald-600">Active</span>
```

---

## Skill: impeccable

**Setup gate**: requires `PRODUCT.md` (required) and `DESIGN.md` (recommended) at project root. Run `$impeccable teach` to scaffold them if missing.

### Shared design laws (apply always)

**Color**
- Use OKLCH. Reduce chroma as L approaches 0 or 100
- NEVER `#000` or `#fff`. Tint every neutral toward the brand hue (chroma 0.005–0.01)
- Pick a strategy first: **Restrained** (neutrals + 1 accent ≤10%) · **Committed** (1 saturated color, 30–60%) · **Full palette** (3–4 named roles) · **Drenched** (surface IS the color)

**Theme (light vs. dark)**
- Never default. Write a one-sentence physical scene (who, where, ambient light, mood). Run the scene, not the category.

**Typography**
- Body line length 65–75ch
- Hierarchy through scale + weight contrast (≥1.25 ratio between steps)

**Layout**
- Vary spacing for rhythm — same padding everywhere is monotony
- Cards are the lazy answer; nested cards are always wrong
- Don't wrap everything in a container

**Motion**
- Don't animate CSS layout properties
- Ease-out exponential curves (quart/quint/expo). NO bounce, NO elastic

### Absolute bans
- Side-stripe borders (colored `border-left/right` >1px on cards/list items)
- Gradient text (`background-clip: text` + gradient)
- Glassmorphism as default
- Hero-metric template (big number + small label + gradient accent)
- Identical card grids (icon + heading + text repeated)
- Modal as first thought — exhaust inline alternatives first

### Copy
- Every word earns its place. No restated headings.
- **No em dashes.** Use commas, colons, semicolons, periods, or parentheses. Also not `--`.

### AI slop test
If someone could guess theme + palette from the category name alone (observability → dark blue, finance → navy + gold), it's training-data reflex. Rework until the answer isn't obvious.

### Register (every task is one)
- **brand** — design IS the product (landing, marketing, campaign, portfolio)
- **product** — design SERVES the product (app UI, dashboard, admin)

For astrobunl (landing page) → register defaults to **brand**.

### Sub-commands (when invoked as `$impeccable <command>`)
`craft` `shape` `teach` `document` `extract` `critique` `audit` `polish` `bolder` `quieter` `distill` `harden` `onboard` `animate` `colorize` `typeset` `layout` `delight` `overdrive` `clarify` `adapt` `optimize` `live`

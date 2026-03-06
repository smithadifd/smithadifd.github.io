export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  github: string;
  tech: string[];
  features: string[];
  motivation: string;
  architecture: string;
  decisions: { title: string; detail: string }[];
  color: string;
}

export const projects: Project[] = [
  {
    slug: "hoard",
    title: "Hoard",
    tagline: "Never overpay for a game again.",
    description:
      "Self-hosted web app that tracks game deals across 30+ stores, manages your Steam library and backlog, and helps you decide what to play next with value scoring and mood-based recommendations.",
    github: "https://github.com/smithadifd/hoard",
    tech: [
      "Next.js 16",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "Tailwind CSS",
      "shadcn/ui",
      "Better Auth",
      "IsThereAnyDeal API",
      "HowLongToBeat",
      "Discord Webhooks",
    ],
    features: [
      "Steam library and wishlist sync with automatic metadata enrichment",
      "Price tracking across 30+ stores with historical low comparison",
      "Configurable value scoring engine (price, reviews, $/hour, personal interest)",
      "Backlog recommender with mood picker, duration filters, and co-op presets",
      "Discord price alerts with configurable thresholds",
      "Installable PWA with mobile-optimized responsive design",
    ],
    motivation:
      "I have a massive Steam backlog and kept missing deals on wishlisted games. Existing tools like IsThereAnyDeal are great for price alerts but don't help you decide what to actually play. Hoard combines deal tracking with backlog management in one place.",
    architecture:
      "All external API data syncs through a cache layer into SQLite. The UI reads exclusively from the database, never making live API calls. This keeps the UI snappy and resilient to API outages. Cron jobs handle periodic syncs for prices, library data, and enrichment.",
    decisions: [
      {
        title: "SQLite over PostgreSQL",
        detail:
          "Single-file database, no container needed, perfect for a NAS deployment. Drizzle ORM makes it easy to swap later if needed.",
      },
      {
        title: "Cache-first architecture",
        detail:
          "External APIs are unreliable and slow. By syncing everything to a local DB first, the UI never blocks on network calls.",
      },
      {
        title: "In-process cron over separate worker",
        detail:
          "node-cron runs inside the Next.js process. Simpler deployment for a single-user app that doesn't need horizontal scaling.",
      },
    ],
    color: "#3b82f6",
  },
  {
    slug: "investing-companion",
    title: "Investing Companion",
    tagline: "Self-hosted equity analysis with AI-powered insights.",
    description:
      "Dual-stack dashboard combining stock data from multiple sources with Claude AI analysis, TradingView charts, and Discord alerts. Designed for personal investment research without subscription fees.",
    github: "https://github.com/smithadifd/investing_companion",
    tech: [
      "Next.js 16",
      "FastAPI",
      "Python 3.11",
      "TypeScript",
      "PostgreSQL + TimescaleDB",
      "Redis",
      "Celery",
      "TradingView Charts",
      "Claude API",
      "Docker Compose",
    ],
    features: [
      "Equity dashboard with real-time quotes and interactive TradingView charts",
      "Fundamental analysis with 20+ financial ratios and peer comparison",
      "Claude-powered AI analysis considering price history and portfolio context",
      "Watchlists with custom columns and cross-equity comparison",
      "Configurable price alerts (crosses, percent change, volume spikes) via Discord",
      "Trade tracker with P&L calculations and position history",
      "Market overview with index tracking and sector heatmaps",
      "Earnings calendar and macro economic event tracking",
    ],
    motivation:
      "Premium stock analysis tools cost $30-50/month and still don't let you customize the analysis workflow. I wanted a personal dashboard where I could combine data from multiple sources, run my own AI analysis, and get alerts on my terms.",
    architecture:
      "The backend is a FastAPI service handling data collection, Celery tasks, and AI analysis. The frontend is a Next.js app with TanStack Query for data fetching. TimescaleDB handles time-series price data efficiently, and Redis serves as the Celery broker and cache layer.",
    decisions: [
      {
        title: "Dual-stack (Python + TypeScript)",
        detail:
          "Python's ecosystem for financial data (pandas, yfinance) is unmatched. Next.js provides the best React DX. The two communicate via REST API.",
      },
      {
        title: "TimescaleDB over plain PostgreSQL",
        detail:
          "Hypertables with automatic chunking and compression make time-series queries fast without manual partitioning.",
      },
      {
        title: "Claude API for analysis",
        detail:
          "Instead of building custom scoring models, Claude can synthesize fundamentals, price trends, and news into coherent analysis. The prompts are tuned for concise, actionable output.",
      },
    ],
    color: "#10b981",
  },
  {
    slug: "starting-six",
    title: "Starting Six",
    tagline: "Plan your Pokemon playthrough team before you start the game.",
    description:
      "Team planner for Pokemon games with type coverage analysis, move/ability selection, and a searchable Pokedex powered by PokeAPI data synced to a local database.",
    github: "https://github.com/smithadifd/starting-six",
    tech: [
      "Next.js 16",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "Tailwind CSS",
      "shadcn/ui",
      "Better Auth",
      "PokeAPI",
      "Vitest",
    ],
    features: [
      "Full Pokedex browser with search, type/generation/stat filters",
      "Playthrough management with 6-slot team builder",
      "Type analysis engine (18x18 effectiveness matrix, coverage gaps, role distribution)",
      "Move and ability selection from complete learnsets",
      "Tera type customization per team member",
      "138 tests covering the analysis engine and API routes",
    ],
    motivation:
      "Every Pokemon playthrough starts with the same question: what six Pokemon should I use? Existing team builders are either online-only or focused on competitive play. This app is for casual players who want to plan a balanced team before they start.",
    architecture:
      "PokeAPI data is bulk-synced to SQLite on first run (6-stage pipeline: Pokemon, species, types, moves, abilities, learnsets). After sync, the app is fully offline-capable. The analysis engine is pure functions with no side effects, making it easy to test.",
    decisions: [
      {
        title: "Bulk sync over live API calls",
        detail:
          "PokeAPI is slow for individual requests. Syncing everything upfront means instant search and filtering. The 6-stage pipeline handles 1000+ Pokemon with progress tracking.",
      },
      {
        title: "Pure function analysis engine",
        detail:
          "Type effectiveness, coverage analysis, and role distribution are all pure functions. This made it trivial to write 62 tests for the analysis module.",
      },
      {
        title: "Same stack as Hoard",
        detail:
          "Reusing the same Next.js + SQLite + Drizzle + Better Auth stack meant I could scaffold the entire project in hours rather than days.",
      },
    ],
    color: "#ef4444",
  },
  {
    slug: "ode-to-myrient",
    title: "ode-to-myrient",
    tagline: "Playwright-based ROM downloader with parallel workers and adaptive throttling.",
    description:
      "Automated tool for bulk-downloading retro game ROMs from Myrient using headless Chromium, designed for autonomous operation with Claude Code managing the download sessions.",
    github: "https://github.com/smithadifd/ode-to-myrient",
    tech: [
      "Node.js",
      "Playwright",
      "Chrome DevTools Protocol",
      "Discord Webhooks",
    ],
    features: [
      "Playwright-driven downloads bypassing Cloudflare JA3 fingerprinting",
      "Parallel worker architecture (2-4 concurrent downloads)",
      "Adaptive throttling on HTTP 429/503 and slow speeds",
      "Fully resumable with download logging (skip completed files)",
      "ZIP verification with magic bytes and file size checks",
      "Discord monitoring with progress updates and stall detection",
    ],
    motivation:
      "Preserving retro game libraries requires downloading thousands of files from web archives. Manual downloading is impractical, and simple wget/curl scripts get blocked. This tool handles the complexity of rate limiting, resumption, and verification.",
    architecture:
      "Each worker runs an isolated Chromium page via Playwright, intercepting download events through Chrome DevTools Protocol. A central coordinator manages the work queue, tracks progress, and adjusts concurrency based on server response. Download state is persisted to JSON for full resumability.",
    decisions: [
      {
        title: "Playwright over wget/curl",
        detail:
          "Cloudflare's JA3 fingerprinting blocks common HTTP clients. A real browser with Playwright passes all checks without custom TLS configuration.",
      },
      {
        title: "CDP for download interception",
        detail:
          "Playwright's built-in download API doesn't support progress tracking or parallel downloads well. Chrome DevTools Protocol gives fine-grained control over download events.",
      },
      {
        title: "Built for Claude Code management",
        detail:
          "The tool is designed to be operated by Claude Code in autonomous mode, with Discord webhooks providing monitoring without requiring a human to watch the terminal.",
      },
    ],
    color: "#a855f7",
  },
];

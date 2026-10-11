# Skill Registry — my-restaurant

Generated: 2026-10-11
Artifact store: engram
Project root: C:/Users/rodri/OneDrive/Escritorio/my-restaurant

---

## Project Skills

No project-level skills found.

No project convention files found (AGENTS.md, CLAUDE.md, .cursorrules, GEMINI.md, copilot-instructions.md).

---

## User Skills

Skills are sourced from `~/.claude/skills/`. SDD phase skills (`sdd-*`) and `_shared` are excluded from this index.

| Name | Trigger summary | Scope | SKILL.md path |
|------|----------------|-------|---------------|
| nextjs-15 | Next.js routing, Server Actions, App Router, data fetching | user | `~/.claude/skills/nextjs-15/SKILL.md` |
| react-19 | React components, hooks, no useMemo/useCallback | user | `~/.claude/skills/react-19/SKILL.md` |
| tailwind-4 | Tailwind styling, cn(), theme variables | user | `~/.claude/skills/tailwind-4/SKILL.md` |
| typescript | TypeScript types, interfaces, generics, strict patterns | user | `~/.claude/skills/typescript/SKILL.md` |
| playwright | E2E tests, Page Objects, selectors, MCP workflow | user | `~/.claude/skills/playwright/SKILL.md` |
| zod-4 | Zod schema validation, breaking changes from v3 | user | `~/.claude/skills/zod-4/SKILL.md` |
| zustand-5 | React state management with Zustand | user | `~/.claude/skills/zustand-5/SKILL.md` |
| ai-sdk-5 | Vercel AI SDK 5, AI chat features, breaking changes from v4 | user | `~/.claude/skills/ai-sdk-5/SKILL.md` |
| github-pr | PRs, PR descriptions, conventional commits, gh CLI | user | `~/.claude/skills/github-pr/SKILL.md` |
| branch-pr | Creating PRs, Gentle AI pull requests, issue-first checks | user | `~/.claude/skills/branch-pr/SKILL.md` |
| chained-pr | PRs over 400 lines, stacked PRs, review slices | user | `~/.claude/skills/chained-pr/SKILL.md` |
| work-unit-commits | Commit planning, commit splitting, reviewable work units | user | `~/.claude/skills/work-unit-commits/SKILL.md` |
| comment-writer | PR feedback, issue replies, reviews, GitHub comments | user | `~/.claude/skills/comment-writer/SKILL.md` |
| issue-creation | Issue creation, bug reports, feature requests, triage | user | `~/.claude/skills/issue-creation/SKILL.md` |
| cognitive-doc-design | Guides, READMEs, RFCs, onboarding, architecture docs | user | `~/.claude/skills/cognitive-doc-design/SKILL.md` |
| go-testing | Go tests, go test coverage, Bubbletea teatest, golden files | user | `~/.claude/skills/go-testing/SKILL.md` |
| judgment-day | Judgment day, dual review, adversarial review | user | `~/.claude/skills/judgment-day/SKILL.md` |
| skill-creator | New skills, agent instructions, AI usage patterns | user | `~/.claude/skills/skill-creator/SKILL.md` |
| skill-improver | Improve skills, audit skills, refactor skills | user | `~/.claude/skills/skill-improver/SKILL.md` |
| rdd-defect-workflow | RDD, receipt-driven development, review authority, correction/recovery | user | `~/.claude/skills/rdd-defect-workflow/SKILL.md` |
| systemic-issue-triage | New issue, bug report, triage, backlog, issue flood | user | `~/.claude/skills/systemic-issue-triage/SKILL.md` |
| gentle-ai-bench | Bench, journey, journeys, driven mode, bench axis | user | `~/.claude/skills/gentle-ai-bench/SKILL.md` |

---

## Stack-Relevant Skills for This Project

The following skills are directly relevant to my-restaurant's detected stack (Next.js 14, React 18, TypeScript 5, Tailwind CSS 3):

| Skill | Why relevant |
|-------|-------------|
| nextjs-15 | Project uses Next.js App Router — patterns apply (note: project is on Next.js 14, not 15; use as a reference) |
| react-19 | Project uses React 18 components — patterns apply (note: project is on React 18, not 19) |
| tailwind-4 | Project uses Tailwind CSS — patterns apply (note: project is on Tailwind v3, not v4) |
| typescript | Project uses TypeScript strict mode |
| playwright | No E2E tests detected; this skill applies if E2E testing is added |

---

## Notes

- **Version gap**: The installed skills (nextjs-15, react-19, tailwind-4) target newer versions than the project uses (Next.js 14, React 18, Tailwind v3). Patterns may not be fully applicable; verify API compatibility before applying.
- **No test runner**: No testing framework detected in package.json. Strict TDD is disabled.

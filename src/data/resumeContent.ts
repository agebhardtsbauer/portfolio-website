import type { ResumeVersion, VersionContent } from '../types'
import { sharedExperience } from './sharedExperience'

const centeneBase = {
  role: 'Lead Applications Software Engineer in Test',
  company: 'Centene',
  dateRange: 'February 2020 – Present',
}

export const resumeContent: Record<ResumeVersion, VersionContent> = {
  testing: {
    navLabel: 'Testing',
    heroAccent: 'Test Automation Specialist',
    heroBio:
      "I architect and build scalable, robust test automation frameworks and the developer-facing platforms that support them. I'm currently pioneering agentic QA workflows with Playwright MCP: agents that organize test repositories, evaluate Jira tickets for readiness, generate automation, and self-heal when things break. I approach every problem from the developer, tester, and end-user perspective, and I care deeply about the products I build and the people I work with.",
    resumeFile: '/resume-testing.pdf',
    resumeDownloadName: 'Alan_Gebhardtsbauer_resume_testing.pdf',
    skills: [
      { label: 'Testing', items: ['Playwright', 'Cypress', 'Jest / Mocha', 'sorry-cypress', 'Deque / AXE'] },
      { label: 'AI & Agentic', items: ['Claude Code', 'Playwright MCP', 'MCP-SDK', 'Anthropic SDK'] },
      { label: 'Full Stack', items: ['TypeScript / Node', 'React', 'Vite', 'Fastify'] },
      { label: 'Data', items: ['SQL', 'MongoDB', 'Snowflake', 'DynamoDB'] },
      { label: 'CI/CD', items: ['GitLab CI', 'Git', 'Bash', 'Docker'] },
      { label: 'Systems', items: ['macOS', 'Linux (Arch, Nix, Alpine, Debian)'] },
    ],
    experience: [
      {
        ...centeneBase,
        bullets: [
          'Architected an agentic pipeline (Playwright MCP) that converts requirements docs and legacy test cases into a deduplicated, consistently-structured test suite, generates Playwright automation, and self-heals broken tests with human review on unresolved failures',
          'Designed XP_CYTEST, a Cypress + MSW component-testing module built into the platform’s project scaffolding — adopted by 15+ teams and growing, shifting bug discovery left of e2e/deploy',
          'Built a CLI-driven Playwright framework that scaffolds multi-domain test suites with per-domain env generation and cached auth sessions, scaling to 28+ brand domains in parallel (later open-sourced as testwright)',
          'Led the migration of Cypress e2e tests from a standalone repo into application repos ("in-repo QA"), resolving chronic version-skew between test code and app code',
          'Automated a multi-system test workflow (web portal → MongoDB → Linux batch job → generated PDF) that had been dismissed as "impossible to automate," including automated visual verification via Playwright + Jest snapshot diffing — enabling dozens of concurrent test runs versus one manual run at a time',
          'Built a reversible "test scenario" system for a legacy, app-layer-free SQL stored-procedure engine, eliminating corrupted shared test data and improving failure traceability',
          'Led and mentored teams of test automators (4-5 at a time, dozens over 6 years); hosted recurring brown-bags on Git workflows and test tooling',
        ],
        tags: ['TypeScript', 'Playwright', 'Cypress', 'GitLab CI', 'React', 'SQL', 'Agentic / MCP', 'AWS'],
      },
      ...sharedExperience,
    ],
  },

  sre: {
    navLabel: 'SRE',
    heroAccent: 'DevOps',
    heroBio:
      "I build and harden the CI/CD pipelines, data pipelines, and shared infrastructure other engineers rely on every day. Over the last several years I've resolved concurrency bottlenecks in production systems, eliminated flaky runner timeouts, and wired observability into multi-service async pipelines on AWS — with a bias toward fixing the system rather than babysitting it.",
    resumeFile: '/resume-sre.pdf',
    resumeDownloadName: 'Alan_Gebhardtsbauer_resume_sre.pdf',
    skills: [
      { label: 'AWS', items: ['EventBridge', 'CloudWatch', 'Lambda', 'S3', 'Kinesis Firehose', 'AWS-SDK'] },
      { label: 'CI/CD', items: ['GitLab CI', 'Docker', 'sorry-cypress', 'Build-test-deploy pipelines'] },
      { label: 'Data', items: ['SQL', 'Snowflake', 'DynamoDB', 'MongoDB'] },
      { label: 'Systems', items: ['Bash', 'Linux (Arch, Nix, Alpine, Debian)', 'Concurrency / locking'] },
      { label: 'Observability', items: ['CloudWatch', 'Custom reporting / alerting pipelines'] },
      { label: 'Languages', items: ['TypeScript / Node', 'SQL', 'Bash'] },
    ],
    experience: [
      {
        ...centeneBase,
        bullets: [
          'Built a self-healing agentic test-maintenance pipeline (Playwright MCP) that reduces manual upkeep as UI changes, routing unresolvable failures to human review instead of blocking silently',
          'Built XP_CYTEST’s CI layer: templated, configurable GitLab jobs (run mode, browsers, parallelization, a11y scanning) plus automated Microsoft Teams reporting, self-service across 15+ teams and growing',
          'Overhauled org-wide Cypress CI/CD pipelines: configurable Cypress versioning, pre-built Docker images (cutting ~5 min/job), and sorry-cypress parallelization to eliminate recurring 1-hour runner timeouts',
          'Automated triggering and polling of an asynchronous, multi-system batch pipeline (web portal → MongoDB → Linux batch job → PDF generation), with state verification at every stage, replacing a fully manual, serialized process',
          'Resolved a concurrency bottleneck in a legacy, single-threaded SQL stored-procedure engine by scoping batch processing to specific records, enabling parallel testing in place of exclusive locks',
          'Built a CLI orchestrator automating end-to-end verification of an asynchronous, multi-service data pipeline (S3 → Genesys/DynamoDB → CloudWatch → Kinesis Firehose → Snowflake), confirming delivery integrity and observability across every hop',
        ],
        tags: ['AWS', 'CloudWatch', 'GitLab CI', 'Docker', 'SQL', 'Kinesis Firehose', 'sorry-cypress', 'Concurrency'],
      },
      ...sharedExperience,
    ],
  },

  fullstack: {
    navLabel: 'Fullstack',
    heroAccent: 'Full Stack Engineer',
    heroBio:
      "I build full stack products end-to-end — React/TypeScript frontends, Node/Fastify backends, and native desktop apps in Tauri and Rust. I care about developer experience as much as user experience, and I like building the internal tools that make a team faster, not just the features that ship to users.",
    resumeFile: '/resume-fullstack.pdf',
    resumeDownloadName: 'Alan_Gebhardtsbauer_resume_fullstack.pdf',
    skills: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'Vite'] },
      { label: 'Backend', items: ['Node', 'Fastify'] },
      { label: 'Native / Systems', items: ['Rust (Tauri)', 'Swift', 'Zig'] },
      { label: 'Data', items: ['SQL', 'MongoDB', 'DynamoDB'] },
      { label: 'Tooling', items: ['Git', 'Docker', 'CLI / scaffold design'] },
      { label: 'AI', items: ['Claude Code', 'Anthropic SDK'] },
    ],
    experience: [
      {
        ...centeneBase,
        bullets: [
          'Built an agentic pipeline (Playwright MCP) that generates automated test code directly from requirements docs and legacy test cases, including a self-healing layer for broken tests',
          'Designed and shipped XP_CYTEST, a reusable component-testing module baked into a self-service `pnpm dlx` project scaffold adopted by 15+ teams and growing, pairing React components with MSW-mocked data for isolated testing',
          'Built a Tauri/React/Rust desktop application that orchestrates and visualizes dozens of concurrent multi-system test runs in real time, each with a live per-stage progress indicator',
          'Automated Jira ticket-status transitions from GitLab CI events (branch created, MR opened, deploy stages), keeping ticket state accurate without manual updates',
          'Led and mentored a rotating group of 4-5 engineers at a time, dozens over 6 years, running recurring technical brown-bags',
        ],
        tags: ['TypeScript', 'React', 'Tauri', 'Rust', 'Node', 'MSW', 'Fastify', 'CLI Tooling'],
      },
      ...sharedExperience,
    ],
  },

  platform: {
    navLabel: 'Platform',
    heroAccent: 'Automation Platform Engineer',
    heroBio:
      "I build the self-service tooling, project scaffolding, and CI/CD platforms that other engineers build on top of. My focus is reducing manual toil and standardizing golden paths — so a new project starts with the right defaults instead of a blank page.",
    resumeFile: '/resume-platform.pdf',
    resumeDownloadName: 'Alan_Gebhardtsbauer_resume_platform.pdf',
    skills: [
      { label: 'Platform', items: ['CLI / project scaffolding', 'pnpm dlx templates', 'Self-service tooling'] },
      { label: 'CI/CD', items: ['GitLab CI templating', 'Docker', 'sorry-cypress', 'Build-test-deploy pipelines'] },
      { label: 'AI', items: ['Claude Code', 'Playwright MCP', 'MCP-SDK', 'Anthropic SDK'] },
      { label: 'Languages', items: ['TypeScript / Node', 'SQL', 'Bash', 'Rust', 'Swift'] },
      { label: 'Data', items: ['SQL', 'MongoDB', 'Snowflake', 'DynamoDB'] },
      { label: 'Systems', items: ['Linux (Arch, Nix, Alpine, Debian)', 'Git', 'Concurrency / locking'] },
    ],
    experience: [
      {
        ...centeneBase,
        bullets: [
          'Designed and shipped XP_CYTEST, a component-testing module baked directly into the org’s `pnpm dlx` project scaffolding as a golden-path default (not opt-in) — adopted by 15+ teams and growing, with a templated GitLab CI layer and self-service config flags',
          'Built a CLI scaffolding tool that generates a fully configured, multi-domain Playwright test suite in minutes instead of hours — scaled to 28+ brand domains, later generalized and published as testwright',
          'Rebuilt the org’s shared Cypress CI/CD platform: configurable versioning, pre-built Docker images, sorry-cypress parallelization, and templated GitLab jobs exposing self-service flags — plus migrating tests in-repo to eliminate version skew for every consuming team',
          'Built an agentic pipeline (Playwright MCP) as a shared internal platform capability — turning requirements docs and legacy test cases into generated, self-healing test automation available to every team rather than a one-off script',
          'Led and mentored a rotating group of 4-5 engineers at a time (dozens over 6 years); ran recurring brown-bags on Git workflows and internal tooling',
        ],
        tags: ['TypeScript', 'GitLab CI', 'CLI Scaffolding', 'pnpm dlx', 'Docker', 'Playwright MCP', 'Self-Service Tooling'],
      },
      ...sharedExperience,
    ],
  },
}

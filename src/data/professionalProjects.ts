import type { ResumeVersion } from '../types'

export interface ProfessionalProject {
  id: string
  name: string
  tags: string[]
  variants: Partial<Record<ResumeVersion, string>>
}

export const professionalProjects: ProfessionalProject[] = [
  {
    id: 'agentic-pipeline',
    name: 'Agentic Test Pipeline',
    tags: ['Playwright MCP', 'TypeScript'],
    variants: {
      testing:
        'An agentic pipeline that converts requirements docs and legacy test cases into a deduplicated, consistently-structured test suite, auto-generates Playwright automation, and self-heals broken tests — with unresolved failures flagged for human review rather than silently blocking. Lesson learned: pipeline quality is bottlenecked by how well the underlying app code is structured — a well-organized accessibility tree meaningfully improves the agent’s ability to understand and act on the UI.',
      sre: 'A self-healing agentic test-maintenance pipeline (Playwright MCP) that reduces manual upkeep as UI changes, automatically routing unresolvable failures to human review instead of blocking silently.',
      fullstack:
        'An agentic pipeline (Playwright MCP) that generates automated test code directly from requirements docs and legacy test cases, including a self-healing layer for broken tests.',
      platform:
        'An agentic pipeline (Playwright MCP) built as a shared internal platform capability — turning requirements docs and legacy test cases into generated, self-healing test automation available to every team rather than a one-off script.',
    },
  },
  {
    id: 'xp-cytest',
    name: 'XP_CYTEST',
    tags: ['Cypress', 'MSW', 'GitLab CI'],
    variants: {
      testing:
        'A Cypress + MSW component-testing module built into the platform’s project scaffolding, letting less-technical QAs test complex UI components (data tables, toggles, search) in isolation, pre-deploy — adopted by 15+ teams and growing, shifting bug discovery left of e2e/deploy. Shipped with templated, configurable GitLab CI jobs (run mode, browsers, parallelization, accessibility scanning) and automated Microsoft Teams reporting.',
      fullstack:
        'A reusable component-testing module baked into a self-service `pnpm dlx` project scaffold, adopted by 15+ teams and growing. Pairs React components with MSW-mocked data, authored by developers and inherited by QA, so components can be tested "bodilessly" before anything reaches a deployed environment.',
      sre: 'Owned XP_CYTEST’s CI layer: templated, configurable GitLab jobs (run mode, browsers, parallelization, accessibility scanning) plus automated Microsoft Teams reporting, self-service across 15+ teams and growing.',
      platform:
        'A component-testing module baked directly into the org’s `pnpm dlx` project scaffolding as a golden-path default, not opt-in — adopted by 15+ teams and growing, with a templated GitLab CI layer and self-service config flags for run mode, browsers, parallelization, and accessibility scanning.',
    },
  },
  {
    id: 'multi-domain-playwright',
    name: 'Multi-Domain Playwright Scaffolding',
    tags: ['Playwright', 'CLI', 'GitLab CI'],
    variants: {
      testing:
        'A CLI-driven Playwright framework that scaffolds multi-domain test suites: asks how many domains and their slugs, generates dev/test/prod env variants, scaffolds a test-user file, and caches authenticated sessions per user on first run. Supports "common" tests that run identically everywhere vs. "targeted," domain-specific tests. Scaled to 28+ brand domains running in parallel — later generalized and open-sourced as testwright.',
      sre: 'A Playwright test-scaffolding CLI with per-domain environment generation and cached authenticated sessions, scaling parallel FE test execution across 28+ brand domains, shipped with a shared GitLab CI runner template.',
      platform:
        'A CLI scaffolding tool that generates a fully configured, multi-domain Playwright test suite — per-domain env generation, cached auth sessions — in minutes instead of hours. Scaled to 28+ brand domains, later generalized and published as testwright.',
    },
  },
  {
    id: 'cicd-overhaul',
    name: 'Cypress CI/CD Platform Overhaul',
    tags: ['GitLab CI', 'Docker', 'sorry-cypress'],
    variants: {
      sre: 'Audited and rebuilt the org’s Cypress CI/CD pipelines: made Cypress version configurable instead of pinned, switched to pre-built Docker images (cutting ~5 min of in-job install per run), implemented sorry-cypress for real parallelization (fixing recurring 1-hour runner-cap failures), added a report gather/merge stage feeding Teams + email, and exposed template variables for teams to override. Also led the move from an independent Cypress repo to in-repo QA, eliminating chronic version skew between tests and app code.',
      testing:
        'Led the migration of Cypress e2e tests from a standalone repo into application repos ("in-repo QA"), resolving chronic version-skew issues between test code and app code across the platform.',
      platform:
        'Rebuilt the org’s shared Cypress CI/CD platform: configurable versioning, pre-built Docker images, sorry-cypress parallelization, and templated GitLab jobs exposing self-service flags — plus migrating tests in-repo to eliminate version skew for every consuming team.',
    },
  },
  {
    id: 'tauri-orchestrator',
    name: 'Tauri Test Run Orchestrator',
    tags: ['Tauri', 'React', 'Rust', 'MongoDB'],
    variants: {
      fullstack:
        'A Tauri/React/Rust desktop app built to test a workflow others had written off as "impossible to automate": a member document request that moves through a web portal, a MongoDB batch queue, a manually-triggered Linux batch job, and a PDF generation/mailing step. The GUI orchestrates and visualizes many of these runs at once, each with a live per-stage progress bar.',
      testing:
        'Automated a multi-system test workflow (web portal → MongoDB batch queue → Linux batch job → generated PDF) that had been dismissed as "impossible to automate." Automated the step everyone assumed required manual visual inspection too — rendering the generated PDF in a browser via Playwright and diffing it against a known-good copy with Jest snapshot testing. Before this tool, one person could realistically run one of these tests at a time; the tool enabled dozens of concurrent runs.',
      sre: 'Automated triggering and polling of an asynchronous, multi-system batch pipeline (web portal → MongoDB → Linux batch job → PDF generation), with state verification at every stage, replacing a fully manual, serialized process that previously supported exactly one concurrent test run.',
    },
  },
  {
    id: 'sql-scenario-system',
    name: 'SQL Test-Scenario System',
    tags: ['SQL', 'Stored Procedures'],
    variants: {
      sre: 'A legacy healthcare-rewards system with no application layer — all logic lived in SQL stored procedures. Shared test data kept getting "used up" by manual UPDATE statements with no error traceability. Designed a reversible "test scenario" system constraining mutation to sanctioned, undoable operations, and modified a single-threaded, long-running processing procedure to run scoped to specific records — turning an exclusive-lock bottleneck into concurrent testing.',
      testing:
        'Built a reversible "test scenario" system for a legacy, app-layer-free SQL stored-procedure engine, replacing ad hoc data mutation with sanctioned, undoable operations — eliminating corrupted shared test data and improving failure traceability.',
    },
  },
  {
    id: 'async-pipeline-verification',
    name: 'Async Data Pipeline Verification',
    tags: ['S3', 'DynamoDB', 'CloudWatch', 'Snowflake'],
    variants: {
      sre: 'A CLI orchestrator (built after a similar pattern to the Tauri tool, this time without a GUI) automating end-to-end verification of a call-center data pipeline: an Excel upload triggers a force-able hourly batch, data lands in S3, then fans out asynchronously to Genesys and DynamoDB, with CloudWatch recording events across every hop and a downstream Kinesis Firehose stream delivering to Snowflake. Verified delivery integrity and observability end-to-end instead of manually tracking a record through five independent systems.',
    },
  },
  {
    id: 'visual-regression',
    name: 'Visual Regression Safety Net',
    tags: ['Cypress', 'Jest', 'Git LFS'],
    variants: {
      testing:
        'Visual regression testing (a Cypress plugin wrapping Jest’s visual-testing library, with Git LFS for baseline screenshot storage) as a safety net for UI regressions too subtle for standard assertions. Added a script that scrubs PII from the HTML before each screenshot as a defense-in-depth measure — the official data obfuscation effort was inconsistent in practice, so this was a deliberate extra layer before generating a large volume of screenshots that would end up stored and shared broadly.',
    },
  },
]

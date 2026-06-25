export interface Project {
  name: string
  description: string
  url: string
  language: string
  stars: number
}

export const projects: Project[] = [
  {
    name: 'Playwright MCP Agentic Testing',
    description: 'Agentic QA workflow built on Playwright MCP — organizes test repos, evaluates Jira tickets for readiness, writes Playwright automation, and self-heals on failure.',
    url: 'https://github.com/agebhardtsbauer/agentic-testing',
    language: 'TypeScript',
    stars: 0,
  },
  {
    name: 'Cypress / React Component Framework',
    description: 'Multi-team component test automation framework that shifted e2e coverage left, cutting CI run times and enabling merge-gating across dozens of web teams.',
    url: 'https://github.com/agebhardtsbauer',
    language: 'TypeScript',
    stars: 0,
  },
  {
    name: 'Playwright Multi-Domain Framework',
    description: 'Playwright test suite architected to run in parallel across dozens of brand domains, with templated GitLab CI pipelines for component and e2e coverage.',
    url: 'https://github.com/agebhardtsbauer',
    language: 'TypeScript',
    stars: 0,
  },
  {
    name: 'Dev / QA / PM UI Tool',
    description: 'Bespoke desktop tool built with Tauri, React, and Rust to streamline workflows for developers, QAs, and PMs on a large internal platform.',
    url: 'https://github.com/agebhardtsbauer',
    language: 'Rust',
    stars: 0,
  },
]

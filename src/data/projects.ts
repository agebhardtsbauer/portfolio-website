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
    url: 'https://github.com/agebhardtsbauer/cypress-demos',
    language: 'TypeScript',
    stars: 0,
  },
  {
    name: 'Playwright Multi-Domain Framework',
    description: 'Playwright test suite architected to run in parallel across dozens of brand domains, with templated GitLab CI pipelines for component and e2e coverage.',
    url: 'https://github.com/agebhardtsbauer/testwright',
    language: 'TypeScript',
    stars: 0,
  },
  {
    name: 'Mousehole',
    description: `Accessibility tool for the Hyprland window server that replaces mouse usage with "Mouse Query Language" (MQL), a query language I'm developing for locating and acting on on-screen elements.`,
    url: 'https://github.com/agebhardtsbauer/mousehole',
    language: 'Zig',
    stars: 0,
  },
  {
    name: 'QA Dashboard',
    description: 'React dashboard for tracking QA metrics and test automation progress across multiple projects.',
    url: 'https://github.com/agebhardtsbauer/qadashboard',
    language: 'TypeScript',
    stars: 0,
  },
  {
    name: 'Solving Bee',
    description: "A New York Times Spelling Bee solver, built for fun because I'm not very good at that game :)",
    url: 'https://github.com/agebhardtsbauer/solvingbee',
    language: 'TypeScript',
    stars: 0,
  },
  {
    name: 'Hypertile',
    description: 'Native, configurable macOS window tiling manager that runs from the terminal.',
    url: 'https://github.com/agebhardtsbauer/hyptertile',
    language: 'Swift',
    stars: 0,
  },
  {
    name: 'Jump',
    description: "Native macOS accessibility tool for keyboard-driven mouse movement, built on macOS' accessibility tree.",
    url: 'https://github.com/agebhardtsbauer/jump',
    language: 'Swift',
    stars: 0,
  },
  {
    name: 'organ-eyes',
    description: 'A CLI context assembler intended for use with agentic development. Intended to dynamically provide agents with the minimum viable context for any given project based on a library of labled content fragments',
    url: 'https://github.com/agebhardtsbauer/organ-eyes',
    language: 'TypeScript',
    stars: 0,
  },
  {
    name: 'my neovim config',
    description: 'my personalized Neovim configuration forked from kickstart.nvim.',
    url: 'https://github.com/agebhardtsbauer/kickstart.nvim',
    language: 'Lua',
    stars: 0,
  },
]

export interface SkillCategory {
  label: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    items: ['TypeScript / Node', 'React', 'Vite', 'Tauri / Rust', 'Fastify'],
  },
  {
    label: 'Testing & QA',
    items: ['Playwright', 'Cypress', 'Jest / Mocha', 'Visual Testing', 'WCAG / AXE'],
  },
  {
    label: 'Backend / Data',
    items: ['SQL', 'MongoDB', 'Snowflake', 'DynamoDB', 'AWS (Lambda, EventBridge, CloudWatch)', 'Kafka'],
  },
  {
    label: 'AI & Agentic',
    items: ['Claude Code', 'Playwright MCP', 'MCP-SDK', 'Anthropic SDK', 'Prompt Engineering', 'Agent Orchestration'],
  },
  {
    label: 'CI/CD & DevOps',
    items: ['GitLab CI', 'GitHub Actions', 'Docker', 'Bash', 'Git'],
  },
  {
    label: 'Observability & Reporting',
    items: ['CloudWatch', 'Jira API', 'GitLab Dashboards', 'CICD Test Reporting', 'Visual Regression Testing', 'AXE / Deque'],
  },
]

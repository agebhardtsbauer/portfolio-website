export interface ExperienceEntry {
  role: string
  company: string
  dateRange: string
  bullets: string[]
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Lead Applications Software Engineer in Test',
    company: 'Centene',
    dateRange: 'February 2020 – Present',
    bullets: [
      'Pioneered agentic automated testing workflow orchestration for web frontend utilizing Playwright MCP — agents that organize test repos, evaluate Jira tickets for readiness, write Playwright automation, and self-heal on failure',
      'Designed a Cypress/React component automation framework adopted by numerous web teams; shifted e2e tests left to cut CI run times significantly',
      'Built a Playwright framework for frontend testing that scales across dozens of brand domains in parallel',
      'Built a bespoke UI tool to support developers, QAs, and PMs using Tauri, React, and Rust',
      'Developed templated GitLab CI pipelines with component testing on push/merge and e2e on deploy; automated Jira ticket transitions via GitLab/GitHub API',
      'Automated testing of complex call center flows across Genesys, DynamoDB, CloudWatch, S3, and Snowflake; implemented visual testing and WCAG/AXE accessibility scanning',
      'Led and mentored teams of test automators across projects touching every layer of the web stack; hosted brown-bags to drive shift-left adoption',
    ],
    tags: ['Playwright', 'TypeScript', 'React', 'AWS', 'Agentic / MCP', 'GitLab CI'],
  },
  {
    role: 'Software Development Engineer in Test',
    company: 'FINRA',
    dateRange: 'April 2018 – January 2020',
    bullets: [
      'Automated end-to-end testing using Java, Selenium, JDBC, and JUnit',
      'Automated SQL regression testing validating data integrity through CRUD operations',
      'Wrote and executed end-to-end test cases and documented application issues in Jira',
    ],
    tags: ['Java', 'Selenium', 'SQL', 'JUnit'],
  },
  {
    role: 'Quality Assurance Engineer',
    company: 'Harmonia Holdings LLC',
    dateRange: 'March 2016 – March 2018',
    bullets: [
      'Acquired Public Trust Clearance with the Department of Agriculture',
      'Automated testing using Java, Selenium, SQL, JMeter, and QTest',
    ],
    tags: ['Java', 'Selenium', 'SQL', 'JMeter'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Mountain State Information Systems',
    dateRange: 'June 2015 – March 2016',
    bullets: [
      'Web app development and maintenance using HTML, CSS, JavaScript, PHP, and FTP',
      'Automated cost comparisons and visualized data with Visual Basic Macros',
    ],
    tags: ['JavaScript', 'PHP', 'HTML/CSS'],
  },
]

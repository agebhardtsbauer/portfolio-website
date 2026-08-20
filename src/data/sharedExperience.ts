import type { ExperienceEntry } from '../types'

// Early-career roles read the same regardless of which resume version is active.
export const sharedExperience: ExperienceEntry[] = [
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

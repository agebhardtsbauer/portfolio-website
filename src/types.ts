export type ResumeVersion = 'testing' | 'sre' | 'fullstack' | 'platform'

export const RESUME_VERSIONS: ResumeVersion[] = ['testing', 'platform', 'sre', 'fullstack']

// Subset shown in the nav switcher — Fullstack stays reachable at /fullstack but is unlisted for now.
export const NAV_VERSIONS: ResumeVersion[] = ['testing', 'platform', 'sre']

export const DEFAULT_VERSION: ResumeVersion = 'testing'

export interface SkillCategory {
  label: string
  items: string[]
}

export interface ExperienceEntry {
  role: string
  company: string
  dateRange: string
  bullets: string[]
  tags: string[]
}

export interface VersionContent {
  navLabel: string
  heroAccent: string
  heroBio: string
  resumeFile: string
  resumeDownloadName: string
  skills: SkillCategory[]
  experience: ExperienceEntry[]
}

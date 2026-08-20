import { createContext, useContext } from 'react'
import type { ResumeVersion } from '../types'
import { resumeContent } from '../data/resumeContent'
import { DEFAULT_VERSION } from '../types'

const VersionContext = createContext<ResumeVersion>(DEFAULT_VERSION)

export const VersionProvider = VersionContext.Provider

export function useVersion() {
  return useContext(VersionContext)
}

export function useVersionContent() {
  return resumeContent[useVersion()]
}

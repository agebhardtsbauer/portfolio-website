import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { ProfessionalProjects } from './components/ProfessionalProjects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { VersionProvider } from './context/VersionContext'
import { DEFAULT_VERSION, RESUME_VERSIONS, type ResumeVersion } from './types'

function isResumeVersion(value: string | undefined): value is ResumeVersion {
  return !!value && (RESUME_VERSIONS as string[]).includes(value)
}

function VersionedSite() {
  const { version } = useParams()

  if (!isResumeVersion(version)) {
    return <Navigate to={`/${DEFAULT_VERSION}`} replace />
  }

  return (
    <VersionProvider value={version}>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <ProfessionalProjects />
        <Contact />
      </main>
      <Footer />
    </VersionProvider>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${DEFAULT_VERSION}`} replace />} />
      <Route path="/:version" element={<VersionedSite />} />
      <Route path="*" element={<Navigate to={`/${DEFAULT_VERSION}`} replace />} />
    </Routes>
  )
}

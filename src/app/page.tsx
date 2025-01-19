import LearningNavigation from './components/LearningNavigation'
import AdventureInterface from './components/AdventureInterface'
import VirtualLabExperiment from './components/VirtualLabExperiment'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto space-y-8">
        <LearningNavigation />
        <AdventureInterface />
        <VirtualLabExperiment />
      </div>
    </div>
  )
}
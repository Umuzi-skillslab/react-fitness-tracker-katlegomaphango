import './App.css'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home'
import ExercisesPage from './pages/ExercisesPage'
import WorkoutPlannerPage from './pages/WorkoutPlannerPage'
import ProgressPage from './pages/ProgressPage'
import HistoryPage from './pages/HistoryPage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="app-container">
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/workout-planner" element={<WorkoutPlannerPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/history" element={<HistoryPage />} />
          {/* 
          <Route path="/exercises/:id" element={<ExerciseDetail />} />
          
          
          
          <Route path="*" element={<NotFound />} /> */}

        </Routes>

      </div>
    </>
  )
}

export default App

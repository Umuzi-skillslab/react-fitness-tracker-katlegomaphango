import './App.css'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Navbar />

        <h1>Hello world</h1>

        <Routes>

          <Route path="/" element={<Home />} />
          {/* <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/exercises/:id" element={<ExerciseDetail />} />
          <Route path="/workout-planner" element={<WorkoutPlannerPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="*" element={<NotFound />} /> */}

        </Routes>

      </div>
    </>
  )
}

export default App

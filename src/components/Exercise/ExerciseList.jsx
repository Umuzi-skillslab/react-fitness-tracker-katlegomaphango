import ExerciseCard from './ExerciseCard'
import { Grid } from '@mui/material'

function ExerciseList ({ exercises, workoutPlan = [], onAddToWorkout, onSelectExercise }) {

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center' }} columns={3}>

      {
        exercises.map(exercise => (
          <Grid key={exercise.id}>
            <ExerciseCard 
              key={exercise.id}
              exercise={exercise}
              isInPlan={workoutPlan.some(e => e.id === exercise.id)}
              onAdd={onAddToWorkout}
              onSelect={onSelectExercise}
            />
          </Grid>
        ))
      }

      {/* <div className="exercise-list_container">
        {exercises.map(exercise => (
          <ExerciseCard 
            key={exercise.id}
            exercise={exercise}
            isInPlan={workoutPlan.some(e => e.id === exercise.id)}
            onAdd={onAddToWorkout}
            onSelect={onSelectExercise}
          />
        ))}
      </div> */}
    </Grid>
  );

};

export default ExerciseList
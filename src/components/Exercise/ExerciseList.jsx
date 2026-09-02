import ExerciseCard from './ExerciseCard';
import { Grid } from '@mui/material';

function ExerciseList({ exercises, workoutPlan = [], onAddToWorkout, onSelectExercise }) {
  return (
    <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }} xs={12} sm={6} md={4}>
      {exercises.map((exercise) => (
        <Grid
          item
          key={exercise.id}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <ExerciseCard
            exercise={exercise}
            isInPlan={workoutPlan.some((e) => e.id === exercise.id)}
            onAdd={onAddToWorkout}
            onSelect={onSelectExercise}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ExerciseList;
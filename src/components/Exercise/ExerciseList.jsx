import ExerciseCard from './ExerciseCard'

function ExerciseList ({ exercises, workoutPlan = [], onAddToWorkout, onSelectExercise }) {

  return (
    <div>
      {exercises.map(exercise => (
        <ExerciseCard 
          key={exercise.id}
          exercise={exercise}
          isInPlan={workoutPlan.some(e => e.id === exercise.id)}
          onAdd={onAddToWorkout}
          onSelect={onSelectExercise}
        />
      ))}
    </div>
  );

};

export default ExerciseList
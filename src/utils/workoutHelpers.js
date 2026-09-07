const STORAGE_KEY = 'workoutPlan';

export const defaultWorkoutPlan = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

export function getWorkoutPlan() {
  try {
    const savedPlan = localStorage.getItem(STORAGE_KEY);

    if (!savedPlan) {
      return defaultWorkoutPlan;
    }

    const parsedPlan = JSON.parse(savedPlan);

    return {
      ...defaultWorkoutPlan,
      ...parsedPlan,
    };
  } catch (error) {
    console.error(
      'Failed to load workout plan:',
      error
    );

    return defaultWorkoutPlan;
  }
}

export function saveWorkoutPlan(workoutPlan) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(workoutPlan)
    );
  } catch (error) {
    console.error(
      'Failed to save workout plan:',
      error
    );
  }
}

export function addExerciseToWorkoutPlan(
  day,
  exercise
) {
  const workoutPlan = getWorkoutPlan();

  // Make sure the selected day exists
  if (!workoutPlan[day]) {
    return workoutPlan;
  }

  // Prevent duplicates on the same day
  const alreadyExists = workoutPlan[day].some(
    (item) => item.id === exercise.id
  );

  if (alreadyExists) {
    return workoutPlan;
  }

  const updatedPlan = {
    ...workoutPlan,
    [day]: [
      ...workoutPlan[day],
      exercise,
    ],
  };

  saveWorkoutPlan(updatedPlan);

  return updatedPlan;
}

export function removeExerciseFromWorkoutPlan(
  day,
  exerciseId
) {
  const workoutPlan = getWorkoutPlan();

  const updatedPlan = {
    ...workoutPlan,
    [day]: workoutPlan[day].filter(
      (exercise) => exercise.id !== exerciseId
    ),
  };

  saveWorkoutPlan(updatedPlan);

  return updatedPlan;
}

export function clearWorkoutDay(day) {
  const workoutPlan = getWorkoutPlan();

  const updatedPlan = {
    ...workoutPlan,
    [day]: [],
  };

  saveWorkoutPlan(updatedPlan);

  return updatedPlan;
}

export function clearWorkoutPlan() {
  localStorage.removeItem(STORAGE_KEY);
}
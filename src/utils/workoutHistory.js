const HISTORY_KEY = 'workoutHistory';

export function getWorkoutHistory() {
  try {
    const savedHistory = localStorage.getItem(HISTORY_KEY);

    if (!savedHistory) {
      return [];
    }

    return JSON.parse(savedHistory);
  } catch (error) {
    console.error('Failed to load workout history:', error);
    return [];
  }
}

export function saveWorkoutHistory(history) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Failed to save workout history:', error);
  }
}

export function addWorkoutToHistory(workout) {
  const history = getWorkoutHistory();

  const updatedHistory = [...history, workout];

  saveWorkoutHistory(updatedHistory);

  return updatedHistory;
}

export function removeWorkoutFromHistory(workoutId) {
  const history = getWorkoutHistory();

  const updatedHistory = history.filter(
    (workout) => workout.id !== workoutId
  );

  saveWorkoutHistory(updatedHistory);

  return updatedHistory;
}

export function clearWorkoutHistory() {
  localStorage.removeItem(HISTORY_KEY);
}
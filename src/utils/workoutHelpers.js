const STORAGE_KEY = 'workoutPlan'

export const defaultWorkoutPlan = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
}

export function getWorkoutPlan() {
    try {
        const savedPlan = localStorage.getItem(STORAGE_KEY)

        if (!savedPlan) {
            return defaultWorkoutPlan
        }

        return JSON.parse(savedPlan)
    } catch (error) {
        console.error('Failed to load workout plan:', error)

        return defaultWorkoutPlan
    }
}

export function saveWorkoutPlan(workoutPlan) {
    try {
            localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(workoutPlan)
        )
    } catch (error) {
        console.error('Failed to save workout plan:', error)
    }
}

export function clearWorkoutPlan() {
    localStorage.removeItem(STORAGE_KEY)
}

export function addExerciseToWorkoutPlan(day, exercise) {
    const workoutPlan = getWorkoutPlan()

    const alreadyExists = workoutPlan[day].some(
        (item) => item.id === exercise.id
    )

    if (alreadyExists) {
        return workoutPlan
    }

    const updatedPlan = {
        ...workoutPlan,
        [day]: [
        ...workoutPlan[day],
        exercise,
        ],
    }

    saveWorkoutPlan(updatedPlan)

    return updatedPlan
}
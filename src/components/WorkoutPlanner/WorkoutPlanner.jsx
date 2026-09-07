import { Box, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import DayCard from './DayCard'
import { defaultWorkoutPlan, getWorkoutPlan, saveWorkoutPlan, } from '../../utils/workoutHelpers'


const initialWorkoutPlan = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
}

function WorkoutPlanner() {
    const [workoutPlan, setWorkoutPlan] = useState(getWorkoutPlan)

    useEffect(() => {
        saveWorkoutPlan(workoutPlan)
    }, [workoutPlan])

    const totalExercises = Object.values(workoutPlan).reduce(
        (total, exercises) => total + exercises.length,
        0
    )

    const clearDay = (day) => {
        setWorkoutPlan((previousPlan) => ({
            ...previousPlan,
            [day]: [],
        }))
    }

    const addExerciseToDay = (day, exercise) => {
        setWorkoutPlan((previousPlan) => {
            const alreadyExists = previousPlan[day].some(
                (item) => item.id === exercise.id
            )

            if (alreadyExists) return previousPlan;

            return {
                ...previousPlan,
                [day]: [
                    ...previousPlan[day],
                    exercise
                ]
            }
        })
    }

    const removeExerciseFromDay = (day, exerciseId) => {
        setWorkoutPlan((previousPlan) => ({
            ...previousPlan,

            [day]: previousPlan[day].filter(
                (exercise) => exercise.id !== exerciseId
            ),
        }))
    }

    return (
        <>
            <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: { xs: 2, md: 4 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, gap: 2, }}>
                    <Box>
                        <Typography variant="h4" component="h1" fontWeight="bold">Workout Planner</Typography>
                    
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                            Plan your workouts for the week
                        </Typography>
                    </Box>

                    <Paper elevation={0}
                        sx={{
                            px: 2,
                            py: 1,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">Total exercises</Typography>

                        <Typography variant="h6" fontWeight="bold" >{totalExercises}</Typography>
                    </Paper>
                </Box>

                <Grid container spacing={3}>
                    {
                        Object.keys(workoutPlan).map((day) => (
                            <Grid item xs={12} sm={6} md={4} key={day}>
                                <DayCard 
                                    day={day}
                                    exercises={workoutPlan[day]}
                                    onRemoveExercise={removeExerciseFromDay}
                                    onClearDay={clearDay}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}

export default WorkoutPlanner
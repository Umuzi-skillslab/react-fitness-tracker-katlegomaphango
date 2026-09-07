import { Box, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import DayCard from './DayCard'
import { removeExerciseFromWorkoutPlan, getWorkoutPlan, clearWorkoutDay } from '../../utils/workoutHelpers'


const defaultWorkoutPlan = {
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
        setWorkoutPlan(getWorkoutPlan());
    }, []);

    const totalExercises = Object.values(workoutPlan).reduce(
        (total, exercises) => total + exercises.length,
        0
    )

    const handleClearDay = (day) => {
        const updatedPlan = clearWorkoutDay(day)

        setWorkoutPlan(updatedPlan);
    }

    const handleRemoveExercise = ( day, exerciseId) => {
        const updatedPlan = removeExerciseFromWorkoutPlan(day, exerciseId)

        setWorkoutPlan(updatedPlan)
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
                        Object.keys(defaultWorkoutPlan).map((day) => (
                            <Grid item xs={12} sm={6} md={4} key={day}>
                                <DayCard 
                                    day={day}
                                    exercises={workoutPlan[day] || []}
                                    onRemoveExercise={handleRemoveExercise}
                                    onClearDay={handleClearDay}
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
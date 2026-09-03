import { 
    Typography, 
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Button
} from '@mui/material'
import ExerciseList from '../components/Exercise/ExerciseList' 
import { exercisesData } from '../data/exercisesData'
import { useMemo, useState } from 'react'
import { FilterList, } from '@mui/icons-material'

function ExercisesPage() {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const [muscleGroup, setMuscleGroup] = useState('')
    const [difficulty, setDifficulty] = useState('')

    const categories = [
        ...new Set(
            exercisesData.map((exercise) => exercise.category)
        )
    ]

    const muscleGroups = [
        ...new Set(
            exercisesData.flatMap(
                (exercise) => exercise.muscleGroups
            )
        )
    ]

    const difficulties = [
        ...new Set(
            exercisesData.map((exercise) => exercise.difficulty)
        )
    ]

    const filteredExercises = useMemo(() => {
        return exercisesData.filter((exercise) => {
            const matchesSearch = exercise.name.toLowerCase().includes(search.toLowerCase())
            const matchesCategory = category === '' || exercise.category === category
            const matchesMuscle = muscleGroup === '' || exercise.muscleGroups.includes(muscleGroup)
            const matchesDifficulty = difficulty === '' || exercise.difficulty === difficulty

            return (
                matchesSearch &&
                matchesCategory &&
                matchesMuscle &&
                matchesDifficulty
            )
        })
    }, [ search, category, muscleGroup, difficulty ])

    const clearFilters = () => {
        setSearch('')
        setCategory('')
        setMuscleGroup('')
        setDifficulty('')
    }

    return (
        <>
            <Box sx={{ minHeight: '100vh', backgroundColor: '#f6f8f7', py: 4, pt: 13 }} className="exercise-page">
                <Box 
                    sx={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        px: {
                            xs: 2,
                            sm: 3,
                            md: 4
                        }
                    }}
                    className="exercise-page_container"
                >
                    {/* <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                        Exercises
                    </Typography> */}
                    <Box sx={{ mb: 3 }}>

                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: {
                                    xs: '1.8rem',
                                    md: '2rem'
                                }
                            }}
                        >
                            Exercises
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: '#6b7280',
                                mt: 0.5
                            }}
                        >
                            Explore exercises and find the right movements for your workout.
                        </Typography>

                    </Box>

                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            border: '1px solid #e5e7eb',
                            borderRadius: 3,
                            p: 1,
                            mb: 3
                        }}
                    >
                        <TextField
                            label="Search exercises..."
                            type="text"
                            sx={{ margin: '1rem 0'}}
                            fullWidth
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                            <FormControl
                                sx={{
                                    minWidth: 180,
                                    flex: {
                                        xs: '1 1 100%',
                                        sm: '1 1 180px'
                                    }
                                }}
                                size="small"
                            >
                                <InputLabel id="category-label"> All Categories </InputLabel>
                                <Select
                                    labelId="category-label"
                                    value={category}
                                    label="All Categories"
                                    onChange={(event) =>
                                        setCategory(event.target.value)
                                    }
                                >
                                    <MenuItem value="">
                                        All Categories
                                    </MenuItem>

                                    {
                                        categories.map((item) => (
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>

                            <FormControl
                                sx={{
                                    minWidth: 180,
                                    flex: {
                                        xs: '1 1 100%',
                                        sm: '1 1 180px'
                                    }
                                }}
                                size="small"
                            >
                                <InputLabel id="muscle-label"> All Muscle Groups</InputLabel>
                                <Select
                                    labelId="muscle-label"
                                    value={muscleGroup}
                                    label="All Muscle Groups"
                                    onChange={(event) =>
                                        setMuscleGroup(event.target.value)
                                    }
                                >
                                    <MenuItem value="">All Muscle Groups</MenuItem>

                                    {
                                        muscleGroups.map((item) => (
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>

                            <FormControl
                                sx={{
                                    minWidth: 180,
                                    flex: {
                                        xs: '1 1 100%',
                                        sm: '1 1 180px'
                                    }
                                }}
                                size="small"
                            >
                                <InputLabel id="difficulty-label">All Difficulty</InputLabel>

                                <Select
                                    labelId="difficulty-label"
                                    value={difficulty}
                                    label="All Difficulty"
                                    onChange={(event) =>
                                        setDifficulty(event.target.value)
                                    }
                                >

                                    <MenuItem value="">All Difficulty</MenuItem>

                                    {
                                        difficulties.map((item) => (
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        ))
                                    }

                                </Select>
                            </FormControl>

                            <Button
                                variant="outlined"
                                startIcon={<FilterList />}
                                onClick={clearFilters}
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    height: 40
                                }}
                            >
                                Clear Filters
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }} >
                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                            Showing{' '}
                            <strong>{filteredExercises.length}</strong>
                            {' '} exercises
                        </Typography>
                    </Box>

                    <div>
                        <ExerciseList 
                            exercises={filteredExercises}
                            // workoutPlan={workoutPlan}
                            // onAddToWorkout={handleAddToWorkout}
                            // onSelectExercise={handleSelectExercise}
                        />
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default ExercisesPage
import { 
    Typography, 
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material'
import ExerciseList from '../components/Exercise/ExerciseList' 
import { exercisesData } from '../data/exercisesData'

function ExercisesPage() {
    return (
        <>
            <div className="exercise-page">
                <div className="exercise-page_container">
                    <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                        Exercises
                    </Typography>

                    <TextField
                        label="Search exercises..."
                        type="text"
                        sx={{ margin: '1rem 0'}}
                        fullWidth
                    />

                    <div>
                        <FormControl variant="outlined" sx={{ m: 1, minWidth: 180 }}>
                            <InputLabel id="all-categories">All Categories</InputLabel>
                            <Select
                            labelId="all-categories"
                            id="all-categories-outlined"
                            value={''}
                            // onChange={handleChange}
                            label="All Categories"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" sx={{ m: 1, minWidth: 180 }}>
                            <InputLabel id="all-muscle">All Muscle Group</InputLabel>
                            <Select
                            labelId="all-muscle"
                            id="all-muscle-outlined"
                            value={''}
                            // onChange={handleChange}
                            label="All Muscle Groups"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" sx={{ m: 1, minWidth: 180 }}>
                            <InputLabel id="all-categories">All Difficulty</InputLabel>
                            <Select
                            labelId="all-difficulty"
                            id="all-difficulty-outlined"
                            value={''}
                            // onChange={handleChange}
                            label="All Difficulty"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <ExerciseList 
                            exercises={exercisesData}
                            // workoutPlan={workoutPlan}
                            // onAddToWorkout={handleAddToWorkout}
                            // onSelectExercise={handleSelectExercise}
                        />
                    </div>

                    <div>Exercise Page</div>
                    <div>Exercise Page</div>
                    <div>Exercise Page</div>
                    <div>Exercise Page</div>
                    <div>Exercise Page</div>
                </div>
            </div>
        </>
    )
}

export default ExercisesPage
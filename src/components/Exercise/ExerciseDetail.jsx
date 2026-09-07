import {
  Modal,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Divider,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import {
  getWorkoutPlan,
  addExerciseToWorkoutPlan,
} from '../../utils/workoutHelpers';
import { useEffect, useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 500, },
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  overflowY: 'auto',
}

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function ExerciseDetail({ open, onClose, exercise, isInPlan = false, onAdd }) {
  const [selectedDay, setSelectedDay] = useState('Monday')
  const [workoutPlan, setWorkoutPlan] = useState(getWorkoutPlan)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if(open) {
      setWorkoutPlan(getWorkoutPlan())
      setAdded(false)
    }
  }, [open])

  const exerciseAlreadyAdded = exercise && workoutPlan[selectedDay]?.some((item) => item.id === exercise.id)

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    setAdded(false);
  }

  const handleAddToWorkout = () => {
    if (!exercise) return;

    if (exerciseAlreadyAdded) return;

    const updatedPlan = addExerciseToWorkoutPlan(selectedDay, exercise)

    setWorkoutPlan(updatedPlan)
    setAdded(true)

    if(onAdd) onAdd(exercise, selectedDay);
  }

  if (!exercise) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            component="video"
            height="194"
            src={exercise.videoUrl}
            controls
            sx={{ width: '100%', objectFit: 'cover', backgroundColor: 'black' }}
          />
          <CardContent>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="h5" component="h2" fontWeight="bold">{exercise.name}</Typography>
                <Chip
                  sx={{ margin: '0.2rem' }}
                  color="secondary"
                  label={exercise.difficulty}
                  size="small"
                />
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                {exercise.muscleGroups?.map((muscle, index) => (
                  <Chip key={index} label={muscle} size='small' variant='outlined' sx={{ margin: '0.2rem' }} />
                ))}
              </Box>

              <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>Equipment: {exercise.equipment}</Typography>

              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  color: 'text.secondary',
                  width: '100%',
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                <Box sx={{ flex: 1, p: 1.5, textAlign: 'center' }}>
                  <Typography variant='body2' color='text.secondary'>Sets</Typography>
                  <Typography fontWeight="bold">{exercise.sets}</Typography>
                </Box>

                <Divider orientation="vertical" variant="middle" flexItem />

                <Box sx={{ flex: 1, p: 1.5, textAlign: 'center' }}>
                  <Typography variant='body2' color='text.secondary'>Reps</Typography>
                  <Typography fontWeight="bold">{exercise.reps}</Typography>
                </Box>

                <Divider orientation="vertical" variant="middle" flexItem />

                <Box sx={{ flex: 1, p: 1.5, textAlign: 'center' }}>
                  <Typography variant='body2' color='text.secondary'>Calories Burn</Typography>
                  <Typography fontWeight="bold">{exercise.caloriesBurn}</Typography>
                </Box>
              </Box>

              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                Instructions
              </Typography>

              <Box sx={{ mb: 3 }}>
                {
                  exercise.instructions?.map((step, index) => (
                    <Typography key={index} variant='body2' sx={{ mb: 1 }}>{index+1}. {step.trim()}</Typography>
                  ))
                }
              </Box>

              <Divider sx={{ mb: 3 }} />

              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }} >Add to Workout Plan</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }} >
                Choose which day you want to perform this
                exercise.
              </Typography>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="workout-day-label">Workout Day</InputLabel>
                <Select
                  labelId="workout-day-label"
                  id="workout-day"
                  value={selectedDay}
                  label="Workout Day"
                  onChange={handleDayChange}
                >
                  {
                    days.map((day) => (
                      <MenuItem key={day} value={day}>{day}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>

              {
                exerciseAlreadyAdded && (
                  <Alert severity='info' sx={{ mb: 2 }}>
                    {exercise.name} is already in your{' '}
                    {selectedDay} workout.
                  </Alert>
                )
              }

              {
                added && (
                  <Alert severity="success" sx={{ mb: 2 }}>
                    {exercise.name} was added to your{' '}
                    {selectedDay} workout!
                  </Alert>
                )
              }

              <Button variant="contained" fullWidth onClick={handleAddToWorkout} disabled={exerciseAlreadyAdded}>
                {
                  exerciseAlreadyAdded ? 'Already in Workout Plan' : 'Add to Workout Plan'
                }
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default ExerciseDetail;
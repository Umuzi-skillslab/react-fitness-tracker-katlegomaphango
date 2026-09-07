import { useEffect, useState } from 'react';

import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Divider,
} from '@mui/material';

import { CheckOutlined } from '@mui/icons-material';

import DayCard from '../WorkoutPlanner/DayCard';
import LogEntry from './LogEntry';

import {
  getWorkoutPlan,
  removeExerciseFromWorkoutPlan,
} from '../../utils/workoutHelpers';

import {
  getWorkoutHistory,
  addWorkoutToHistory,
  removeWorkoutFromHistory,
} from '../../utils/workoutHistory';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function WorkoutLog() {
  const [workoutPlan, setWorkoutPlan] = useState(getWorkoutPlan());
  const [workoutHistory, setWorkoutHistory] = useState(
    getWorkoutHistory()
  );
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setWorkoutPlan(getWorkoutPlan());
    setWorkoutHistory(getWorkoutHistory());
  }, []);

  const selectedExercises = workoutPlan[selectedDay] || [];

  const totalCalories = selectedExercises.reduce(
    (total, exercise) =>
      total + (Number(exercise.caloriesBurn) || 0),
    0
  );

  const handleCompleteWorkout = () => {
    if (selectedExercises.length === 0) {
      setMessage(
        `There are no exercises planned for ${selectedDay}.`
      );
      return;
    }

    const workout = {
      id: Date.now(),
      date: new Date().toISOString(),
      day: selectedDay,
      exercises: selectedExercises,
      calories: totalCalories,
    };

    const updatedHistory = addWorkoutToHistory(workout);

    setWorkoutHistory(updatedHistory);
    setMessage(
      `${selectedDay}'s workout has been completed!`
    );
  };

  const handleDeleteHistory = (workoutId) => {
    const updatedHistory =
      removeWorkoutFromHistory(workoutId);

    setWorkoutHistory(updatedHistory);
  };

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        p: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
        >
          Workout Log
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          Complete your planned workouts and keep track
          of your training history.
        </Typography>
      </Box>

      {message && (
        <Alert
          severity={
            message.includes('completed')
              ? 'success'
              : 'warning'
          }
          onClose={() => setMessage('')}
          sx={{ mb: 3 }}
        >
          {message}
        </Alert>
      )}

      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
          p: { xs: 2, md: 3 },
          mb: 4,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Complete a Workout
        </Typography>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="log-workout-day-label">
            Workout Day
          </InputLabel>

          <Select
            labelId="log-workout-day-label"
            id="log-workout-day"
            value={selectedDay}
            label="Workout Day"
            onChange={(event) =>
              setSelectedDay(event.target.value)
            }
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedExercises.length === 0 ? (
          <Alert severity="info" sx={{ mb: 2 }}>
            No exercises have been added to your{' '}
            {selectedDay} workout.
          </Alert>
        ) : (
          <>
            <DayCard
              day={selectedDay}
              exercises={selectedExercises}
              onRemoveExercise={(day, exerciseId) => {
                const updatedPlan =
                  removeExerciseFromWorkoutPlan(
                    day,
                    exerciseId
                  );

                setWorkoutPlan(updatedPlan);
              }}
              onClearDay={() => {}}
            />

            <Button
              variant="contained"
              size="large"
              fullWidth
              startIcon={<CheckOutlined />}
              onClick={handleCompleteWorkout}
              sx={{ mt: 2 }}
            >
              Mark {selectedDay} as Completed
            </Button>
          </>
        )}
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box>
        <Typography
          variant="h5"
          component="h2"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          Workout History
        </Typography>

        {workoutHistory.length === 0 ? (
          <Alert severity="info">
            You haven't completed any workouts yet.
          </Alert>
        ) : (
          [...workoutHistory]
            .sort(
              (a, b) =>
                new Date(b.date) - new Date(a.date)
            )
            .map((workout) => (
              <LogEntry
                key={workout.id}
                workout={workout}
                onDelete={handleDeleteHistory}
              />
            ))
        )}
      </Box>
    </Box>
  );
}

export default WorkoutLog;
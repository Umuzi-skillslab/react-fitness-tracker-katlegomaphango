import { useEffect, useState } from 'react';

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { getWorkoutPlan } from '../utils/workoutHelpers';
import { getWorkoutHistory } from '../utils/workoutHistory';

function calculateWorkoutStreak(history) {
  if (!history || history.length === 0) {
    return 0;
  }

  const dates = [
    ...new Set(
      history.map((workout) =>
        new Date(workout.date).toDateString()
      )
    ),
  ]
    .map((date) => new Date(date))
    .sort((a, b) => b - a);

  if (dates.length === 0) {
    return 0;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const latestDate = new Date(dates[0]);
  latestDate.setHours(0, 0, 0, 0);

  const differenceInDays = Math.floor(
    (today - latestDate) /
    (1000 * 60 * 60 * 24)
  );

  if (differenceInDays > 1) {
    return 0;
  }

  let streak = 1;

  for (let i = 0; i < dates.length - 1; i++) {
    const currentDate = new Date(dates[i]);
    const previousDate = new Date(dates[i + 1]);

    currentDate.setHours(0, 0, 0, 0);
    previousDate.setHours(0, 0, 0, 0);

    const difference =
      (currentDate - previousDate) /
      (1000 * 60 * 60 * 24);

    if (difference === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

function ProgressPage() {
  const [workoutPlan, setWorkoutPlan] = useState({});
  const [workoutHistory, setWorkoutHistory] = useState([]);

  useEffect(() => {
    setWorkoutPlan(getWorkoutPlan());
    setWorkoutHistory(getWorkoutHistory());
  }, []);

  const totalExercises = Object.values(
    workoutPlan
  ).reduce(
    (total, exercises) =>
      total + exercises.length,
    0
  );

  const totalCalories = Object.values(
    workoutPlan
  ).reduce(
    (total, exercises) =>
      total +
      exercises.reduce(
        (exerciseTotal, exercise) =>
          exerciseTotal +
          (Number(exercise.caloriesBurn) || 0),
        0
      ),
    0
  );

  const totalWorkoutsCompleted =
    workoutHistory.length;

  const workoutStreak =
    calculateWorkoutStreak(workoutHistory);

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
          Progress
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          Track your workouts and progress.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <ProgressCard
            title="Workouts Completed"
            value={totalWorkoutsCompleted}
            icon={<FitnessCenterIcon />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ProgressCard
            title="Exercises in Plan"
            value={totalExercises}
            icon={<CalendarMonthIcon />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ProgressCard
            title="Estimated Calories"
            value={totalCalories}
            icon={<LocalFireDepartmentIcon />}
            suffix=" kcal"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ProgressCard
            title="Workout Streak"
            value={workoutStreak}
            icon={<EmojiEventsIcon />}
            suffix={
              workoutStreak === 1
                ? ' day'
                : ' days'
            }
          />
        </Grid>
      </Grid>

      <Card
        elevation={0}
        sx={{
          mt: 4,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 1 }}
          >
            Keep going!
          </Typography>

          {workoutStreak > 0 ? (
            <Typography color="text.secondary">
              You're currently on a{' '}
              <strong>
                {workoutStreak}-day
              </strong>{' '}
              workout streak. Keep training
              consistently!
            </Typography>
          ) : (
            <Typography color="text.secondary">
              Complete a workout today to start
              your workout streak.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

function ProgressCard({
  title,
  value,
  icon,
  suffix = '',
}) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: 2,
              backgroundColor: 'action.hover',
            }}
          >
            {icon}
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mt: 0.5 }}
        >
          {value}
          {suffix}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProgressPage;
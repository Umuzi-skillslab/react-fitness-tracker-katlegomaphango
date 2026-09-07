import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Divider,
} from '@mui/material';

import { DeleteOutlineOutlined, FitnessCenter } from '@mui/icons-material';

function LogEntry({ workout, onDelete }) {
  const formattedDate = new Date(workout.date).toLocaleDateString(
    'en-ZA',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        mb: 2,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <FitnessCenter color="primary" />

            <Box>
              <Typography variant="h6" fontWeight="bold">
                {workout.day} Workout
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {formattedDate}
              </Typography>
            </Box>
          </Box>

          <IconButton
            color="error"
            onClick={() => onDelete(workout.id)}
            aria-label="Delete workout"
          >
            <DeleteOutlineOutlined />
          </IconButton>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Chip
            label={`${workout.exercises.length} ${
              workout.exercises.length === 1
                ? 'exercise'
                : 'exercises'
            }`}
            size="small"
          />

          <Chip
            label={`${workout.calories} kcal`}
            size="small"
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          {workout.exercises.map((exercise) => (
            <Box
              key={exercise.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 1.5,
                mb: 1,
                borderRadius: 2,
                backgroundColor: 'action.hover',
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  fontWeight="600"
                >
                  {exercise.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {exercise.sets} sets × {exercise.reps} reps
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {exercise.caloriesBurn || 0} kcal
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default LogEntry;
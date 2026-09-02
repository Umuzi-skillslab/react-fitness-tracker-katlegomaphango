import React from 'react';
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
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid blue',
  boxShadow: 24,
  borderRadius: '10px',
  overflow: 'hidden',
};

function ExerciseDetail({ open, onClose, exercise }) {
  if (!exercise) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            component="video"
            height="194"
            image={exercise.videoUrl}
            controls
          />
          <CardContent>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">{exercise.name}</Typography>
                <Chip
                  sx={{ margin: '0.2rem' }}
                  color="secondary"
                  label={exercise.difficulty}
                  size="small"
                />
              </Box>

              <Typography component="div" sx={{ margin: '4px 0' }}>
                {exercise.muscleGroups?.map((muscle, index) => (
                  <Chip key={index} label={muscle} sx={{ margin: '0.2rem' }} />
                ))}
              </Typography>

              <Typography>Equipment: {exercise.equipment}</Typography>

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
                <Typography sx={{ padding: 2, textAlign: 'center', flex: 1 }}>
                  Sets <Typography component="span" display="block" fontWeight="bold">{exercise.sets}</Typography>
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography sx={{ padding: 2, textAlign: 'center', flex: 1 }}>
                  Reps <Typography component="span" display="block" fontWeight="bold">{exercise.reps}</Typography>
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography sx={{ padding: 2, textAlign: 'center', flex: 1 }}>
                  Calories Burn <Typography component="span" display="block" fontWeight="bold">{exercise.caloriesBurn}</Typography>
                </Typography>
              </Box>

              <Typography sx={{ marginBottom: 2 }}>
                {exercise.instructions
                  ?.map((step) => step.trim().replace(/\.?$/, '.'))
                  .join(' ')}
              </Typography>

              <Button variant="contained" sx={{ width: '100%' }}>
                Add to Workout Plan
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default ExerciseDetail;
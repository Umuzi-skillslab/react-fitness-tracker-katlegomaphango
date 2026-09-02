import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@mui/material';
import React, { useState } from 'react';
import ExerciseDetail from './ExerciseDetail';

function ExerciseCard({ exercise, isInPlan, onAdd, onSelect }) {
  const [open, setOpen] = useState(false);
  const handleShowDetail = () => setOpen(true);
  const handleHideDetail = () => setOpen(false);

  return (
    <>
      <Card
        sx={{ maxWidth: 300, minWidth: 250, width: 250, borderRadius: '10px', cursor: 'pointer' }}
        onClick={handleShowDetail}
      >
        <CardMedia
          component="img"
          alt={exercise.name}
          height="140"
          image={exercise.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {exercise.name}
          </Typography>
          <Chip
            sx={{ margin: '0.2rem' }}
            color="secondary"
            label={exercise.difficulty}
            size="small"
          />
          <Typography component="div">
            {exercise.muscleGroups.map((muscle, index) => (
              <Chip key={index} label={muscle} sx={{ margin: '0.2rem' }} />
            ))}
          </Typography>
          {exercise.equipment !== 'none' && (
            <Typography>Equipment: {exercise.equipment}</Typography>
          )}
        </CardContent>
      </Card>

      <ExerciseDetail
        open={open}
        onClose={handleHideDetail}
        exercise={exercise}
      />
    </>
  );
}

export default ExerciseCard;
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  IconButton,
} from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { useState } from 'react';
import ExerciseDetail from './ExerciseDetail';

function ExerciseCard({ exercise, isInPlan = false, onAdd, onSelect }) {
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleShowDetail = () => {
    setOpen(true);

    if (onSelect) {
      onSelect(exercise);
    }
  };

  const handleHideDetail = () => setOpen(false);

  const handleFavorite = (event) => {
    // Prevent clicking the heart from opening ExerciseDetail
    event.stopPropagation();

    setFavorite((previous) => !previous);
  };

  return (
    <>
      <Card
        elevation={0}
        onClick={handleShowDetail}
        sx={{
          width: '100%',
          maxWidth: 300,
          minWidth: 250,
          borderRadius: 3,
          border: '1px solid #e5e7eb',
          cursor: 'pointer',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: '0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
          },
        }}
      >
        <Box sx={{ position: 'relative'}}>
          <CardMedia
            component="img"
            alt={exercise.name}
            sx={{ height: 180, width: '100%', objectFit: 'cover' }}
            image={exercise.image}
          />

          <IconButton
            onClick={handleFavorite}
            aria-label={
              favorite
                ? 'Remove from favourites'
                : 'Add to favourites'
            }
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': {
                backgroundColor: '#ffffff',
              },
            }}
          >
            {
              favorite 
              ? 
              (<Favorite color="error" />) 
              : 
              (<FavoriteBorder />)
            }
          </IconButton>
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 2, }} >
          <Typography variant="h6" component="h2">
            {exercise.name}
          </Typography>
          <Chip
            sx={{ mr: 0.5, mb: 1, }}
            color="secondary"
            label={exercise.difficulty}
            size="small"
          />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {exercise.muscleGroups.map((muscle, index) => (
              <Chip key={index} label={muscle} variant="outlined" size='small' />
            ))}
          </Box>
          { exercise.equipment && exercise.equipment.toLowerCase() !== 'none' && (
            <Typography variant='body2' sx={{ color: '#6b7280', mt: 1 }}>Equipment: {exercise.equipment}</Typography>
          )}
        </CardContent>
      </Card>

      <ExerciseDetail
        open={open}
        onClose={handleHideDetail}
        exercise={exercise}
        isInPlan={isInPlan}
        onAdd={onAdd}
      />
    </>
  );
}

export default ExerciseCard;
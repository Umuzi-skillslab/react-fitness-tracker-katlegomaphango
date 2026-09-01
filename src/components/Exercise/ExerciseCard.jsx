import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Chip
} from '@mui/material'

function ExerciseCard({ exercise, isInPlan, onAdd, onSelect }) {
    console.log(exercise)
    return (
        <>
            <Card sx={{ maxWidth: 300, minWidth: 250, width: 250 }}>
                <CardMedia
                    component="img"
                    alt={exercise.name}
                    height="140"
                    image={exercise.image}
                />
                <CardContent>
                    <Typography  gutterBottom variant="h5" component="div" >
                        {exercise.name}
                    </Typography>
                    <Chip sx={{ margin: '0.2rem' }} color="secondary" label={exercise.difficulty} size="small" />
                    <Typography>
                        {exercise.muscleGroups.map(muscle => (
                            <Chip label={muscle} sx={{ margin: '0.2rem' }} />
                        ))}
                    </Typography>
                    {
                        exercise.equipment !== 'none' 
                        ? 
                        <Typography>
                            Equipment: {exercise.equipment}
                        </Typography> 
                        : ''
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default ExerciseCard
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material'

function ExerciseCard({ exercise, isInPlan, onAdd, onSelect }) {
    console.log(exercise)
    return (
        <>
            <Card sx={{ maxWidth: 300 }}>
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
                </CardContent>
                card
            </Card>
        </>
    )
}

export default ExerciseCard
import { DeleteOutlineOutlined, FitnessCenter } from "@mui/icons-material"
import { Card, CardContent, Box, Typography, IconButton, Divider, Chip } from "@mui/material"

function DayCard({ day, exercises = [], onRemoveExercise, onClearDay }) {
    return (
        <>
            <Card elevation={0} sx={{ height: '100%', border: '1px solid', borderColor: 'divider', borderRadius: 3, }}>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, }}>
                        <Box>
                            <Typography variant="h6" fontWeight="bold">{day}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {exercises.length}{' '}
                                {exercises.length === 1 ? 'exercise' : 'exercises'}
                            </Typography>
                        </Box>

                        {
                            exercises.length > 0 && (
                                <IconButton color="error" onClick={() => onClearDay(day)}>
                                    <DeleteOutlineOutlined />
                                </IconButton>
                            )
                        }
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    {
                        exercises.length === 0 ? (
                            <Box
                                sx={{
                                    minHeight: 150,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    color: 'text.secondary',
                                }}
                            >
                                <FitnessCenter sx={{ fontSize: 40, mb: 1, opacity: 0.5, }} />

                                <Typography variant="body2">No exercises planned</Typography>

                                <Typography variant="caption" sx={{ mt: 0.5 }}>
                                    Add exercises from the Exercises page
                                </Typography>
                            </Box>
                        ) : (
                            <Box>
                                {
                                    exercises.map((exercise) => (
                                        <Box
                                            key={exercise.id}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                gap: 1,
                                                p: 1.5,
                                                mb: 1,
                                                borderRadius: 2,
                                                backgroundColor: 'action.hover',
                                            }}
                                        >
                                            <Box sx={{ minWidth: 0 }}>
                                                <Typography variant="body1" fontWeight="600" noWrap >
                                                    {exercise.name}
                                                </Typography>

                                                <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5, }}>
                                                    <Chip label={`${exercise.sets} sets`} size="small" />
                                                    <Chip label={`${exercise.reps} reps`} size="small" />
                                                </Box>
                                            </Box>

                                            <IconButton size="small" color="error" onClick={() => onRemoveExercise(day, exercise.id)}>
                                                <DeleteOutlineOutlined />
                                            </IconButton>
                                        </Box>
                                    ))
                                }
                            </Box>
                        )
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default DayCard
import { 
    Typography, 
    TextField
} from '@mui/material'

function ExercisesPage() {
    return (
        <>
            <div className="exercise-page">
                <div className="exercise-page_container">
                    <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                        Exercises
                    </Typography>

                    <TextField
                        label="Search exercises..."
                        type="text"
                        sx={{ margin: '1rem 0'}}
                        fullWidth
                    />

                    <div>
                        
                    </div>
                    <div>Exercise Page</div>
                    <div>Exercise Page</div>
                    <div>Exercise Page</div>
                    <div>Exercise Page</div>
                    <div>Exercise Page</div>
                    <div>Exercise Page</div>
                </div>
            </div>
        </>
    )
}

export default ExercisesPage
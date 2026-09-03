import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Avatar,
} from "@mui/material"
import { CheckCircle, FitnessCenter } from "@mui/icons-material"
import { Fragment } from "react"

const workouts = [
    {
        id: 1,
        name: "Push Day Workout",
        date: "Today",
        duration: "60 min",
    },
    {
        id: 2,
        name: "Morning Cardio",
        date: "Yesterday",
        duration: "30 min",
    },
    {
        id: 3,
        name: "Leg Day Strength",
        date: "May 22",
        duration: "75 min",
    },
];

function RecentWorkouts() {
    return (
        <>
            <Card elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: 3, height: "100%", }}>
                <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, }} >
                        Recent Workouts
                    </Typography>

                    {
                        workouts.map((workout, i) => (
                            <Fragment key={i}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1.5, }}>
                                    <Avatar sx={{ backgroundColor: "#ecfdf5", color: "#16a34a", }}>
                                        <FitnessCenter fontSize="small" />
                                    </Avatar>

                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography sx={{ fontWeight: 600, fontSize: 14, }} >
                                            {workout.name}
                                        </Typography>

                                        <Typography variant="caption" color="text.secondary" >
                                            {workout.date} • {workout.duration}
                                        </Typography>
                                    </Box>

                                    <CheckCircle sx={{ color: "#16a34a", }} />
                                </Box>

                                {i < workouts.length - 1 && (
                                    <Divider />
                                )}
                            </Fragment>
                        ))
                    }
                    <Typography
                        sx={{
                            color: "#16a34a",
                            fontWeight: 600,
                            fontSize: 14,
                            mt: 2,
                            cursor: "pointer",
                        }}
                    >
                        View all workouts →
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default RecentWorkouts
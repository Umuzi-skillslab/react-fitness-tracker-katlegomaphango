import { Box, Typography, Button, } from "@mui/material";
import { FitnessCenter, CalendarMonth, EditNote, TrendingUp} from "@mui/icons-material"

const actions = [
    {
        title: "Browse Exercises",
        subtitle: "Find new exercises",
        icon: <FitnessCenter />,
    },
    {
        title: "Plan Workout",
        subtitle: "Build your routine",
        icon: <CalendarMonth />,
    },
    {
        title: "Log Workout",
        subtitle: "Track your workout",
        icon: <EditNote />,
    },
    {
        title: "View Progress",
        subtitle: "See your results",
        icon: <TrendingUp />,
    },
];

function QuickActions() {
    return (
        <>
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, }} >
                    Quick Actions
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
                        },
                        gap: 2,
                    }}
                >
                    {
                        actions.map((action) => (
                            <Button
                                key={action.title}
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    textAlign: "left",
                                    justifyContent: "flex-start",
                                    p: 2,
                                    borderColor: "#e5e7eb",
                                    borderRadius: 3,
                                    backgroundColor: "#ffffff",
                                    color: "#111827",

                                    "&:hover": {
                                        borderColor: "#16a34a",
                                        backgroundColor: "#f0fdf4",
                                    },
                                }}
                            >
                                <Box sx={{ mr: 1.5, color: "#16a34a", display: "flex", }} >
                                    {action.icon}
                                </Box>

                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: 13, }} >
                                        {action.title}
                                    </Typography>

                                    <Typography sx={{ fontSize: 11, color: "#6b7280", }} >
                                        {action.subtitle}
                                    </Typography>
                                </Box>
                            </Button>
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default QuickActions
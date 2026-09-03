import {
    Card,
    CardContent,
    Box,
    Typography,
    LinearProgress,
} from "@mui/material";

import {
    FitnessCenter,
    EmojiEvents,
    Whatshot,
    LocalFireDepartment
} from "@mui/icons-material"

function StatCard({ title, value, subtitle, icon, color, progress }) {
    const icons = {
        workout: <FitnessCenter />,
        fitness: <EmojiEvents />,
        streak: <Whatshot />,
        calories: <LocalFireDepartment />,
    }

    return (
        <>
            <Card 
                elevation={0}
                sx={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 3,
                    height: "100%",
                    backgroundColor: "#ffffff",
                    transition: "0.2s",
                    "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.07)",
                    },
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: `${color}15`,
                            color: color,
                        }}
                    >
                        {icons[icon]}
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{
                            color: "#6b7280",
                            mt: 2,
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                    variant="h5"
                        sx={{
                            fontWeight: 800,
                            color: "#111827",
                            mt: 0.5,
                        }}
                    >
                        {value}
                    </Typography>

                    <Typography
                        variant="caption"
                        sx={{
                            color: "#6b7280",
                        }}
                    >
                        {subtitle}
                    </Typography>

                    {progress !== undefined && (
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                            mt: 2,
                            height: 5,
                            borderRadius: 5,
                            backgroundColor: "#e5e7eb",
                            "& .MuiLinearProgress-bar": {
                                backgroundColor: color,
                                borderRadius: 5,
                            },
                            }}
                        />
                    )}
                </CardContent>
            </Card>
        </>
    )
}

export default StatCard
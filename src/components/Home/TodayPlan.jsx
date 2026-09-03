import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import { AccessTime, FitnessCenter } from "@mui/icons-material"

function TodayPlan() {
    return (
        <>
            <Card
                elevation={0}
                sx={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 3,
                    height: "100%",
                }}
            >
                <CardContent sx={{ p: 3 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                        }}
                    >
                        Today's Plan
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {
                            xs: "column",
                            md: "row",
                            },
                            gap: 3,
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 800,
                                    mb: 1,
                                }}
                            >
                                Upper Body Strength
                            </Typography>

                            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2, }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, }}>
                                    <AccessTime sx={{ fontSize: 17, color: "#6b7280", }} />
                                    <Typography variant="body2" color="text.secondary" >
                                        60 min
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, }}>
                                    <FitnessCenter sx={{ fontSize: 17, color: "#6b7280", }} />
                                    <Typography variant="body2" color="text.secondary" >
                                        6 exercises
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#6b7280",
                                    lineHeight: 1.7,
                                    mb: 2,
                                }}
                            >
                                Focus on your chest, shoulders, and triceps with today's workout.
                            </Typography>

                            <Chip
                                label="Strength"
                                size="small"
                                sx={{
                                    backgroundColor: "#ecfdf5",
                                    color: "#15803d",
                                    fontWeight: 600,
                                    mb: 2,
                                }}
                            />

                            <Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                    backgroundColor: "#16a34a",
                                    textTransform: "none",
                                    fontWeight: 700,
                                    borderRadius: 2,
                                    px: 3,

                                    "&:hover": {
                                        backgroundColor: "#15803d",
                                    },
                                    }}
                                >
                                    Start Workout
                                </Button>
                            </Box>
                        </Box>

                        <Box
                            component="img"
                            src="/assets/images/upper-body.jpg"
                            alt="Upper body workout"
                            sx={{
                            width: {
                                xs: "100%",
                                md: 250,
                            },
                            height: 185,
                            objectFit: "cover",
                            borderRadius: 3,
                            }}
                        >
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default TodayPlan
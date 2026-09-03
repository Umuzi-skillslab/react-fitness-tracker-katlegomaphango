import { Card, CardContent, Typography,  Box, } from "@mui/material";

const progress = [
    { day: "Mon", value: 55 },
    { day: "Tue", value: 70 },
    { day: "Wed", value: 45 },
    { day: "Thu", value: 85 },
    { day: "Fri", value: 95 },
    { day: "Sat", value: 35 },
    { day: "Sun", value: 20 },
];

function WeeklyProgress() {
    return (
        <>
            <Card elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: 3, height: "100%", }}>
                <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, }}>
                        Weekly Progress
                    </Typography>

                    <Typography variant="caption" color="text.secondary" >
                        Workouts completed
                    </Typography>

                    <Box
                        sx={{
                            height: 150,
                            mt: 3,
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            gap: 1,
                        }}
                    >
                        {
                            progress.map((item) => (
                                <Box
                                    key={item.day}
                                    sx={{
                                        height: "100%",
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "60%",
                                            height: `${item.value}%`,
                                            minHeight: 8,
                                            borderRadius: "5px 5px 0 0",
                                            backgroundColor: "#16a34a",
                                        }}
                                    >
                                        <Typography variant="caption" color="text.secondary" >
                                            {item.day}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default WeeklyProgress
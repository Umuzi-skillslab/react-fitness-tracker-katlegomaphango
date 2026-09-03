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

            </Card>
        </>
    )
}

export default WeeklyProgress
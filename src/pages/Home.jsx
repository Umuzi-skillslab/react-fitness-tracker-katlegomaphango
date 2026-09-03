import {
    Box,
    Container,
    Typography,
} from "@mui/material"
import StatCard from "../components/Home/StatCard"
import TodayPlan from "../components/Home/TodayPlan"
import RecentWorkouts from "../components/Home/RecentWorkouts"
import QuickActions from "../components/Home/QuickActions"
import MotivationCard from "../components/Home/MotivationCard"
import WeeklyProgress from "../components/Home/WeeklyProgress"

function Home() {
    return (
        <>
            <Box sx={{ minHeight: '100vh', backgroundColor: "#f6f8f7" }} className="home-page">
                <Container
                    sx={{
                        py: {
                            xs: 3,
                        },
                        px: {
                            xs: 2,
                            sm: 3,
                            md: 4,
                        },
                    }}  
                >
                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h2"
                            sx={{
                            fontWeight: 'bold',
                            fontSize: {
                                xs: "1.7rem",
                                md: "2rem",
                                },
                            }}
                        >
                            Dashboard
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            lg: "repeat(4, 1fr)",
                            },
                            gap: 2,
                            mb: 4,
                        }}  
                    >
                        <StatCard
                            title="Workouts This Week"
                            value="4"
                            subtitle="of 6 completed"
                            icon="workout"
                            color="#16a34a"
                            progress={67}
                        />

                        <StatCard
                            title="Total Workouts"
                            value="28"
                            subtitle="All time"
                            icon="fitness"
                            color="#6366f1"
                        />

                        <StatCard
                            title="Current Streak"
                            value="7"
                            subtitle="days"
                            icon="streak"
                            color="#2563eb"
                        />

                        <StatCard
                            title="Calories Burned"
                            value="2,450"
                            subtitle="This week"
                            icon="calories"
                            color="#f97316"
                        />
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                            xs: "1fr",
                            lg: "1.4fr 1fr",
                            },
                            gap: 3,
                            mb: 4,
                        }}
                    >
                        <TodayPlan />

                        <RecentWorkouts />
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <QuickActions />
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                            xs: "1fr",
                            lg: "1.4fr 1fr",
                            },
                            gap: 3,
                        }}
                    >
                        <MotivationCard />

                        <WeeklyProgress />
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Home
import { Card, Box, Typography, } from "@mui/material";

function MotivationCard() {
    return (
        <>
            <Card
                elevation={0}
                sx={{
                    minHeight: 200,
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    backgroundImage:
                    "url(/assets/images/motivation.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(90deg, rgba(0,0,0,.85), rgba(0,0,0,.25))",
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            p: 3,
                            minHeight: 200,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#ffffff",
                                fontSize: {
                                xs: 18,
                                md: 20,
                                },
                                fontWeight: 700,
                                maxWidth: 450,
                                lineHeight: 1.4,
                            }}
                        >
                            "The only bad workout is the one that didn't happen."
                        </Typography>
                        
                        <Typography sx={{ color: "#d1d5db", mt: 1, fontSize: 13, }} >
                            — Unknown
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default MotivationCard
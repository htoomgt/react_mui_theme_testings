import "./App.css";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function App() {
    const MyCustomButton = styled(Button)(({ theme }) => ({
        padding: theme.spacing(2),
    }));
    return (
        <>
            <div className="App">
                <Typography variant="myVariant">This is my app</Typography>
                <Typography sx={{ color: "customColor.main" }}>
                    Hit the like button
                </Typography>
                <MyCustomButton
                    sx={{
                        p: 2,
                    }}
                    variant="contained"
                    color="secondary"
                >
                    Hello from MUI V5
                </MyCustomButton>
            </div>
        </>
    );
}

export default App;

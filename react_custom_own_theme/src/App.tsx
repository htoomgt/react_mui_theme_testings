import "./App.css";
import { Button, Typography } from "@mui/material";

function App() {
    return (
        <>
            <div className="App">
                <Typography variant="h4">This is my app</Typography>
                <Typography>Hit the like button</Typography>
                <Button variant="contained" color="error">
                    Hello from MUI V5
                </Button>
            </div>
        </>
    );
}

export default App;

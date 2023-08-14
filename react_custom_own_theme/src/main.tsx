import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#CCC",
        },
        secondary: {
            main: orange[800],
        },
        customColor: {
            main: red[400],
            superDark: red[800],
            superLight: red[100],
        },
    },
    typography: {
        myVariant: {
            fontSize: "3rem",
            color: orange[500],
        },
    },
    // spacing: 1,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

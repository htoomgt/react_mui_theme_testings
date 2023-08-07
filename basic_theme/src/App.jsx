import "./App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    spacer: {
        marginTop: 20,
        marginBottom: 20,
    },
    card: {
        // maxWidth: 400,
        //  minWidth: 275
    },
    title: {},
}));

function App() {
    const classes = useStyles();
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });

    // const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    // };

    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            My React App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default App;

import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function Header(props) {
 
    return (
        <div>
            <AppBar>
            <Toolbar>
            <Typography variant="h6">Ascent WoW</Typography>
            <Button variant="outlined" color="inherit" className="header-button" onClick={props.toggle}>Register</Button>
            </Toolbar>
            </AppBar>
        </div>

    )
}
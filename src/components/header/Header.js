import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";

const Header = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ToDo
                </Typography>
                <Button
                    type="submit"
                    color="inherit"
                    onClick={props.handleLogout}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

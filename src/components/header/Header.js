import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from '../../store/auth';

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = (props) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ToDo
                </Typography>
                <Button
                    type="submit"
                    color="inherit"
                    onClick={logoutHandler}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

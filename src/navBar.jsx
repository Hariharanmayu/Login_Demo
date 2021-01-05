import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    appbar:{
        background: 'linear-gradient(45deg, #181818 30%, #404040 90%)',
        margin: 0,
    },
    buttonRoot:{
        color: "#528C37",
        flexGrow:1,
        padding: 0,
        margin: 0,
    },
    signUpButtonRoot:{

    },
};

function Navbar(props){
    const {classes} = props;
    return(
        <div>
            <AppBar position = 'static' className = {classes.appbar} >
                <Toolbar style={{ flexDirection: "row" }}>
                    <IconButton edge = "start" href = "#" className = {classes.buttonRoot}>
                        <HomeIcon fontSize = "large"/>
                    </IconButton>
                    <Typography variant = "h6" className = {classes.buttonRoot} align = 'center'>
                        AWSLABS
                    </Typography>
                    <Button size = "small" className = {classes.buttonRoot} align = 'right'>
                        Pricing
                    </Button>
                    <Button size = "small" className = {classes.buttonRoot} align = 'right'>
                        Learning Path
                    </Button>
                    <Button size = "small" className = {classes.buttonRoot} align = 'right'>
                        All Courses
                    </Button>
                    <Button size = "small" className = {classes.buttonRoot} align = 'right'>
                        Log In
                    </Button>
                    <Button edge="end" size = "small" className = {classes.buttonRoot} align = 'right'>
                        JOIN NOW
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Navbar);
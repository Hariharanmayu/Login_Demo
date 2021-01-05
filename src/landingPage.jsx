import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Bgimage from './bgImage2.jpg';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    landing_root: {
        flex: 1,
        height: '100vh',
        margin: '0 auto'
    },
    TypographyRoot: {
        color: 'white',
        position: 'absolute',
        alignItem: 'center',
        alignContent: "center",
        top: '45%',
        left: '45%',
        transform: 'translate(-45%, -45%)',
    }
};

function Landingpage(props) {
    const { classes } = props;

    return (
        <div>
            <Card container>
                <CardMedia
                    className={classes.landing_root}
                    image={Bgimage}
                />
                <div className={classes.TypographyRoot}>
                    <Typography variant="h2" gutterBottom>
                        {'Test Page'}
                    </Typography>
                    <Typography variant="h2">
                        {'Explore the courses to Log In'}
                    </Typography>
                    <Typography>
                        <p> <br></br> </p>
                    </Typography>
                    <Button variant="contained" size='large' component={Link} to="/Login">
                        Log In
        </Button>
                    <Button variant="contained" color={"#04251E"} size='large' style={{ margin: '10px' }} component={Link} to="/Createaccound">
                        Create an Accound
      </Button>
                    <Button variant="contained" size='large' component={Link} to="/Course">
                        course
        </Button>
                </div>

            </Card>
        </div>
    );
};

Landingpage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landingpage);
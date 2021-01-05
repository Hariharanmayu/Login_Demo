import React from 'react';
import { Grid } from '@material-ui/core';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {Link, Router} from 'react-router-dom';
import Logout from './Logout';

const Styles = {
    root: {
        flexGrow: 1,
        maxWidth: 345,
        margin: "auto",
        alignItems: 'center',
        justify: 'center'

    },
    media: {
        height: 460,
        padding: '0px',
    },

    typo_root: {
        position: 'absolute',
        align: 'center',
        alignContent: "center",
        top: '80%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Card_flip(props) {
    const { classes } = props;

    return (
        <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style = {{marginTop: '40px', marginBottom: '50px' }}
            >
                <Grid container item sm={4} style = {{marginTop: '40px', marginBottom: '50px' }}>
                    <Card container className={classes.root}>
                        <Flippy
                            flipOnHover={false}
                            flipOnClick={true}
                            flipDirection="horizontal"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                background: 'linear-gradient(to left bottom, #B400DB, #3D0052)',

                            }}
                        >
                            <FrontSide>
                                <Card container className={classes.media}>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://www.insidehighered.com/sites/default/server_files/media/elearning-concept-illustration-vector-id641600144.jpg"
                                        title="E learning"
                                    />
                                    <div className = {classes.typo_root}>
                                        <TouchAppIcon style={{ fontSize: 100 }} />
                                    </div>
                                </Card>
                            </FrontSide>

                            <BackSide>
                                <CardContent style={{ color: 'white', alignItems: 'center', justifyContent: 'cenetr'}}>
                                    Start learning here
                        </CardContent>
                            </BackSide>
                        </Flippy>
                    </Card>
                </Grid>
                <Logout/>
            </Grid>
        </div>
    );
};

Card_flip.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Card_flip);

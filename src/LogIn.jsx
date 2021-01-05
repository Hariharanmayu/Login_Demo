import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './Auth';

const styles = {
    margin: {
        margin: "25px",
        topMargin: '100px'
    },

    textField: {
        width: '40ch',
    },
};

function LogIn(props) {
    const { classes } = props;

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    const [values, setValues] = React.useState({
        userName: '',
        password: '',
        showPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function handleSubmit() {
        const data = {
            email: values.userName,
            password: values.password,
        }

        axios.post('https://reqres.in/api/login', data)
            .then(result => {
                if (result.status === 200) {
                    setLoggedIn(true);
                    setAuthTokens(result.data);
                    setLoggedIn(result.data);
                } else {
                    setIsError(true);
                }
            }).catch(e => {
                setIsError(true);
            });
    };

    if (isLoggedIn) {
        return < Redirect to={'/Course'} />
    }

    return (
        <div >
            <Grid container xs={12} alignItems="center" justify="center" direction='column' >

                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">User Name</InputLabel>
                    <Input
                        id="standard-adornment-username"
                        type={values.userName ? 'text' : 'userName'}
                        value={values.userName}
                        onChange={handleChange('userName')}
                    />
                </FormControl>

                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'Password'}
                        value={values.pasword}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div>
                    <Button size='large' style={{ margin: '10px' }} onClick={handleSubmit}>
                        Log In
      </Button>
                    <Button size='large' style={{ margin: '10px' }} component={Link} to="/Createaccound">
                        Create an Accound
      </Button>
                </div>
            </Grid>
        </div>
    );
};

LogIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogIn);
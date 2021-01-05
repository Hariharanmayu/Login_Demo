import React from 'react';
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
import axios from 'axios';

const styles = {
    margin: {
        margin: "25px",
    },

    textField: {
        width: '40ch',
    },
};

function CreateNewAccound(props) {
    const { classes } = props;

    const [values, setValues] = React.useState({
        userName: '',
        NewPassword: '',
        ReTypePassword: '',
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

    const submit = e => {
        e.preventDefault();

        const data = {
            username: values.userName,
            password: values.NewPassword
        }

        axios.post('https://localhost:8000/Createaccound', data).then(
            res => {
                console.log(res)
            }
        ).catch (
            err => {
                console.log(err)
            }
        );
    };

    return (
        <div>
            <Grid container xs={12} alignItems="center" justify="center" direction='column'>

                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">User Name</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.userName ? 'text' : 'userName'}
                        value={values.userName}
                        onChange={handleChange('userName')}
                    />
                </FormControl>

                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">New Password</InputLabel>
                    <Input
                        id="standard-adornment-newpassword"
                        type={values.showPassword ? 'text' : 'NewPassword'}
                        value={values.pasword}
                        onChange={handleChange('NewPassword')}
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

                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="standard-adornment-password">Re-type Password</InputLabel>
                    <Input
                        id="standard-adornment-ReTypePassword"
                        type={values.showPassword ? 'text' : 'ReTypePassword'}
                        value={values.pasword}
                        onChange={handleChange('ReTypePassword')}
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
                    <Button variant="contained" color={"#04251E"} size='large' style={{ margin: '10px' }} onClick = {submit}>
                        Create an Accound
      </Button>
                </div>
            </Grid>
        </div>
    );
};

CreateNewAccound.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateNewAccound);
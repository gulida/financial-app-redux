import React from 'react';
import { Avatar, Button, CssBaseline, TextField,
    FormControlLabel, Checkbox, Link,
    Grid, Container }from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStylesRegistration as useStyles } from "../../../use-styles"

const AuthorizationForm = ({ loggingIn, phone, password, submitted, handleSubmit, handleChange }) => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <div className={'form-group' + (submitted && !phone ? ' has-error' : '')}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="phoneNumber"
                            label="Phone Number"
                            name="phoneNumber"
                            type="number"
                            autoComplete="phone"
                            autoFocus
                            onChange={handleChange}
                            value={phone}
                        />
                        {submitted && !phone &&
                        <div className="help-block">Phone is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            value={password}
                        />
                        {submitted && !password &&
                        <div className="help-block">Password is required</div>
                        }
                    </div>

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    { loggingIn }
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/registration" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default AuthorizationForm
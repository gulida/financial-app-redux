import React from "react";
import { useStylesRegistration as useStyles } from "../../../use-styles"
import { Container, CssBaseline,
    Button, Grid, Avatar, Link,
    TextField } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const RegistrationForm = ({ firstName, lastName, phoneNumber, password, submitted, handleSubmit, handleChange, registering }) => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className={'form-group' + (submitted && !firstName ? ' has-error' : '')}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={handleChange}
                                    value={firstName}
                                />
                                {submitted && !firstName &&
                                <div className="help-block">First Name is required</div>
                                }
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={'form-group' + (submitted && !lastName ? ' has-error' : '')}>
                                <TextField
                                    autoComplete="lname"
                                    name="lastName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    onChange={handleChange}
                                    value={lastName}
                                />
                                {submitted && !lastName &&
                                <div className="help-block">Last Name is required</div>
                                }
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={'form-group' + (submitted && !phoneNumber ? ' has-error' : '')}>
                                <TextField
                                    autoComplete=""
                                    name="phoneNumber"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    type="number"
                                    onChange={handleChange}
                                    value={phoneNumber}
                                />
                                {submitted && !phoneNumber &&
                                <div className="help-block">Phone number is required</div>
                                }
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <TextField
                                    autoComplete="current-password"
                                    name="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    type="password"
                                    onChange={handleChange}
                                    value={password}
                                />
                                {submitted && !password &&
                                <div className="help-block">Password is required</div>
                                }
                            </div>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    {registering}
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/auth" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegistrationForm
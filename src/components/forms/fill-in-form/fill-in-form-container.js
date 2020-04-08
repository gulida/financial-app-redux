import 'date-fns';
import React from 'react';
import {Container, CssBaseline } from '@material-ui/core';
import { useStylesFillIn as useStyles } from "../../../use-styles";


const FillInFormContainer = (props) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <form className={classes.form} noValidate autoComplete="off">
                    {props.children}
                </form>
            </div>
        </Container>

    )
}

export default  FillInFormContainer
import React from "react";
import { Container } from "@material-ui/core";
import { Redirect } from "react-router-dom"
import  MenuIcon  from '@material-ui/icons/Menu';
import Header from "../forms/header";
import Balance from "../containers/balance-container";
import IncomeSpending from "../containers/income-spending-container";
import Footer from "../forms/footer";
import { useStylesHomepage as useStyles } from "../../use-styles"


const HomePage = ({ isLoggedIn }) => {
    const classes = useStyles();

    const center = 'Financial Accounting'
    const right = "LOGOUT"
    const left = <MenuIcon/>

    if (isLoggedIn) {
        return (
            <div>
                <Header center={center} right={right} left={left}/>

                <Container component="main" maxWidth="sm">
                    <div className={classes.paper}>
                        <Balance/>
                        <IncomeSpending/>
                        <Footer/>
                    </div>
                </Container>
            </div>
        )
    }
    return <Redirect to="/auth" />
}

export default HomePage


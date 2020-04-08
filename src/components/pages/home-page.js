import React from "react";
import  MenuIcon  from '@material-ui/icons/Menu';
import Header from "../forms/header";
import Balance from "../main/balance";
import IncomeSpending from "../main/income_spending";
import Footer from "../forms/footer";
import { useStylesHomepage as useStyles } from "../../use-styles"
import { Container } from "@material-ui/core";

const HomePage = () => {
    const classes = useStyles();

    const center = 'Financial Accounting'
    const right = "LOGOUT"
    const left = <MenuIcon/>
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

export default HomePage
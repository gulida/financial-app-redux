import React from "react";
import  MenuIcon  from '@material-ui/icons/Menu';
import Header from "../forms/header";
import Balance from "../main/balance";
import IncomeSpending from "../main/income_spending";
import Footer from "../forms/footer";

const HomePage = () => {
    const center = 'Financial Accounting'
    const right = "LOGOUT"
    const left = <MenuIcon/>
    return (
        <div>
            <Header center={center} right={right} left={left}/>
            <Balance/>
            <IncomeSpending/>
            <Footer/>
        </div>
    )
}

export default HomePage
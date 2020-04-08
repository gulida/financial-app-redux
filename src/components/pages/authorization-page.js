import React from "react";
import { Redirect } from 'react-router-dom'
import Header from "../forms/header";
import AuthorizationForm from "../forms/authorization-form";

const Authorization = ({ isLoggedIn, onLogin }) => {

    if (isLoggedIn){
        return <Redirect to="/" />
    }

    return (
        <div>
            <Header left={" "} right={" "} linkToPage={"/"} center={"Sign In"} />
            <AuthorizationForm isLoggedIn={isLoggedIn} onLogin={onLogin}/>
        </div>
    )
}

export default Authorization
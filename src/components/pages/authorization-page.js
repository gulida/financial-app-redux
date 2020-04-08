import React from "react";
import Header from "../forms/header";
import AuthorizationForm from "../forms/authorization-form";

const Authorization = () => {
    return (
        <div>
            <Header left={" "} right={" "} linkToPage={"/"} center={"Sign In"} />
            <AuthorizationForm/>
        </div>
    )
}

export default Authorization
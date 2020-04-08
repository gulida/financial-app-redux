import React from "react";
import Header from "../forms/header";
import RegistrationForm from "../forms/registration-form";

const Registration = () => {
    return (
        <div>
            <Header center="Sign Up" linkToPage={"/"} right={" "} left={""} />
            <RegistrationForm/>
        </div>
    )
}

export default Registration
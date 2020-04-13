import React, {Component} from "react";
import Header from "../forms/header";
import RegistrationForm from "../forms/registration-form";
import {connect} from "react-redux";
import {userActions} from "../../redux/actions";

class RegistrationPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                phoneNumber: "",
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        const { name, value } = event.target
        const { user } = this.state

        this.setState({
            ...user,
            [name]: value
        })
    }

    handleSubmit (event) {
        event.preventDefault()

        this.setState({
            submitted: true
        })

        const { user } = this.state

        if (user.firstName && user.lastName && user.phoneNumber && user.password) {
            this.props.register(user)
        }
    }

    render() {

        const { registering } = this.props

        const { firstName, lastName, phoneNumber, password } = this.state.user
        const { submitted } = this.state
        return (
            <div>
                <Header center="Sign Up" linkToPage={"/"} right={" "} left={""} />
                <RegistrationForm password={password} submitted={submitted}
                                  firstName={firstName}
                                  lastName={lastName}
                                  phoneNumber={phoneNumber}
                                  registering={registering}/>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        registering: state.regReducer
    }
}

const mapDispatchToProps = {
    register: userActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)
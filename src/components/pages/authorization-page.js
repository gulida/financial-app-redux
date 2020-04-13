import React, {Component} from "react";
import Header from "../forms/header";
import AuthorizationForm from "../forms/authorization-form";
import {userActions} from "../../redux/actions";
import {connect} from "react-redux";

class AuthorizationPage extends Component {

    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            phone: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { phone, password } = this.state;
        if (phone && password) {
            this.props.login(phone, password);
        }
    }
     render() {
         const { loggingIn } = this.props
         const { phone, password, submitted } = this.state;
         return (
             <div>
                 <Header left={" "} right={" "} linkToPage={"/"} center={"Sign In"} />
                 <AuthorizationForm
                     loggingIn={loggingIn}
                     submitted={submitted}
                     phone={phone} password={password} handleChange={this.handleChange()}
                     handleSubmit={this.handleSubmit()}
                 />
             </div>
         )
     }
}

const mapStateToProps = (state) => {
    return {
        loggingIn: state.authReducer
    }
}

const mapDispatchToProps = {
    login: userActions.login,
    logout: userActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage)
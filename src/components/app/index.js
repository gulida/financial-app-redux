import React, {Component} from "react";
import { Router, Switch, Route, Redirect} from "react-router-dom"
import {history} from "../../_helpers";
import PrivateRoute from "../private-route";
import HomePage from "../pages/home-page";
import AuthorizationPage from "../pages/authorization-page";
import RegistrationPage from "../pages/registration-page";
import {connect} from "react-redux";
import {alertActions} from "../../redux/actions";
import NewIncomePage from "../pages/new-income-page";
import NewSpendingPage from "../pages/new-spending-page";
class App extends Component {
    constructor(props) {
        super();

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        })
    }

    render() {
        const { alert } = this.props
        return (
            <div className="jumbotron">
                <div className="container">
                    <div  className="col-sm-8 col-sm-offset-2">
                        {
                            alert.message &&
                            <div className={`alert ${alert.type}`}>
                                {alert.message}
                            </div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute path="/new-income" component={NewIncomePage} />
                                <PrivateRoute path="/new-spending" component={NewSpendingPage}/>
                                <Route path="/login" component={AuthorizationPage} />
                                <Route path="/register" component={RegistrationPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
                /*<div>
                    <Switch>
                        <Route path="/new-income" component={NewIncomePage} />
                        <Route path="/total-income/:id"
                               render={({ match }) => {
                                   const { id } = match.params;
                                   return <CategoryIncomePage id={id} />
                               }}
                        />

                        <Route path="/total-spending/:id"
                               render={({ match }) => {
                                   const { id } = match.params;
                                   return <CategorySpendingPage id={id} />
                               }} />

                    </Switch>
                </div>*/
        )
    }
}
const mapStateToProps = (state) => {
    return {
        alert: state.alertReducer
    }
}
const mapDispatchToProps = {
    clearAlerts: alertActions.clear
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


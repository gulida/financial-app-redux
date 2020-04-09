import React, {Component} from "react";
import { Switch, Route } from "react-router-dom"
import HomePage from "../pages/home-page";
import NewIncomePage from "../pages/new-income-page";
import NewSpendingPage from "../pages/new-spending-page";
import CategoryIncomePage from "../pages/category-income-page";
import MaterialTableDemo from "../example";
import CategorySpendingPage from "../pages/category-spending-page";
import Registration from "../pages/registration-page";
import Authorization from "../pages/authorization-page";


export default class App extends Component {

    state = {
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {

        const { isLoggedIn } = this.state
        console.log(isLoggedIn)
        return (
                <div>
                    <Switch>
                        <Route path="/" exact
                        render={() => (
                            <HomePage isLoggedIn={isLoggedIn} />
                        )}
                        />
                        <Route path="/new-income" component={NewIncomePage} />
                        <Route path="/new-spending" component={NewSpendingPage}/>
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


                        <Route path="/example" component={MaterialTableDemo} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/auth"
                        render={() => (
                            <Authorization isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                        )}/>

                        <Route render={() => <h2>Page not found!!!</h2>} />
                    </Switch>
                </div>
        )
    }
}


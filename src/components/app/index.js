import React from "react";
import { Switch, Route } from "react-router-dom"
import HomePage from "../pages/home-page";
import NewIncomePage from "../pages/new-income-page";
import NewSpendingPage from "../pages/new-spending-page";
import TotalIncomePage from "../pages/total-income-page";
import CategoryIncomePage from "../pages/category-income-page";
import MaterialTableDemo from "../example";
import TotalSpendingPage from "../pages/total-spending-page";
import CategorySpendingPage from "../pages/category-spending-page";
import Registration from "../pages/registration-page";
import Authorization from "../pages/authorization-page";


const App = () => {

    return (
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/new-income" component={NewIncomePage} />
                <Route path="/new-spending" component={NewSpendingPage}/>
                <Route path="/total-income" component={TotalIncomePage} exact />
                <Route path="/total-spending" component={TotalSpendingPage} exact />
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
                <Route path="/auth" component={Authorization} />
            </Switch>
        </div>
    )
}

export default App
import React from "react";
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import ErrorBoundry from "./components/error-boundry";
import { ServiceProvider } from "./components/service-context";

import store from "./redux/store";
import App from "./components/app";
import DataService from "./services/data-services";

// setup fake backend
import { configureFakeBackend} from "./_helpers";

configureFakeBackend()

const dataService = new DataService()



ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ServiceProvider value={dataService}>
                {/*<Router>*/}
                    <App/>
                {/*</Router>*/}
            </ServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)
import React, {Component} from "react";
import withService from "../hoc";
import { connect } from "react-redux"
import {incomeBalanceLoaded, loadedError, spendingBalanceLoaded} from "../../redux/actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import Balance from "./balance";

class BalanceContainer extends Component {

    componentDidMount() {
        const {
            dataService,
            incomeBalanceLoaded,
            spendingBalanceLoaded,
            loadedError
        } = this.props

        dataService.getIncomeTotalAmount()
            .then((incomeBalance) => incomeBalanceLoaded(incomeBalance))
            .catch((err) => loadedError(err))
        dataService.getSpendingTotalAmount()
                .then(spendingBalance => spendingBalanceLoaded(spendingBalance))
            .catch(err => loadedError(err))

    }

    render() {
        const {
            incomeBalance,
            spendingBalance,
            loading,
            error
        } = this.props

        const balance = incomeBalance - spendingBalance

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <Balance balance={balance} />
    }
}

const mapStateToProps = ( state) => {
    return {
        incomeBalance: state.incomeBalance,
        spendingBalance: state.spendingBalance,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    incomeBalanceLoaded,
    spendingBalanceLoaded,
    loadedError
}


export default withService()(
    connect(mapStateToProps, mapDispatchToProps)(BalanceContainer))
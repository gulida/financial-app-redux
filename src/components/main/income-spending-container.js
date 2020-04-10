import React, {Component} from "react";
import withService from "../hoc";
import {connect} from "react-redux";
import {incomeCategoryDataLoaded, loadedError, spendingCategoryDataLoaded} from "../../redux/actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import IncomeSpending from "./income-spending";


class IncomeSpendingContainer extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        const {
            incomeCategory,
            spendingCategory,
            loading,
            error
        } = this.props

        if (loading){
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

       return <IncomeSpending spendingCategory={spendingCategory}
                              incomeCategory={incomeCategory}/>
    }
}

const mapStateToProps = (state) => {
    return {
        incomeCategory: state.incomeCategoryData,
        spendingCategory: state.spendingCategoryData,
        loading: state.loading,
        error: state.error
    }
}


const mapDispatchToProps = ( dispatch, ownProps ) => {
    const { dataService } = ownProps
    return {
        fetchData: () => {
            dataService.getIncomeCategory()
                .then((data) => dispatch(incomeCategoryDataLoaded(data)))
                .catch(err => dispatch(loadedError(err)))

            dataService.getSpendingCategory()
                .then((data) => dispatch(spendingCategoryDataLoaded(data)))
                .catch(err => dispatch(loadedError(err)))

        }
    }
}

export default withService()
(connect(mapStateToProps, mapDispatchToProps)
(IncomeSpendingContainer))
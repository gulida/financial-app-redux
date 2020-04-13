import React, {Component} from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import withService from "../hoc";
import Header from "../forms/header";
import GridContainerForm from "../forms/grid-container-form";
import {connect} from "react-redux";
import {spendingCategoryDataByIdLoaded, totalSpendingAmountById} from "../../redux/actions";
import CategoryTableForm from "../forms/category-table-form";

class CategorySpendingPage extends Component {
    componentDidMount() {
        const { dataService, id } = this.props

        const data = dataService.getSpendingCategoryId(id)
        const total = dataService.getSpendingCategoryIdAmount(id)

        this.props.spendingCategoryDataByIdLoaded(data)
        this.props.totalSpendingAmountById(total)

        console.log("SPENDING DATA: ", data)
        console.log("SPENDING DATA: ", total)

    }

    render() {

        const left = <ArrowBackIosIcon/>
        const linkToPage = "/"

        const { spendingData, total } = this.props
        const spending = spendingData.category
        const center = spendingData.name

        console.log("SPENDING_NAME: ", spending)

        return (
            <div>
                <Header linkToPage={linkToPage} center={center} left={left} right={total}/>

                <GridContainerForm>
                    <CategoryTableForm items={spending} />
                </GridContainerForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        spendingData: state.viewReducer.spendingCategoryDataById,
        total: state.viewReducer.totalSpendingAmountById
    }
}

const mapDispatchToProps = {
    spendingCategoryDataByIdLoaded,
    totalSpendingAmountById
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(CategorySpendingPage))

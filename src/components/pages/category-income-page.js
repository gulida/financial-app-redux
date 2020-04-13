import React, {Component} from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import withService from "../hoc";
import Header from "../forms/header";
import GridContainerForm from "../forms/grid-container-form";
import {connect} from "react-redux";
import {incomeCategoryDataByIdLoaded, totalIncomeAmountById} from "../../redux/actions";
import CategoryTableForm from "../forms/category-table-form/";

class CategoryIncomePage extends Component {
    componentDidMount() {
        const { dataService, id } = this.props

        const data = dataService.getIncomeCategoryId(id)
        const total = dataService.getIncomeCategoryIdAmount(id)


        this.props.incomeCategoryDataByIdLoaded(data)
        this.props.totalIncomeAmountById(total)
    }

    render() {
        const left = <ArrowBackIosIcon/>
        const linkToPage = "/"

        const { incomeData, total } = this.props
        const income = incomeData.category
        const center = incomeData.name

        return (
            <div>
                <Header linkToPage={linkToPage} center={center} left={left} right={total} />
                <GridContainerForm>
                    <CategoryTableForm items={income}/>
                </GridContainerForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        incomeData: state.viewReducer.incomeCategoryDataById,
        total: state.viewReducer.totalIncomeAmountById

    }
}

const mapDispatchToProps = {
    incomeCategoryDataByIdLoaded,
    totalIncomeAmountById
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(CategoryIncomePage))
import React, {Component} from "react";
import { Paper, Table, TableBody, TableContainer } from "@material-ui/core";
import { spendingIconsArr, incomeIconsArr, incomeIconColors, spendingIconColors} from "../../services/icons";
import withService from "../hoc";
import TableRowForm from "../forms/table-form/table-row";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import GridContainerForm from "../forms/grid-container-form";
import {incomeCategoryDataLoaded, spendingCategoryDataLoaded} from "../../redux/actions";


class IncomeSpending extends Component {

    componentDidMount() {
        const { dataService } = this.props

        const incomeData = dataService.getIncomeCategory()
        const spendingData = dataService.getSpendingCategory()


        this.props.incomeCategoryDataLoaded(incomeData)
        this.props.spendingCategoryDataLoaded(spendingData)


    }

    render() {
        const { incomeCategory, spendingCategory } = this.props

        console.log("INCOME___CATERGORY", incomeCategory)

        return (
            <GridContainerForm>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" size="small">
                        <TableBody>
                            {/*{
                                incomeCategory.map(value => (
                                    <TableRowForm amount={value.amount} value={value.value}
                                                  icon={incomeIconsArr.find((item, index) =>
                                                      (index === value.id ? item : ""))}
                                                  color={incomeIconColors.find((item, index) => (
                                                      index === value.id ? item : " "))}
                                                  linkToPage={`/total-income/${value.id}`} key={value.id} currency="сом" />
                                ))
                            }*/}

                            {
                                spendingCategory.map(value => (
                                    <TableRowForm linkToPage={`/total-spending/${value.id}`}
                                                  icon={spendingIconsArr.find((item, index) =>
                                                      (index === value.id ? item : ""))}
                                                  color={spendingIconColors.find((item, index) => (
                                                      index === value.id ? item : " "))}
                                                  value={value.value} amount={ - value.amount} key={value.id} currency={"сом"} />
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </GridContainerForm>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        incomeCategory: state.incomeCategoryData,
        spendingCategory: state.spendingCategoryData
    }
}


const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        spendingCategoryDataLoaded,
        incomeCategoryDataLoaded
    }, dispatch)
}
export default withService()(
    connect(mapStateToProps, mapDispatchToProps)(IncomeSpending))
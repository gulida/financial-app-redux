import React from "react";
import GridContainerForm from "../forms/grid-container-form";
import {Paper, Table, TableBody, TableContainer} from "@material-ui/core";
import TableRowForm from "../forms/table-form/table-row";
import {incomeIconColors, incomeIconsArr, spendingIconColors, spendingIconsArr} from "../../services/icons";

const IncomeSpending = ({ incomeCategory, spendingCategory }) => {
    return (
        <GridContainerForm>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" size="small">
                    <TableBody>
                        {
                            incomeCategory.map(value => (
                                <TableRowForm amount={value.amount} value={value.value}
                                              icon={incomeIconsArr.find((item, index) =>
                                                  (index === value.id ? item : ""))}
                                              color={incomeIconColors.find((item, index) => (
                                                  index === value.id ? item : " "))}
                                              linkToPage={`/total-income/${value.id}`} key={value.id} currency="сом" />
                            ))
                        }

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

export default IncomeSpending
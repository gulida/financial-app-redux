import React from "react";
import {Grid, Paper, Table, TableBody, TableContainer } from "@material-ui/core";
import { spendingIconsArr, incomeIconsArr} from "../../services/icons";
import withService from "../hoc";
import TableRowForm from "../forms/table-form/table-row";

const IncomeSpending = ({ dataService }) => {

    const incomeCategory = dataService.getIncomeCategory()
    const spendingCategory = dataService.getSpendingCategory()

    return (
        <Grid container
              spacing={1}
              justify="center"
              alignItems="center"
              direction="column">
            <Grid item container direction="row">
                <Grid item xs={0} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" size="small">
                            <TableBody>
                                {
                                    incomeCategory.map(value => (
                                        <TableRowForm amount={value.amount} value={value.value} icon={incomeIconsArr.find((item, index) =>
                                            (index === value.id ? item : ""))} linkToPage={`/total-income/${value.id}`} key={value.id} currency="сом" />
                                       ))
                                }

                                {
                                    spendingCategory.map(value => (
                                        <TableRowForm linkToPage={`/total-spending/${value.id}`} icon={spendingIconsArr.find((item, index) =>
                                            (index === value.id ? item : ""))} value={value.value} amount={ - value.amount} key={value.id} currency={"сом"} />
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={0} sm={2}/>
            </Grid>
        </Grid>
    )
}

export default withService()(IncomeSpending)
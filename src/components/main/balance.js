import React from "react";
import { balanceIcon } from '../../services/icons'
import {TableRow, Typography, TableCell, TableContainer, Paper, Table, TableBody } from "@material-ui/core";
import withService from "../hoc";
import GridContainerForm from "../forms/grid-container-form";

const Balance = ({ dataService }) => {

    const amount = dataService.getIncomeTotalAmount() - dataService.getSpendingTotalAmount()
    const icon = balanceIcon

    return (
            <GridContainerForm>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" size="small">
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography style={{ textAlign: "center" }} variant="h4" gutterBottom>
                                        { icon }        Balance
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography style={{ textAlign: "center" }} variant="subtitle2" gutterBottom>
                                        {amount} сом
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </GridContainerForm>
    )
}

export default withService()(Balance)
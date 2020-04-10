import React from "react";
import { balanceIcon } from '../../services/icons'
import GridContainerForm from "../forms/grid-container-form";
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@material-ui/core";

const Balance = ({ balance }) => {
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
                                    {balance} сом
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </GridContainerForm>
    )
}

export default Balance
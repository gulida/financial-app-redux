import React, {Component} from "react";
import { balanceIcon } from '../../services/icons'
import {TableRow, Typography, TableCell, TableContainer, Paper, Table, TableBody } from "@material-ui/core";
import withService from "../hoc";
import GridContainerForm from "../forms/grid-container-form";
import { connect } from "react-redux"

import {balanceLoaded} from "../../redux/actions";

class Balance extends Component {

    componentDidMount() {
        const { dataService } = this.props
        const data = dataService.getIncomeTotalAmount() - dataService.getSpendingTotalAmount()

        this.props.balanceLoaded(data)
    }

    render() {
        const { balance } = this.props
        const icon = balanceIcon

        console.log("++++++++++++++", balance)

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
}

const mapStateToProps = ( state) => {
    return {
        balance: state.balance
    }
}

const mapDispatchToProps = {
    balanceLoaded
}


export default withService()(
    connect(mapStateToProps, mapDispatchToProps)(Balance))
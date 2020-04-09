import React, {Component} from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import withService from "../hoc";
import TableBodyForm from "../forms/table-form/table-body";
import TableHeadForm from "../forms/table-form/table-head";
import TableForm from "../forms/table-form/table-form";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux"
import {termLoaded} from "../../redux/actions";


class Income extends Component {

    componentDidMount() {
        const { dataService } = this.props
        const term = dataService.getTerm()

        this.props.termLoaded(term)
    }

    render() {

        const headTitle = 'Income'
        const currency = 'Som'
        const icon = <AddCircleOutlineIcon color="secondary" />
        const linkToPage = '/new-income'

        const { term } = this.props

        const body = term.map(value => <TableBodyForm title={value} amount={1000} />)
        const head = <TableHeadForm title={headTitle} linkToPage={linkToPage} currency={currency} icon={icon}/>


        return (
            <Grid container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                  direction="column">
                <Grid item container direction="row">
                    <Grid item  xs={0} sm={2}/>
                    <Grid item xs={12} sm={8}>
                        <TableForm tableHead={head} tableBody={body}/>
                    </Grid>
                    <Grid item xs={0} sm={2}/>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = ({ term }) => {
    return { term }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        termLoaded: ( term ) => {
            dispatch(termLoaded)
        }
    }
}

export default withService()(connect(mapStateToProps, mapDispatchToProps)(Income))
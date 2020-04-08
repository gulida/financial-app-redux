import React from "react";
import incomeImg from "./income.png"
import spendingImg from './spending.png'
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TableHeadForm from "../forms/table-form/table-head";
import GridContainerForm from "../forms/grid-container-form";

const Category = () => {
    const income =  <Link to="/total-income">
                        <img style={{ width: 50, height: 50}}
                             className='income'
                             src={incomeImg}
                             alt='income'/>
                        <Typography> Income</Typography>
                    </Link>
    const spending = <Link to="/total-spending">
                        <img style={{ width: 50, height: 50}}
                             className='spending'
                             src={spendingImg}
                             alt='spending' />
                        <Typography>Spending</Typography>
                    </Link>
    return (
        <GridContainerForm>
            <TableHeadForm title={income} currency icon={spending}/>
        </GridContainerForm>
    )
}

export default Category
import {TableCell, TableRow, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";


const TableRowForm = ({ linkToPage, icon, value, amount, currency }) => {
    return (
        <TableRow>
            <TableCell>
                <Typography style={{ textAlign: "left"}} variant="button">
                    <Link style={{textDecoration: 'none'}} to={linkToPage}>
                                                        <span style={{ marginTop: 20, marginRight: 20}}>
                                                            {icon}
                                                        </span>
                        <span style={{ marginBottom: 20 }}>
                                                            {value}
                                                        </span>
                    </Link>
                </Typography>
            </TableCell>
            <TableCell align="right">{amount} {currency}</TableCell>
        </TableRow>
    )
}


export default TableRowForm
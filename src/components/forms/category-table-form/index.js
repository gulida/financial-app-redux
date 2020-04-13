import React from "react";
import {
    Table, TableRow, TableCell,
    Paper, TableContainer, TableHead,
    TableBody, IconButton
} from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


const CategoryTableForm = ({ items, onEdit, onDelete }) => {

    return (
            <TableContainer component={Paper}>

                <Table aria-label="simple table" size="small">

                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Comment</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
{
                        items && items.map( value => (
                        <TableRow>

                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.date}</TableCell>
                            <TableCell>{value.comment}</TableCell>
                            <TableCell>{value.amount}</TableCell>
                            <TableCell>
                                <IconButton onClick={ () => onEdit(value.id)} size="small">
                                <EditOutlinedIcon
                                    style={{ color: "orange" }} />
                                </IconButton>
                                <IconButton onClick={() => onDelete(value.id)} size="small">
                                <DeleteOutlineOutlinedIcon

                                    style={{ color: "darkred" }} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        ))
}
                    </TableBody>

                </Table>

            </TableContainer>

    )
}

export default CategoryTableForm
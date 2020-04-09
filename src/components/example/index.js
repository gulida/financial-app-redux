import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Button, TableRow, Table }from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function MaterialTableDemo() {

    const classes = useStyles()
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ],
        data: [
            { name: 'Mehmet',
                surname: 'Baran',
                birthYear: 1987,
                birthCity: 63
            },
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    });

    return (

        <div>

            <MaterialTable
                columns={state.columns}
                data={state.data}
                options={{
                    actionsColumnIndex: -1,
                    search: false,
                    showTitle: false
                }}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />

            <div className={classes.root}>
                <Button>
                    <IconButton  aria-label="delete">
                        <DeleteIcon /><Typography>Delete</Typography>
                    </IconButton>
                </Button>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <Table>
                        <TableRow>
                            <AlarmIcon />
                        </TableRow>
                        <TableRow>
                            <Typography>Alarm</Typography>
                        </TableRow>
                    </Table>

                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </div>
        </div>

    );
}
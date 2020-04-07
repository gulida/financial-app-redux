import {Grid, Paper, Table, TableBody, TableContainer} from "@material-ui/core";
import React from "react";

const GridContainerForm = (props) => {
    return (
        <Grid container
              spacing={1}
              justify="center"
              alignItems="center"
              direction="column">
            <Grid item container direction="row">
                <Grid item xs="auto" sm={2}/>
                <Grid item xs={12} sm={8}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" size="small">
                            <TableBody>
                                {props.children}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs="auto" sm={2}/>
            </Grid>
        </Grid>
    )
}

export default GridContainerForm


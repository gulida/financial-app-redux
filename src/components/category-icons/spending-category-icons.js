import React from "react";
import { useStylesFillIn as useStyles } from "../../use-styles";
import { Grid, Paper } from "@material-ui/core";
import GridContainerForm from "../forms/grid-container-form";
import { spendingIconsArr } from "../../services/icons";

const SpendingCategoryIcons = ({ handleSelectCategory }) => {

    const classes = useStyles();

    return (
        <GridContainerForm>
            <div className={classes.categoryRoot}>
                <Grid item container spacing={2}>
                    <Grid item xs>
                        <Paper style={{height: "70%", paddingTop: ".2rem", textAlign: "center", textJustify: "center"}} className={classes.paper}>Spending Categories</Paper>
                    </Grid>
                </Grid>
                <Grid item container spacing={2}>
                    <Grid item xs>
                        <Paper onClick={handleSelectCategory} title="Food" className={classes.paper}>
                            {spendingIconsArr[0]}
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper title="House" className={classes.paper}>
                            {spendingIconsArr[1]}
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper  title="Transport" className={classes.paper}>{spendingIconsArr[2]}</Paper>
                    </Grid>
                </Grid>
                <Grid item container spacing={3}>
                    <Grid item xs>
                        <Paper title="Internet" className={classes.paper}>{spendingIconsArr[3]}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper title="Education" className={classes.paper}>{spendingIconsArr[4]}</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper title="Gift" className={classes.paper}>{spendingIconsArr[5]}</Paper>
                    </Grid>
                </Grid>
                <Grid item container spacing={3}>
                    <Grid item xs={6}>
                        <Paper title="Birth Day" className={classes.paper}>{spendingIconsArr[6]}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper title="Phone" className={classes.paper}>{spendingIconsArr[7]}</Paper>
                    </Grid>
                </Grid>
            </div>
        </GridContainerForm>
    )
}


export default SpendingCategoryIcons
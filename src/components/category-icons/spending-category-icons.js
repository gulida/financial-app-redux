import React from "react";
import { useStylesFillIn as useStyles } from "../../use-styles";
import { Grid, Paper, Container } from "@material-ui/core";
import GridContainerForm from "../forms/grid-container-form";
import { spendingIconsArr, spendingIconColors } from "../../services/icons";
import {SpendingCategories} from "../../services/category-service";

const SpendingCategoryIcons = ({ handleSelectCategory }) => {

    const classes = useStyles();


    return (
        <Container component="main" maxWidth="xs">
            <GridContainerForm>
                    <Grid item container spacing={2}>
                        {
                            SpendingCategories.map(value => (
                                <Grid item xs sm={4}>
                                    <Paper onClick={handleSelectCategory} title={value.name} className={classes.paper}>
                                        {spendingIconsArr[value.id]}
                                        <p style={{textAlign: "center", color: `${spendingIconColors[value.id]}`}}>{value.name}</p>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
            </GridContainerForm>
        </Container>
    )
}


export default SpendingCategoryIcons
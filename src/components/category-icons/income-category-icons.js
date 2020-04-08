import React from "react";
import { useStylesFillIn as useStyles } from "../../use-styles";
import { Grid, Paper, Container } from "@material-ui/core";
import GridContainerForm from "../forms/grid-container-form";
import { incomeIconsArr, incomeIconColors } from "../../services/icons";
import { IncomeCategories } from "../../services/category-service";

const IncomeCategoryIcons = ({ handleSelectCategory }) => {

    const classes = useStyles();


    return (
        <Container component="main" maxWidth="xs">
            <GridContainerForm>
                <Grid item container spacing={2}>
                    {
                        IncomeCategories.map(value => (
                            <Grid item xs sm={4}>
                                <Paper onClick={handleSelectCategory} title={value.name} className={classes.paper}>
                                    {incomeIconsArr[value.id]}
                                    <p style={{textAlign: "center", color: `${incomeIconColors[value.id]}`}}>{value.name}</p>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </GridContainerForm>
        </Container>
    )
}


export default IncomeCategoryIcons
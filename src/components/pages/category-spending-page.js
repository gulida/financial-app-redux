import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import withService from "../hoc";
import Header from "../forms/header";
import CategoryTableForm from "../forms/category-table-form";
import GridContainerForm from "../forms/grid-container-form";

const CategorySpendingPage = ({ id, dataService }) => {

    const left = <ArrowBackIosIcon/>
    const linkToPage = "/"
    const data = dataService.getSpendingCategoryId(id)
    const spending = data.category
    const center = data.name
    const  total = dataService.getSpendingCategoryIdAmount(id)

    return (
        <div>
            <Header linkToPage={linkToPage} center={center} left={left} right={total} />

            <GridContainerForm>
                <CategoryTableForm data={spending}/>
            </GridContainerForm>
        </div>
    )
}

export default withService()(CategorySpendingPage)
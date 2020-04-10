import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import withService from "../hoc";
import Header from "../forms/header";
import CategoryTableForm from "../forms/category-table-form";
import GridContainerForm from "../forms/grid-container-form";

const CategoryIncomePage = ({ id, dataService }) => {

    const left = <ArrowBackIosIcon/>
    const linkToPage = "/"
    const data = dataService.getIncomeCategoryId(id)
    const income = data.category
    const center = data.name
    const total = dataService.getIncomeCategoryIdAmount(id)


    return (
        <div>
            <Header linkToPage={linkToPage} center={center} left={left} right={total} />
            <GridContainerForm>
                <CategoryTableForm data={income}/>
            </GridContainerForm>
        </div>
    )
}

export default withService()(CategoryIncomePage)
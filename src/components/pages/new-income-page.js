import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useCategory from "../../hooks/use-category";
import useAmount from "../../hooks/use-amount";
import useSelectDate from "../../hooks/use-select-date";
import useComment from "../../hooks/use-comment";
import Header from "../forms/header";
import {FillInButton, FillInFormContainer, FillInFormGrid} from "../forms/fill-in-form";
import GridContainerForm from "../forms/grid-container-form";
import IncomeCategoryIcons from "../category-icons/income-category-icons";

const NewIncomePage = ({ onAddToIncomeList }) => {

    const { category, chooseCategory } = useCategory()
    const { date, chooseDate } = useSelectDate()
    const {amount, enterAmount} = useAmount()
    const { comment, changeComment } = useComment()
    const center = "New Income"
    const left = <ArrowBackIosIcon/>
    const linkToPage = "/"

    return (
        <div>
            <Header left={left} center={center} right={" "} linkToPage={linkToPage} />
            <GridContainerForm>
                <FillInFormContainer>
                    <FillInFormGrid  amount={amount} date={date}
                                     comment={comment} category={category}
                                     handleCommentChange={changeComment} handleAmountChange={enterAmount}
                                     handleDateChange={chooseDate} handleCategoryChange={chooseCategory}
                    />
                    <IncomeCategoryIcons handleSelectCategory={chooseCategory} />
                    <FillInButton onAddedToList={onAddToIncomeList}/>
                </FillInFormContainer>
            </GridContainerForm>

        </div>

    )
}

export default NewIncomePage
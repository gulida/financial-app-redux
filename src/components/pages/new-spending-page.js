import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useCategory from "../../hooks/use-category";
import useAmount from "../../hooks/use-amount";
import useSelectDate from "../../hooks/use-select-date";
import { FillInButton, FillInFormContainer, FillInFormGrid } from "../forms/fill-in-form";
import useComment from "../../hooks/use-comment";
import Header from "../forms/header";
import SpendingCategoryIcons from "../category-icons/spending-category-icons";
import GridContainerForm from "../forms/grid-container-form";

const NewSpendingPage = ({onAddedToList}) => {

    const { category, chooseCategory } = useCategory()
    const { date, chooseDate } = useSelectDate()
    const {amount, enterAmount} = useAmount()
    const { comment, changeComment } = useComment()
    const center = "New Spending"
    const left = <ArrowBackIosIcon/>
    const linkToPage = "/"

    return (
        <div>
            <Header left={left} center={center}  linkToPage={linkToPage} />
            <GridContainerForm>
                <FillInFormContainer>
                    <FillInFormGrid category={category} amount={amount}
                                    handleCategoryChange={chooseCategory}
                                    handleDateChange={chooseDate}
                                    handleAmountChange={enterAmount}
                                    handleCommentChange={changeComment}
                                    comment={comment} date={date}
                    />
                    <SpendingCategoryIcons handleSelectCategory={chooseCategory}/>
                    <FillInButton onAddedToList={() => onAddedToList({ category,
                    amount, date, comment})}/>
                </FillInFormContainer>
            </GridContainerForm>
        </div>
    )
}

export default NewSpendingPage
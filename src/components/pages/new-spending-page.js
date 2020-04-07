import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CheckIcon from '@material-ui/icons/Check';
import useCategory from "../../hooks/use-category";
import useAmount from "../../hooks/use-amount";
import useSelectDate from "../../hooks/use-select-date";
import FillInForm from "../forms/fill-in-form";
import useComment from "../../hooks/use-comment";
import withService from "../hoc";
import Header from "../forms/header";

const NewSpendingPage = ({ dataService }) => {
    const categories = dataService.getSpendingCategory()

    const { category, chooseCategory } = useCategory()
    const { date, chooseDate } = useSelectDate()
    const {amount, enterAmount} = useAmount()
    const { comment, changeComment } = useComment()
    const center = "New Spending"
    const left = <ArrowBackIosIcon/>
    const right = <CheckIcon/>
    const linkToPage = "/"

    return (
        <div>
            <Header left={left} center={center} right={right} linkToPage={linkToPage} />
            <FillInForm amount={amount} date={date}
                        comment={comment} category={category}
                        handleCommentChange={changeComment} handleAmountChange={enterAmount}
                        handleDateChange={chooseDate} handleCategoryChange={chooseCategory}
                        categories={categories}
            />
        </div>

    )
}

export default withService()(NewSpendingPage)
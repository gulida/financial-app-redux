import {
    BALANCE_LOADED,
    INCOME_CATEGORY_DATA_LOADED,
    SPENDING_CATEGORY_DATA_LOADED,
    TERM_LOADED
} from "../constants";


const balanceLoaded = ( balance ) => {
    return {
        type: BALANCE_LOADED,
        payload: balance
    }
}

const termLoaded = ( term ) => {
    return {
        type: TERM_LOADED,
        payload: term
    }
}

const incomeCategoryDataLoaded = (incomeCategory) => {
    return {
        type: INCOME_CATEGORY_DATA_LOADED,
        payload: incomeCategory
    }
}

const spendingCategoryDataLoaded = (spendingCategory) => {
    return {
        type: SPENDING_CATEGORY_DATA_LOADED,
        payload: spendingCategory
    }
}

export {
    balanceLoaded,
    termLoaded,
    incomeCategoryDataLoaded,
    spendingCategoryDataLoaded
}
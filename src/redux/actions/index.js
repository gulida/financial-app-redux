import {
    INCOME_BALANCE_LOADED,
    INCOME_CATEGORY_DATA_LOADED, LOADED_ERROR, SPENDING_BALANCE_LOADED,
    SPENDING_CATEGORY_DATA_LOADED,
    TERM_LOADED
} from "../constants";

const loadedError = ( error ) => {
    return {
        type: LOADED_ERROR,
        payload: error
    }
}

const incomeBalanceLoaded = ( balance ) => {
    return {
        type: INCOME_BALANCE_LOADED,
        payload: balance
    }
}

const spendingBalanceLoaded = ( balance ) => {
    return {
        type: SPENDING_BALANCE_LOADED,
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
    loadedError,
    termLoaded,
    incomeBalanceLoaded,
    spendingBalanceLoaded,
    incomeCategoryDataLoaded,
    spendingCategoryDataLoaded
}
import {
    INCOME_BALANCE_LOADED, INCOME_CATEGORY_DATA_BY_ID,
    INCOME_CATEGORY_DATA_LOADED, LOADED_ERROR, SPENDING_BALANCE_LOADED, SPENDING_CATEGORY_DATA_BY_ID,
    SPENDING_CATEGORY_DATA_LOADED,
    TERM_LOADED, TOTAL_INCOME_AMOUNT_BY_ID, TOTAL_SPENDING_AMOUNT_BY_ID,
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

const incomeCategoryDataByIdLoaded = (data) => {
    return {
        type: INCOME_CATEGORY_DATA_BY_ID,
        payload: data
    }
}

const spendingCategoryDataByIdLoaded = (data) => {
    return {
        type: SPENDING_CATEGORY_DATA_BY_ID,
        payload: data
    }
}

const totalIncomeAmountById = (amount) => {
    return {
        type: TOTAL_INCOME_AMOUNT_BY_ID,
        payload: amount
    }
}

const totalSpendingAmountById = (amount) => {
    return {
        type: TOTAL_SPENDING_AMOUNT_BY_ID,
        payload: amount
    }
}

export {
    loadedError,
    termLoaded,
    incomeBalanceLoaded,
    spendingBalanceLoaded,
    incomeCategoryDataLoaded,
    spendingCategoryDataLoaded,
    incomeCategoryDataByIdLoaded,
    spendingCategoryDataByIdLoaded,
    totalIncomeAmountById,
    totalSpendingAmountById
}
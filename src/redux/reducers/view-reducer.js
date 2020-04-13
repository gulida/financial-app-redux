import {
    INCOME_BALANCE_LOADED,
    SPENDING_BALANCE_LOADED,
    INCOME_CATEGORY_DATA_LOADED,
    SPENDING_CATEGORY_DATA_LOADED,
    TERM_LOADED,
    LOADED_ERROR,
    INCOME_CATEGORY_DATA_BY_ID,
    SPENDING_CATEGORY_DATA_BY_ID,
    TOTAL_INCOME_AMOUNT_BY_ID,
    TOTAL_SPENDING_AMOUNT_BY_ID,
    REMOVE_FROM_TABLE,
    REMOVE_INCOME_FROM_TABLE,
    REMOVE_SPENDING_FROM_TABLE
} from "../constants";

const initialState = {
    loading: true,
    error: null,
    incomeBalance: 0,
    spendingBalance: 0,
    incomeCategoryData: [],
    spendingCategoryData: [],
    incomeCategoryDataById: [],
    spendingCategoryDataById: [],
    totalIncomeAmountById: 0,
    totalSpendingAmountById: 0,
    term: [],
}

const viewReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case INCOME_BALANCE_LOADED:
            return {
                ...state,
                incomeBalance: action.payload,
                loading: false
            }
        case SPENDING_BALANCE_LOADED:
            return {
                ...state,
                spendingBalance: action.payload,
                loading: false
            }
        case TERM_LOADED:
            return {
                ...state,
                term: action.payload,
                loading: false
            }
        case INCOME_CATEGORY_DATA_LOADED:
            return {
                ...state,
                incomeCategoryData: action.payload,
                loading: false
            }
        case SPENDING_CATEGORY_DATA_LOADED:
            return {
                ...state,
                spendingCategoryData: action.payload,
                loading: false
            }
        case INCOME_CATEGORY_DATA_BY_ID:
            return {
                ...state,
                loading: false,
                incomeCategoryDataById: action.payload
            }
        case SPENDING_CATEGORY_DATA_BY_ID:
            return {
                ...state,
                loading: false,
                spendingCategoryDataById: action.payload
            }
        case TOTAL_INCOME_AMOUNT_BY_ID:
            return {
                ...state,
                loading: false,
                totalIncomeAmountById: action.payload
            }
        case TOTAL_SPENDING_AMOUNT_BY_ID:
            return {
                ...state,
                loading: false,
                totalSpendingAmountById: action.payload
            }
        case REMOVE_INCOME_FROM_TABLE:
        {
            return {
                ...state,
                loading: false,

            }
        }
        case REMOVE_SPENDING_FROM_TABLE:
        {
            return {
                ...state,
                loading: false,
            }
        }
        case LOADED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default viewReducer
import {
    INCOME_BALANCE_LOADED,
    SPENDING_BALANCE_LOADED,
    INCOME_CATEGORY_DATA_LOADED,
    SPENDING_CATEGORY_DATA_LOADED,
    TERM_LOADED, LOADED_ERROR
} from "../constants";

const initialState = {
    loading: true,
    error: null,
    incomeBalance: 0,
    spendingBalance: 0,
    incomeCategoryData: [],
    spendingCategoryData: [],
    term: [],
}

const reducer = ( state = initialState, action ) => {

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

export default reducer
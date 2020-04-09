import {
    BALANCE_LOADED,
    INCOME_CATEGORY_DATA_LOADED,
    SPENDING_CATEGORY_DATA_LOADED,
    TERM_LOADED
} from "../constants";

const initialState = {
    balance: 0,
    term: [],
    incomeCategoryData: [],
    spendingCategoryData: []
}

const reducer = ( state = initialState, action ) => {

    switch (action.type) {
        case BALANCE_LOADED:
            return {
                balance: action.payload
            }
        case TERM_LOADED:
            return {
                term: action.payload
            }
        case INCOME_CATEGORY_DATA_LOADED:
            return {
                incomeCategoryData: action.payload
            }
        case SPENDING_CATEGORY_DATA_LOADED:
            return {
                spendingCategoryData: action.payload
            }
        default:
            return state;
    }
}

export default reducer
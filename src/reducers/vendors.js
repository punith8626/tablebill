import * as actiontype from "../actions/types";

const initialState = {
    vendorList: []
}
const vendorReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actiontype.VENDORLIST: {
            return {
                ...state,
                vendorList: action.payload
            };
        }
        case actiontype.CREATEVENDOR:{
            return {
                ...state,
                vendorList: [...state.vendorList , [...action.payload]]
            };
        }
        case actiontype.UPDATEVENDOR:{
            return {
                ...state,
                vendorList: [...state.vendorList , [...action.payload]]
            };
        }

        default:
            return state;
    }
}
export default vendorReducer;
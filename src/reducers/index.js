import { combineReducers } from 'redux';
import vendorReducer from './vendors';


export default combineReducers({
    vendors: vendorReducer,
    
})

import * as api from '../services/index';
import { VENDORLIST,CREATEVENDOR,UPDATEVENDOR } from './types';


export const getVendors = () => async (dispatch) => {
    try {
        const { data } = await api.getVendorList();
        dispatch({ type: VENDORLIST, payload:data });        
    } catch (error) {
        
    }
}

export const createEditVendor = (id,vendorInfo,router) => async (dispatch) => {
    try {
        if(id !== null){
            const { data } = await api.updateVendor(id,vendorInfo);
            const action = { type: UPDATEVENDOR, payload: data };
            dispatch(action);
            
        }else{
            const { data } = await api.createVendor(vendorInfo);
            const action = { type: CREATEVENDOR, payload: data };
            dispatch(action);
        
        }
        
    } catch (error) {
        //
    }
}
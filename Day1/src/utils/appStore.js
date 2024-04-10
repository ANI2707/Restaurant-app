import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
    //this reducer contains all the reducers present in the created slices of the store 
    //basically it is the whole objects of reducers
    
    reducer:{
        cart:cartReducer
    }
})

export default appStore;
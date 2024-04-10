import {createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',//first property is name of the slice
    initialState:{//second property is initial state
        items:[],
    },
    reducers:{
        //Reducer function takes two parameters
        addItem:(state,action)=>{
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state) =>{
            state.items.length = 0;//[]
        },
    },

});

//We are writing this syntax bcoz we are returning object above as cartSlice

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
import {createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',//first property is name of the slice
    initialState:{//second property is initial state
        items:[],
    },
    reducers:{
        //Reducer function takes two parameters
        addItem:(state,action)=>{
            //Redux Toolkit uses immer BTS
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        //originalState=["pizza"]
        clearCart:(state) =>{
            //RTK - either mutate the existing state or return a new state
            // state.items.length = 0;//originalState=[]

            return {items:[]};//this new [] will be replaced inside originalState=[]
        },
    },

});

//We are writing this syntax bcoz we are returning object above as cartSlice

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
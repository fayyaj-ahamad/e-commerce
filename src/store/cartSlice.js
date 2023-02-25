import { createSlice } from "@reduxjs/toolkit";

// let items = localStorage.getItem("cart") >= 0  ? JSON.parse(localStorage.getItem("cart")):[];
const initialState={
    cart: [],
    cartQuantity:0,
    totalBalance:0
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

        // add data from cart

        add_to_cart(state, action){
            let itemIndex = state.cart.findIndex((item)=> item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cart[itemIndex].cartQuantity += 1;
            }else{
                const cartProduct = {...action.payload, cartQuantity:1};
                state.cart.push(cartProduct);
            }        
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },

        // remove data from to cart
        remove_to_cart(state, action){
            let removeCart = state.cart.filter((item)=> item.id !== action.payload.id);
            state.cart = removeCart;
        },

        // decrement Quanitity
        decrementQuantity(state,action){
            let itemIndex = state.cart.findIndex((cartIndex)=> cartIndex.id === action.payload.id)
            if(state.cart[itemIndex].cartQuantity >= 1){
                state.cart[itemIndex].cartQuantity -= 1
            }else if(state.cart[itemIndex].cartQuantity === 1){
                  let dataRemove = state.cart.filter((item)=> item.id !== action.payload.id);
                  state.cart = dataRemove;
            }
        },

        incrementQuantity(state,action){
            let cartItem = state.cart.findIndex((cartIndex)=> cartIndex.id === action.payload.id)
            if(state.cart[cartItem].cartQuantity >= 1){
                state.cart[cartItem].cartQuantity += 1;
            }
        }
    }
})

export const {add_to_cart, remove_to_cart, decrementQuantity, incrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;

import { createReducer } from "@reduxjs/toolkit";
import { changeCity } from "./action";

const initialState = {
    city: 'Paris',
    offers: [],
    favoritesOffers: [],
    offerInfo: undefined,
    offersNearby: undefined,
    isLoading: false,
    error: null,
    isUpdate: false,
}
const reducer = createReducer(initialState, (builder)=>{
    builder.addCase(changeCity, (state, action)=> {
        state.city = action.payload
    })
})
export default reducer
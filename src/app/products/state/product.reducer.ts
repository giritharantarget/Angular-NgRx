import { createAction, createReducer, on } from "@ngrx/store";

export const productReducer = createReducer(
    {showProductCode:true },
    on(createAction('[Product] Toggle Product code'),state => {
        console.log('Original State ::' + JSON.stringify(state));
        return {
            ... state ,
            showProductCode : !state.showProductCode
        }
    })
)
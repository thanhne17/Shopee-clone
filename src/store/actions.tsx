import {ADD_TO_CART, DECREASE_QUALITY, GET_CART, INCREASE_QUALITY, REMOVE_CART} from "./contans"

export const addToCart = (payload: any) => ({
    type: ADD_TO_CART,
    payload
})

export const getCart = () => {
    return {
        type: GET_CART,
    }
}

export const increase = (payload: any) => {
    return {
        type: INCREASE_QUALITY,
        payload
    }
}

export const decrease = (payload: any) => {
    return {
        type: DECREASE_QUALITY,
        payload
    }
}

export const remove = (payload: any) => {
    return {
        type: REMOVE_CART,
        payload
    }
}
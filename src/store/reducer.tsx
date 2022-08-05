import { ADD_TO_CART, GET_CART, REMOVE_CART } from "./contans";
import { getCarts, addCart, removeCart, updateQuality } from "../api/cart"

const initState = {
    cart: [],
    addCarts: {}
}

const getCart = async () => {
    const { data } = await getCarts();
    const cartUser = data.filter(item => item.uId == JSON.parse(localStorage.getItem("user")).id);
    initState.cart = cartUser
}
getCart()

function reducer(state: any, action: any) {
    switch (action.type) {
        case ADD_TO_CART:
            const checkCart = async () => {
                const { data } = await getCarts();
                const cartUser = data.filter(item => item.uId == JSON.parse(localStorage.getItem("user")).id);
                const cartLength = cartUser.filter(item => item.idProduct == action.payload.idProduct)
                if (cartLength.length >= 1) {
                    updateQuality(cartLength[0].id, {
                        idProduct: action.payload.idProduct,
                        uId: action.payload.uId,
                        sl: cartLength[0].sl + 1,
                        name: action.payload.name,
                        price: action.payload.price,
                        image: action.payload.image
                    })
                }
                else {
                    addCart(action.payload)
                }
            }
            checkCart()
            break;

        case REMOVE_CART:
            const removeCarts = async () => {
                if (window.confirm("Xoa??")) {
                    const result = await removeCart(action.payload)
                    console.log(result);
                }
            }
            removeCarts()
            break;
        case GET_CART:
            const getCart = async () => {
                const { data } = await getCarts();
                const cartUser = data.filter(item => item.uId == JSON.parse(localStorage.getItem("user")).id);
                initState.cart = cartUser
            }
            getCart()
            break;


        default:
            break;
    }
}

export { initState }
export default reducer
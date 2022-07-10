import intance from "./intance"

const addCart = (data) => {
    const url = "/cart";
    return intance.post(url, data)
}

const getCarts = () => {
    const url = "/cart";
    return intance.get(url)
}


export { addCart, getCarts }
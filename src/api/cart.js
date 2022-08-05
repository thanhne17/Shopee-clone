import intance from "./intance"

const addCart = (data) => {
    const url = "/cart";
    return intance.post(url, data)
}

const getCarts = () => {
    const url = "/cart";
    return intance.get(url)
}

const removeCart = (id) => {
    const url = `/cart/${id}`;
    return intance.delete(url)
}

const updateQuality = (id, data) => {
    const url = `/cart/${id}`;
    return intance.put(url, data)
}


export { addCart, getCarts, removeCart, updateQuality }
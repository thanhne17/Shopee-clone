import intance from "./intance"

export const getRecomentProducts = () => {
    const url = "/recoment_products";
    return intance.get(url)
}

export const getRecomentProduct = (id) => {
    const url = "/recoment_products/"+id;
    return intance.get(url)
}
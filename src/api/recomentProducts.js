import intance from "./intance"

export const getRecomentProducts = () => {
    const url = "/recoment_products";
    return intance.get(url)
}
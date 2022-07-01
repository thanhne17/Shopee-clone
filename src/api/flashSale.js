import intance from "./intance"

export const getFlashSale = () => {
    const url = "/flash_sale";
    return intance.get(url)
}
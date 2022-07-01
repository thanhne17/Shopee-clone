import intance from "./intance"

export const getCategories = () => {
    const url = "/category_list";
    return intance.get(url)
}
import intance from "./intance"

export const getImgs = ()=>{
    const url = "/imgSlideCategories/1?_embed=imgSlides";
    return intance.get(url)
};

export const getHotWord = ()=>{
    const url = "/imgSlideCategories/2?_embed=imgSlides";
    return intance.get(url)
};

export const getHotCategories = ()=>{
    const url = "/hotCategories";
    return intance.get(url)
};


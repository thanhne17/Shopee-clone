import React, { useEffect, useRef, useState } from 'react'
import { getImgs, getHotWord, getHotCategories } from "../api/homeSlider"
import { smoothSrolling } from "../utils"

type Props = {}

const BannerHotword = (props: Props) => {

    const sliderRef = useRef();
    const ItemRef = useRef();

    const handScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        

        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            smoothSrolling(
                sliderRef.current,
                300,
                ItemRef.current.clientWidth,
                sliderRef.current.scrollLeft)
        }
    };

    const handScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            smoothSrolling(
                sliderRef.current,
                300,
                -ItemRef.current.clientWidth,
                sliderRef.current.scrollLeft)
        }
    };

    const [slide, setSlide] = useState([])
    const [hitWord, setHitWord] = useState([])
    const [hitCategories, setHitCategories] = useState([])


    useEffect(() => {
        const getImg = async () => {
            const { data } = await getImgs();
            setSlide(data.imgSlides)

            const result = await getHotWord();
            setHitWord(result.data.imgSlides)

            const reult2 = await getHotCategories()
            setHitCategories(reult2.data)
        };
        getImg()
    }, [])
        
    return (
        <div className=" grids">
            <div className="flex my-12 h-[235px]" draggable="false">
                <div ref={sliderRef} draggable="true" className="flex overflow-hidden h-full ">
                    {slide.map((item, index) => {
                        return (
                            <div
                                ref={ItemRef}
                                className="item grow basis-[100%] shrink-0 relative"
                                key={index}
                            >
                                <img className='rounded w-[795px] select-none h-[235px] w-full' src={item.imgUrl} alt="" draggable="false" />
                                <div className="p-4 cursor-pointer duration-300 active:scale-125 hover:translate-x-[10px] absolute top-[50%] translate-y-[-50%] right-[10px]">
                                    <i onClick={handScrollRight} className="opacity-20 hover:opacity-100 text-5xl text-white fa-solid fa-circle-arrow-right"></i>
                                </div>
                                <div className="p-4 cursor-pointer duration-300 active:scale-125 hover:translate-x-[-10px] absolute top-[50%] translate-y-[-50%] left-[10px]">
                                    <i onClick={handScrollLeft} className="opacity-20 hover:opacity-100 text-5xl text-white fa-solid fa-circle-arrow-left"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="ml-2 h-full flex flex-col">
                    {hitWord.map((item, index)=>{
                        return (
                            <a className='first-of-type:mb-2 w-[400px] h-[118px] block bg-cover bg-center rounded'  style={{backgroundImage: `url(${item.imgUrl})`}} key={index} href="">
                                {/* <img className='rounded' src={item.imgUrl} alt="" /> */}
                            </a>
                        )
                    })}
                </div>
            </div>

            <div className="flex justify-around mb-12">
                {hitCategories.map((item, index)=>{
                    return (
                        <a href="" key={index} className="flex flex-col justify-center items-center hover:translate-y-[-5px] duration-100">
                            <img className='w-[45px] h-[45px] ' src={item.imgUrl} alt="" />
                            <p className='text-xl'>{item.name}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default BannerHotword
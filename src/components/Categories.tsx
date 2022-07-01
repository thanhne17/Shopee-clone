import React, { useEffect, useRef, useState } from 'react'
import { getCategories } from "../api/category"
import { smoothSrolling } from "../utils"


type Props = {}

const Categories = (props: Props) => {
    const [cate, setCate] = useState([]);

    const sliderRef = useRef();
    const ItemRef = useRef();

    const handScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            smoothSrolling(
                sliderRef.current,
                400,
                ItemRef.current.clientWidth * 9,
                sliderRef.current.scrollLeft)
        }
    };

    const handScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            smoothSrolling(
                sliderRef.current,
                400,
                -ItemRef.current.clientWidth * 9,
                sliderRef.current.scrollLeft)
        }
    };

    useEffect(() => {
        const getCates = async () => {
            const { data } = await getCategories();
            setCate(data)
        };
        getCates()
    }, [])

    return (
        <section className=' bg-[#f5f5f5] pt-10'>
            <div className="grids">
                <div className="pb-10">
                    <img src="https://cf.shopee.vn/file/0ed0d80b26a4a8dc8f8652679f37604d" alt="" />
                </div>
                <header className='p-8 bg-white'>
                    <h1 className="text-[#757575] text-3xl">DANH MỤC</h1>
                </header>
                <div className="relative">
                    <div ref={sliderRef} className='flex overflow-hidden'>
                        {cate.map((item, index) => {
                            return (
                                <div
                                    ref={ItemRef}
                                    className='h-[150px] w-[125px] block grow shrink-0 color-[#000000de] border border-b-[#0000000d] border-r-[#0000000d] text-center bg-[#fff] block duration-300'
                                    key={index}
                                >
                                    <a className="no-underline" href="">
                                        <img src={item.image} alt="" />
                                        <h3>{item.name}</h3>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    <div className="absolute top-[50%] right-[0] translate-y-[-50%] bg-white">
                        <i onClick={handScrollRight} className="fa-solid fa-caret-right p-4 text-5xl"></i>
                    </div>
                    <div className="absolute top-[50%] left-[0] translate-y-[-50%] bg-white">
                        <i onClick={handScrollLeft} className="fa-solid fa-caret-left p-4 text-5xl"></i>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
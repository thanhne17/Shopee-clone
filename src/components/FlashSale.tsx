import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getFlashSale } from "../api/flashSale";
import { smoothSrolling } from "../utils";

type Props = {}

const FlashSale = (props: Props) => {
    const [flashSale, setFlashSale] = useState([])

    const sliderRef = useRef();
    const ItemRef = useRef();

    const handScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            smoothSrolling(
                sliderRef.current,
                300,
                ItemRef.current.clientWidth * 4,
                sliderRef.current.scrollLeft)
        }
    };

    const handScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            smoothSrolling(
                sliderRef.current,
                300,
                -ItemRef.current.clientWidth * 4,
                sliderRef.current.scrollLeft)
        }
    };

    useEffect(() => {
        const getFlashSales = async () => {
            const { data } = await getFlashSale();
            setFlashSale(data)
        }
        getFlashSales()
    }, [])

    return (
        <div className='bg-[#f5f5f5] pt-10'>
            <div className="grids bg-white p-6">
                <header className='flex justify-between items-center'>
                    <img className='w-[114px]' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e538967ec12cb5caa.png" alt="" />
                    <NavLink to="/" className="text-[orange] text-2xl" >Xem tất cả <i className="fa-solid fa-chevron-right"></i></NavLink>
                </header>
                <main className='relative'>
                    <div ref={sliderRef} className='flex overflow-hidden'>
                        {flashSale.map((item, index) => {
                            return (
                                <NavLink to="#" ref={ItemRef} className="w-[200px] h-[240px] bg-contain bg-center grow shrink-0 m-6" key={index} style={{ backgroundImage: `url(${item.image})` }}>
                                    <img className='w-full h-full' src={item.promo_overlay_image} alt="" />
                                </NavLink>
                            )
                        })}
                    </div>
                    <div className="absolute top-[50%] right-[0] translate-y-[-50%] bg-white">
                        <i onClick={handScrollRight} className="fa-solid fa-caret-right p-4 text-5xl"></i>
                    </div>
                    <div className="absolute top-[50%] left-[0] translate-y-[-50%] bg-white">
                        <i onClick={handScrollLeft} className="fa-solid fa-caret-left p-4 text-5xl"></i>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default FlashSale
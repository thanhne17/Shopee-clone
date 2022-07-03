import React, { useEffect, useState } from 'react'
import { getRecomentProducts } from "../api/recomentProducts"


type Props = {}

const RecomentProducts = (props: Props) => {
    const [recoment, setRecoment] = useState([]);

    useEffect(() => {
        const getRecoment = async () => {
            const { data } = await getRecomentProducts()
            setRecoment(data)
        }
        getRecoment()
    }, [])

    return (
        <div className='bg-[#f5f5f5] pt-10'>
            <div className="grids">
                <header className='bg-[#ffffff] p-8'>
                    <h3 className='text-3xl text-[#ee4d2d] font-semibold'>GỢI Ý HÔM NAY</h3>
                </header>
                <div className="grid grid-cols-6 gap-4">
                    {recoment.map((item, index) => {
                        return (
                            <a href='#' className="bg-white border hover:border-[#ee4d2d] hover:translate-y-[-3px] duration-100  bg-contain bg-center bg-no-repeat" key={index}>
                                <div className='  bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${item.image})` }}>
                                    <img src={item.promo_overlay_image} alt="" />
                                </div>
                                <div className="p-4">
                                    <p className='text-xl truncate'>{item.name}</p>
                                    <div className="flex justify-between items-center pt-8">
                                        <p className='text-[#ee4d2d] text-2xl'><span className='text-sm'>đ</span> {item.price / 10000}</p>
                                        <p className='text-[#757575]'>Đã bán: {item.stock}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RecomentProducts
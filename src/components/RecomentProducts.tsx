import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getRecomentProducts } from "../api/recomentProducts"


type Props = {}

const RecomentProducts = (props: Props) => {
    const [recoment, setRecoment] = useState([]);

    useEffect(() => {
        const getRecoment = async (callback:any) => {
            const { data } = await getRecomentProducts()
            for (let i = 0; i < data.length; i++) {
                const insertComman = callback(data[i].price/100000)
                data[i].price = insertComman                
            }
            setRecoment(data)
        }
        getRecoment(addCommas)
        function addCommas(nStr:any) {
            nStr += '';
            let x = nStr.split('.');
            let x1 = x[0];
            let x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + '.' + '$2');
            }
            
            return x1 + x2;
        }
    }, [])

    return (
        <div className='bg-[#f5f5f5] py-10'>
            <div className="grids">
                <header className='bg-[#ffffff] p-8 sticky top-[120px] z-10'>
                    <h3 className='text-3xl text-[#ee4d2d] font-semibold'>GỢI Ý HÔM NAY</h3>
                </header>
                <div className="grid grid-cols-6 gap-4">
                    {recoment.map((item, index) => {
                        return (
                            <NavLink to={`/${item.id}`} className="bg-white border hover:border-[#ee4d2d] hover:translate-y-[-3px] duration-100  bg-contain bg-center bg-no-repeat" key={index}>
                                <div className='  bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${item.image})` }}>
                                    <img src={item.promo_overlay_image} alt="" />
                                </div>
                                <div className="p-4">
                                    <p className='text-xl truncate'>{item.name}</p>
                                    <div className="flex justify-between items-center pt-8">
                                        <p className='text-[#ee4d2d] text-2xl'><span className='text-sm'>đ</span> {item.price}</p>
                                        <p className='text-[#757575]'>Đã bán: {item.stock}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RecomentProducts
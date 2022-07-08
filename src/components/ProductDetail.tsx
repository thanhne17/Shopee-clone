import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecomentProduct } from "../api/recomentProducts"

type Props = {}

const ProductDetail = (props: Props) => {
    const [product, setProduct] = useState();
    const [quality, setQuality] = useState(1)

    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getRecomentProduct(id);
            setProduct(data)
        }
        getProduct();
    }, [])

    function addCommas(nStr: any) {
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

    const onHandlerClick = (e) => {
        if (e === "plus") {
            setQuality(pre => pre + 1)
        }
        else {
            if (quality == 1) {
                minusRef.setAttribute("disable", "")
            }
            else setQuality(pre => pre - 1)
        }

    }

    const plusRef = useRef();
    const minusRef = useRef();

    return (
        <div className='bg-[#f5f5f5]'>
            <div className="grids mx-auto pt-12">
                <div className="bg-white flex p-8">
                    <div className="basis-1/3 flex flex-col">
                        <img src={product?.image} alt="" />
                        <div className="flex w-full py-4 basis-4/5">
                            <div className="">
                                <img className='' src={product?.image} alt="" />
                            </div>
                            <div className="pl-4">
                                <img className='' src={product?.image} alt="" />
                            </div>
                            <div className="pl-4">
                                <img className='' src={product?.image} alt="" />
                            </div>
                            <div className="pl-4">
                                <img className='' src={product?.image} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="pl-10 flex-1">
                        <header>
                            <h3 className='text-3xl'>{product?.name}</h3>
                            <p className='text-2xl py-5'><span className='footer_separate relative pr-2'>{product?.stock} <span className='text-[#bbb]'> Đánh giá</span></span> <span className=''>{product?.stock} <span className='text-[#bbb]'>Đã bán</span></span></p>
                        </header>
                        <div className='text-5xl text-[#ee4d2d] bg-[#f5f5f5] p-8 flex items-center '>
                            <p className='text-[#ccc] text-2xl pr-8'><del>đ{addCommas(product?.price_before_discount / 100000)}</del></p>
                            <p className='px-8'><span className='text-xl'>đ </span>{addCommas(product?.price / 100000)}</p>
                            <p className='text-xl text-white p-[1px] rounded font-semibold bg-[#f53d2d]'>{product?.discount} Giảm </p>
                        </div>

                        <div className="py-12 flex items-center">
                            <p className='min-w-[100px] text-2xl text-[#757575] font-semibold'>Số lượng</p>
                            <div className="border h-[32px] flex items-center">
                                <i onClick={() => {
                                    onHandlerClick("plus")
                                }}
                                    className="fa-solid fa-plus border-r cursor-pointer h-full flex items-center justify-center text-[14px] w-[32px]">

                                </i>
                                <input className='w-[50px] text-[16px] cursor-text text-center' type="text" role={'spinbutton'} onChange={(e) => {
                                    setQuality(e.target.value)
                                }} value={quality} />
                                <i ref={minusRef} onClick={() => {
                                    onHandlerClick("minus")
                                }}
                                    className="fa-solid fa-minus cursor-pointer border-l h-full flex items-center justify-center text-[14px] w-[32px]">
                                </i>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="text-[#ee4d2d] rounded mr-5 text-2xl bg-[#ff57221a] px-[20px] h-[48px] min-w-[80px] max-w-[250px] flex items-center border border-[#ee4d2d] cursor-pointer hover:bg-[#ffc5b22e]">
                                <i className="fa-solid fa-cart-plus pr-3"></i>
                                <span>Thêm vào giỏ hàng</span>
                            </div>

                            <p className='bg-[#ee4d2d] text-2xl text-white rounded px-[20px] h-[48px] min-w-[80px] max-w-[250px] flex items-center border border-[#ee4d2d] hover:bg-[#f05d40] cursor-pointer'>Mua ngay</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grids mx-auto py-12">
                <div className="bg-white p-12 flex">
                    <div className="flex items-center shop relative basis-2/5">
                        <a className='' href="">
                            <div className="w-[6rem] h-[6rem]">
                                <img className='rounded-full border border-2' src={product?.brand_sale_brand_custom_logo} alt="" />
                            </div>
                        </a>
                        <div className="pl-4">
                            <p className='text-2xl font-semibold'>{product?.brand_name}</p>
                            <span>Online 7 phút trước</span>
                            <p className='text-[#ee4d2d] rounded mr-5 text-xl bg-[#ff57221a] mt-4 px-[20px] h-[48px] min-w-[80px] max-w-[250px] flex items-center border border-[#ee4d2d] cursor-pointer hover:bg-[#ffc5b22e]'><i className="fa-solid fa-shop pr-3"></i>Xem shop</p>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-3 place-items-center">
                        <p className='text-xl text-[#757575] font-normal'>Đánh giá: <span className='text-[#ee4d2d]'>{product?.stock}</span></p>
                        <p className='text-xl text-[#757575] font-normal'>Tỉ lệ phản hồi: <span className='text-[#ee4d2d]'>95%</span></p>
                        <p className='text-xl text-[#757575] font-normal'>Tham gia: <span className='text-[#ee4d2d]'>17 tháng trước</span></p>
                        <p className='text-xl text-[#757575] font-normal'>Sản phẩm: <span className='text-[#ee4d2d]'>61</span></p>
                        <p className='text-xl text-[#757575] font-normal'>Thời gian phản hồi: <span className='text-[#ee4d2d]'>Trong vài giờ</span></p>
                        <p className='text-xl text-[#757575] font-normal'>Người theo dõi: <span className='text-[#ee4d2d]'>44.4k</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail
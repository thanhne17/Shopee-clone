import React, { useEffect, useRef, useState } from 'react'
import { useStore, action } from "../../store"

type Props = {}

const UserCart = (props: Props) => {
  const [state, dispatch] = useStore()
  const [quality, setQuality] = useState(1)
  const [cart, setCart] = useState([])
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
  useEffect(() => {
    // dispatch(action.getCart())
    setCart(state.cart)
  }, [])
  
  const plusRef = useRef();
  const minusRef = useRef();
  return (
    <div className="">
      <div className="mx-auto max-w-[1170px] flex">
        <div className="w-full z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
          <div className="w-full pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white">
            <p className="text-5xl font-bold leading-10 text-gray-800 pt-3">Giỏ hàng</p>
            {
              cart?.map((item, index) => {
                return (
                  <div key={index} className="md:flex items-center py-8 border-t border-b border-gray-200">
                    <div className="h-full w-1/4">
                      <img src={item?.image} className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="md:pl-3 md:w-3/4 w-full">
                      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">{item?.name}</p>
                        <div className="py-12 flex items-center">
                          <div className="border h-[32px] flex items-center">
                            <i onClick={() => {
                              onHandlerClick("plus")
                            }}
                              className="border-r cursor-pointer h-full flex items-center justify-center text-[14px] w-[32px]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </i>
                            <input min={1} max={9999} className='w-[50px] text-[16px] cursor-text text-center' type="text" role={'spinbutton'} 
                            onChange={(e) => {
                              setQuality(e.target.value)
                            }} value={quality} />
                            <i ref={minusRef} onClick={() => {
                              onHandlerClick("minus")
                            }}
                              className="cursor-pointer border-l h-full flex items-center justify-center text-[14px] w-[32px]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                              </svg>
                            </i>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                      <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                      <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                          <p onClick={()=>{
                            dispatch(action.remove(`${item.id}`))
                          }} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">{item?.price}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="xl:w-1/3 md:w-2/3 xl:w-2/3 bg-gray-100 h-[500px] mt-8 sticky top-[150px]">
          <div className="py-8 px-2">
            <div>
              <p className="text-2xl font-bold leading-9 text-gray-800">Tóm tắt đơn hàng</p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800">Tạm tính</p>
                <p className="text-base leading-none text-gray-800">$9,000</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Khuyễn mãi</p>
                <p className="text-base leading-none text-gray-800">$30</p>
              </div>
            </div>
            <div className="absolute bottom-[10px] left-[10px] right-[10px] border-t">
              <div className="flex items-center pb-6 justify-between ">
                <p className="text-2xl leading-normal text-gray-800">Tổng cộng</p>
                <p className="text-2xl font-bold leading-normal text-right text-red-800">$10,240</p>
              </div>
              <a href="/checkout">
                <p className="text-base block text-center leading-none w-full py-4 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Thanh toán</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCart
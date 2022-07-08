import React from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  const user = JSON.parse(localStorage.getItem("user"))

    return (
        <div className="w-[180px] px-8">
            <header className='flex items-center border-b py-6'>
                <div className="h-[50px] w-[50px]"><img className='rounded-full' src={user?.image} alt="" /></div>
                <div className="pl-4">
                    <p className='font-medium text-xl'>{user?.name}</p>
                    <NavLink to="/user/profile" className='text-[#aaa] text-lg'><i className="fa-regular fa-pen-to-square"></i> Sửa hồ sơ</NavLink>
                </div>
            </header>
            <div className="pt-10">
                <ul>
                    <li className='py-4'>
                        <NavLink to="/user/profile" className="text-2xl" ><i className="fa-solid pr-3 fa-user"></i>Tài khoản của tôi</NavLink>
                    </li>
                    <li className='py-4'>
                        <NavLink to="/user/cart" className="text-2xl" ><i className="fa-solid pr-3 fa-cart-shopping"></i>Đơn mua</NavLink>
                    </li>
                    <li className='py-4'>
                        <NavLink to="/user/noti" className="text-2xl" ><i className="fa-solid pr-3 fa-bell"></i>Thông báo</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Aside
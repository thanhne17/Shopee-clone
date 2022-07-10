import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    const profileMenu = useRef()

    const handlerClick = (e) => {
        if (profileMenu.current.classList.contains("h-[40px]")) {
            profileMenu.current.classList.remove("h-[40px]")
            profileMenu.current.classList.toggle("h-[120px]")
        }
        else {
            profileMenu.current.classList.toggle("h-[120px]")
            profileMenu.current.classList.add("h-[40px]")
        }
    }

    const closeManu = () => {
        profileMenu.current.classList.remove("h-[120px]")
        profileMenu.current.classList.add("h-[40px]")
    }


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
                    <li ref={profileMenu} className='py-4 relative overflow-hidden h-[40px] duration-300' onClick={() => { handlerClick() }}>
                        <NavLink to="/user/profile" className="text-2xl cursor-pointer" ><i className="fa-solid pr-3 fa-user"></i>Tài khoản của tôi</NavLink>
                        <ul className='pt-4'>
                            <li onClick={(e) => {
                                e.stopPropagation()
                            }} className='py-4 text-xl'><NavLink to="/user/profile" >Hồ sơ</NavLink></li>
                            <li onClick={(e) => {
                                e.stopPropagation()
                            }} className='py-4 text-xl'><NavLink to="/user/change-password" >Đổi mật khẩu</NavLink></li>
                        </ul>
                    </li>
                    <li onClick={() =>{closeManu()}} className='py-4'>
                        <NavLink to="/user/cart" className="text-2xl" ><i className="fa-solid pr-3 fa-cart-shopping"></i>Đơn mua</NavLink>
                    </li>
                    <li onClick={() =>{closeManu()}} className='py-4'>
                        <NavLink to="/user/noti" className="text-2xl" ><i className="fa-solid pr-3 fa-bell"></i>Thông báo</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Aside
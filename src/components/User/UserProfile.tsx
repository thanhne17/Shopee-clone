import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Aside from './Aside'

type Props = {}

const user = JSON.parse(localStorage.getItem("user"))

const UserProfile = (props: Props) => {
    return (
        <div className=''>
            <header className='border-b pb-8'>
                <h3 className='text-3xl'>Hồ Sơ Của Tôi</h3>
                <p className='text-2xl'>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </header>
            <div className="pt-12 flex">
                <form className="flex-1 pr-4 border-r">
                    <div className="flex items-center pb-10">
                        <span className='w-[120px] text-2xl text-[#aaa] pr-4 '>Tên Đăng Nhập</span>
                        <input className='flex-1 indent-2.5 border h-[40px]' type="text" />
                    </div>
                    <div className="flex items-center pb-10">
                        <span className='w-[120px] text-2xl text-[#aaa] pr-4 '>Email</span>
                        <input className='flex-1 indent-2.5 border h-[40px]' type="text" />
                    </div>
                    <div className="flex items-center pb-10">
                        <span className='w-[120px] text-2xl text-[#aaa] pr-4 '>Số Điện Thoại</span>
                        <input className='flex-1 indent-2.5 border h-[40px]' type="text" />
                    </div>
                    <div className="flex items-center pb-10">
                        <span className='w-[120px] text-2xl text-[#aaa] pr-4 '>Tên Đăng Nhập</span>
                        <input className='flex-1 indent-2.5 border h-[40px]' type="text" />
                    </div>

                    <button className='text-[#ee4d2d] rounded mr-5 text-xl bg-[#ff57221a] mt-4 px-[20px] h-[48px] max-w-[250px] flex items-center border border-[#ee4d2d] cursor-pointer hover:bg-[#ffc5b22e]'>Lưu</button>
                </form>
                <div className="basis-1/3 flex items-center justify-center flex-col">
                    <img className='rounded-full' src={user.image} alt="" />
                    <div>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UserProfile
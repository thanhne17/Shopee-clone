import { EmailAuthProvider, getAuth, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/index';

type Props = {}

const ChangePassword = (props: Props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit: SubmitHandler = (data) => {
        console.log(data);
        
        const user = auth.currentUser;

        const authd = getAuth();


        let credential = EmailAuthProvider.credential(
            authd.currentUser.email,
            data.currentPassword
        );

        reauthenticateWithCredential(auth.currentUser, credential)
            .then(result => {
                updatePassword(user, data.password).then(() => {
                }).catch((error) => {
                    console.log(1);
                })
            })

    }

    return (
        <div>
            <div className=''>
                <header className='border-b pb-8'>
                    <h3 className='text-3xl'>Đổi mật khẩu</h3>
                    <p className='text-2xl'>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
                </header>
                <div className="pt-12 flex">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 pr-4 border-r">
                        <div className="flex items-center pb-10">
                            <span className='w-[120px] text-2xl text-[#aaa] pr-4 '>Mật khẩu hiện tại</span>
                            <input {...register("currentPassword")} className='flex-1 indent-2.5 border h-[40px]' type="password" />
                        </div>
                        <div className="flex items-center pb-10">
                            <span className='w-[120px] text-2xl text-[#aaa] pr-4 '>Mật khẩu mới</span>
                            <input {...register("password")} className='flex-1 indent-2.5 border h-[40px]' type="password" />
                        </div>
                        <div className="flex items-center pb-10">
                            <span className='w-[120px] text-2xl text-[#aaa] pr-4 '>Xác nhận mật khẩu</span>
                            <input className='flex-1 indent-2.5 border h-[40px]' type="password" />
                        </div>

                        <button className='text-[#fff] rounded mr-5 text-xl bg-[#ee4d2d] mt-4 px-[20px] h-[48px] px-10 flex items-center cursor-pointer'>Lưu</button>
                    </form>
                    <div className="basis-1/3 flex items-center flex-col">
                        <NavLink className="text-2xl text-[#333]" to="#" >Quên mật khẩu?</NavLink>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ChangePassword
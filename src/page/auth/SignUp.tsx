import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="p-10 bg-white rounded-md w-[400px] h-[430px]">
      <header>
        <h3 className='text-4xl'>Đăng kí</h3>
      </header>
      <form action="">
        <div className="w-full py-10">
          <input className='w-full h-[40px] border border-[#ddd] pl-3 text-xl' type="number" placeholder='Số điện thoại' />
        </div>
        <button className='bg-[#ee4d2d] text-center w-full h-[40px] text-white text-xl'>TIẾP THEO</button>
      </form>
      <p className='text-center bg-white text-xl z-10 px-[5px] py-10 text-[#dbdbdb] relative before:content-[""] before:z-[-1] before:absolute before:w-[60px] before:bg-white before:h-[5px] before:top-[50%] before:left-[50%] after:z-[-2] before:translate-y-[-50%] before:translate-x-[-50%] after:content-[""] after:absolute after:top-[50%] after:left-0 after:w-full after:h-[1px] after:bg-[#dbdbdb] after:translate-y-[-50%]'>HOẶC</p>

      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center border border-[#dbdbdb] text-center p-4 min-w-[160px]">
          <i className="fa-brands fa-facebook text-4xl text-[#1877f2]"></i> <span className='text-2xl pl-2'>Facebook</span>
        </div>
        <div className="flex justify-center items-center border border-[#dbdbdb] text-center p-4 min-w-[160px]">
          <i className="fa-brands fa-google text-4xl text-[#ea4335]"></i> <span className='text-2xl pl-2'>Google</span>
        </div>
      </div>

      <div className="py-10">
        <p className='text-center text-xl'>Bằng việc đăng kí, bạn đã đồng ý với Shopee về <NavLink className="text-[#ea4335]" to="#">Điều khoản dịch vụ</NavLink> & <NavLink className="text-[#ea4335]" to="#">Chính sách bảo mật</NavLink></p>
      </div>

      <div className="">
        <p className='text-2xl text-[#dbdbdb] text-center'>Bạn đã có tài khoản? <NavLink className="text-2xl text-[#ea4335]" to="/auth/signin">Đăng nhập</NavLink></p>
      </div>
    </div>
  )
}

export default SignUp
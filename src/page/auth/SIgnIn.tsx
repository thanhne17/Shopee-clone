import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { async } from '@firebase/util'
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
// import Title from 'antd/lib/skeleton/Title'
import { useNavigate, useLocation } from 'react-router-dom'
import { auth } from '../../firebase/index'

type Props = {}

const SIgnIn = (props: Props) => {

  const navigate = useNavigate();


  const handlerLoginFacebook = () => {
    const prodider = new FacebookAuthProvider();
    signInWithPopup(auth, prodider).then((result) => {
      console.log(result);

      const id = result.user.uid;
      const name = result.user.displayName;
      const email = result.user.email;
      const image = result.user.photoURL;
      // console.log(result.user);

      localStorage.setItem("user", JSON.stringify({ id, name, email, image }));
    }).then(() => {

      navigate("/");
    }).catch((error) => {
      console.log(error);

    });
  }
  const handlerLoginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      const id = result.user.uid;
      const name = result.user.displayName;
      const email = result.user.email;
      const image = result.user.photoURL;
      console.log(result.user);

      localStorage.setItem("user", JSON.stringify({ id, name, email, image }));

      console.log(result);
      

    }).then(() => {

      navigate("/");
    })
      .catch((error) => {
        console.log(error);

      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is empty");

    } else {
      console.log("unauthorized");

    }

  })

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/")

    }

  }, [])

  return (
    <div className="p-10 bg-white rounded-md w-[400px] h-[430px]">
      <header>
        <h3 className='text-4xl'>Đăng nhập</h3>
      </header>
      <form action="">
        <div className="w-full py-10">
          <input className='w-full h-[40px] border border-[#ddd] pl-3 text-xl' type="number" placeholder='Số điện thoại' />
        </div>
        <div className="w-full pb-10">
          <input className='w-full h-[40px] border border-[#ddd] pl-3 text-xl' type="password" placeholder='Nhập mật khẩu' />
        </div>
        <button className='bg-[#ee4d2d] text-center w-full h-[40px] text-white text-xl'>TIẾP THEO</button>
      </form>
      <p className='text-center bg-white text-xl z-10 px-[5px] py-10 text-[#dbdbdb] relative before:content-[""] before:z-[-1] before:absolute before:w-[60px] before:bg-white before:h-[5px] before:top-[50%] before:left-[50%] after:z-[-2] before:translate-y-[-50%] before:translate-x-[-50%] after:content-[""] after:absolute after:top-[50%] after:left-0 after:w-full after:h-[1px] after:bg-[#dbdbdb] after:translate-y-[-50%]'>HOẶC</p>

      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center border border-[#dbdbdb] text-center p-4 min-w-[160px]">
          <i className="fa-brands fa-facebook text-4xl text-[#1877f2]"></i> <span className='text-2xl pl-2'>Facebook</span>
        </div>
        <div className="flex justify-center items-center border border-[#dbdbdb] text-center p-4 min-w-[160px] hover:bg-[#dbdbdb] duration-300 cursor-pointer" onClick={handlerLoginGoogle}>
          <i className="fa-brands fa-google text-4xl text-[#ea4335]"></i> <span className='text-2xl pl-2'>Google</span>
        </div>
      </div>
      <div className="">
        <p className='text-2xl text-[#dbdbdb] text-center pt-10'>Bạn mới biết đến Shoppe? <NavLink className="text-2xl text-[#ea4335]" to="/auth/signup">Đăng kí</NavLink></p>
      </div>
    </div>
  )
}

export default SIgnIn
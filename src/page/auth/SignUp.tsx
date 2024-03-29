import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { async } from '@firebase/util'
import { auth } from '../../firebase/index'
import { NavLink, useNavigate } from 'react-router-dom'

type typeInput = {
  email:String,
  password: String
}

const SignUp = (props: Props) => {

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

      localStorage.setItem("user", JSON.stringify({ id, name, email, image }));

    }).then(() => {

      navigate("/");
    })
      .catch((error) => {
        console.log(error);

      });
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log("user is empty");
    } else {
      // console.log("unauthorized");

    }

  })
  const { register, handleSubmit } = useForm<PropsPostAdd>();
  const onSubmit: SubmitHandler<typeInput> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className="p-10 bg-white rounded-md w-[400px] min-h-[430px]">
      <header>
        <h3 className='text-4xl'>Đăng kí</h3>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full py-10">
          <input {...register("email")} className='w-full h-[40px] border border-[#ddd] pl-3 text-xl' type="text" placeholder='Email' />
        </div>
        <div className="w-full pb-10">
          <input {...register("password")} className='w-full h-[40px] border border-[#ddd] pl-3 text-xl' type="password" placeholder='Password' />
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
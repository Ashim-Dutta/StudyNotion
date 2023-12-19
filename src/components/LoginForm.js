import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


 const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({email:"",password:""});

    const [showPassword,setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value

            }
        ))
    }

    function submitHandler(event){

            event.preventDefault();
            setIsLoggedIn(true);
            toast.success("Login Successfully");
            navigate("/deshboard");

    }

  return (
   <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-500'>*</sup></p>
            <input type='email' required value={formData.email} name='email' onChange={changeHandler} placeholder='Entre Your Email id'
            className='bg-gray-200 rounded-[0.5rem] text-slate-500 w-full p-[12px]'></input>
        </label>


        <label className='w-full relative'>
            <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-500'>*</sup></p>
            <input type={showPassword ? ("text"):("password")} name='password' required value={formData.password} onChange={changeHandler} placeholder='Entre Your Password'
            className='bg-gray-200 rounded-[0.5rem] text-slate-500 w-full p-[12px]'></input>
            <span onClick={()=>setShowPassword((prev)=>!prev)} className='absolute right-3 top-[40px] cursor-pointer'>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#6368C3'/>):(<AiOutlineEye fontSize={24} fill='#6368C3'/>)}
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-500 text-end'>
                    Forgot Password
                </p>
            </Link>
        </label>

            <button className='bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>
                Sign in
            </button>

   </form>
  )
}

export default LoginForm;
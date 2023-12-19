import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData,setFormData] = useState ({firstname:"",lastname:"",email:"",password:"",confirmPassword:""})

    const [showPassword,setShowPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");


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
            if(formData.password != formData.confirmPassword){
                toast.error("Password not match");
                return;
            }

            setIsLoggedIn(true);
            toast.success("Account Created");
            navigate("/deshboard");
    }

  return (
    <div>

        {/* student instructor tab */}

        <div className='p-1 gap-x-1 my-4 rounded-full flex  bg-slate-500 max-w-max'>
            <button onClick={()=> setAccountType("student")} className={`${accountType === "student"
            ?
                "bg-white text-black"
            :"bg-slate-500 text-black"} py-2 px-5 rounded-full transition-all duration-200`}>
                Student
            </button>

            <button onClick={()=> setAccountType("instructor")}
             className={`${accountType === "instructor"
            ?
                "bg-white text-black"
            :"bg-slate-500 text-black"} py-2 px-5 rounded-full transition-all duration-200`}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>

            <div className='flex gap-x-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-500'>*</sup></p>
                    <input
                     className='bg-gray-200 rounded-[0.5rem] text-slate-500 w-full p-[12px]'
                        required
                        type='text'
                        name='firstname'
                        onChange={changeHandler}
                        placeholder='Enter first name'
                        value={formData.firstname}
                    />
                </label>


                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>last Name <sup className='text-pink-500'>*</sup></p>
                    <input
                     className='bg-gray-200 rounded-[0.5rem] text-slate-500 w-full p-[12px]'
                        required
                        type='text'
                        name='lastname'
                        onChange={changeHandler}
                        placeholder='Enter last name'
                        value={formData.lastname}
                    />
                </label>
             </div>

             <label className='w-full relative'>
                    <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-500'>*</sup></p>
                    <input
                     className='bg-gray-200 rounded-[0.5rem] text-slate-500 w-full p-[12px]'
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter  Email Address'
                        value={formData.email}
                    />
                </label>

                <div className='flex gap-x-4'>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'> Create Password <sup className='text-pink-500'>*</sup></p>
                    <input
                     className='bg-gray-200 rounded-[0.5rem] text-slate-500 w-full p-[12px]'
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                    />
                    <span onClick={()=>setShowPassword((prev)=>!prev)} className='absolute right-3 top-[40px] cursor-pointer'>
                             {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'> Confirm Password <sup className='text-pink-500'>*</sup></p>
                    <input
                     className='bg-gray-200 rounded-[0.5rem] text-slate-500 w-full p-[12px]'
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmpassword}
                    />
                    <span onClick={()=>setShowPassword((prev)=>!prev)} className='absolute right-3 top-[40px] cursor-pointer'>
                             {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                    </span>
                </label>


                </div>

                <button className=' w-full bg-yellow-500 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-4'>Create Account</button>


        </form>

    </div>
  )
}
export default SignupForm;
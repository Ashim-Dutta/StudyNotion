import React from 'react'
import { Link } from 'react-router-dom';
import s from '../assets/s.jpg';
import toast from 'react-hot-toast';

 const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>


     
      <div className='flex justify-evenly'>
      
            <img src={s} alt='logo' width={80} height={80} loading='lazy'/>
           <span><h1 className='text-white mt-3 ml-[-20px] font-bold'>StudyNotion</h1></span>        
       
      </div>
       

        <nav className='flex'>

            <ul className='flex gap-x-6 text-white'>

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="#">About</Link>
                </li>

                <li>
                    <Link to="#">Contact</Link>
                </li>

            </ul>

        </nav>


        <div className='flex items-center gap-x-4 '>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-black-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
                </Link>
            }

            {!isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-black-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>signup</button>
                </Link>
            }

            {isLoggedIn &&
                <Link to="/">
                    <button onClick={ ()=>{

                        setIsLoggedIn(false);
                        toast.success("Logged out")

                    }} className='bg-black-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>logout</button>
                </Link>
            }

            {isLoggedIn &&
                <Link to="/deshboard">
                    <button className='bg-black-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Deshboard</button>
                </Link>
            }
        </div>


    </div>
  )
}

export default Navbar;
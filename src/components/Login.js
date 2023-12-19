import React from 'react'
import loginImg from "../assets/study.jpeg"
import Templet from './Templet'

const Login = ({setIsLoggedIn}) => {
  return (
    <Templet
      title="Welcome Back"
      desc1="Build Skill for today , tomorrow an dbeyond"
      desc2="Education to future-proof your career"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  
  )
}

export default Login;
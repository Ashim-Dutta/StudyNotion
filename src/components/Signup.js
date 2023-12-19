import React from 'react'
import signupImg from "../assets/study.jpeg"
import Templet from './Templet'

 const Signup = ({setIsLoggedIn}) => {
  return (

    <Templet
      title="Join the million learning to code with StudyNotion for free"
      desc1="Build Skill for today , tomorrow an dbeyond"
      desc2="Education to future-proof your career"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
   
  )
}

export default Signup;
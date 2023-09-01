import React from 'react'
import Form from '../components/Form';

const Signup = () => {
    const onSubmit = async(e)=>{
        if(e.target.password.value === e.target.confirmpassword.value){
            const response = await fetch(`http://localhost:8000/auth/register`,{method:"POST", mode: "cors",headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username:e.target.username.value,
                password:e.target.password.value
              }),
            })
            const res = await response.json();
            return res
        }
        else{
            return {
                message:"Password Incorrect!"
            }
        }
    }
  return (
    <Form Type="Register" onSubmit={onSubmit}/>
  )
}

export default Signup

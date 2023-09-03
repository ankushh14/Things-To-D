import React from 'react';
import Form from '../components/Form';

const Login = () => {
  const onSubmit = async(e)=>{
    const response = await fetch(`${process.env.BACKEND_API}/auth/login`,{method:"POST",mode:"cors",headers:{"Content-Type": "application/json",},
    body:JSON.stringify({
      username:e.target.username.value,
      password:e.target.password.value
    })
    })
    const data = await response.json();
    return data;
  }
  return (
    <Form Type="Login" onSubmit={onSubmit}/>
  )
}

export default Login

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'; 
import Loader from './Loader/Loader';

const Form = ({Type, onSubmit}) => {
    const [info,setInfo] = useState("Welcome to Things-To-D");
    const [cookies,setCookies] = useCookies(["things_token"]);
    const [loader,setLoader] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoader(true);
        const retmessage = await onSubmit(e);
        setLoader(false);
        setInfo(retmessage.message);
        if(retmessage.message === "User Succesfully Registered!!"){
            navigate("/auth/login");
        }
        if(retmessage.message === "Login Succesfull!"){
            setCookies("things_token",retmessage.token);
            window.localStorage.setItem("userID",retmessage.userID);
            navigate("/todo");
        }
    }
  return (
    <div className='w-full flex justify-center pt-12'>
      <div className="sign-up-div  w-[90%] lg:w-[40%] border rounded-sm shadow-sm shadow-black">
        <div className="heading w-full p-4 mb-2 flex items-center">
            {
                Type === "Register"?(
                    <h1 className="text-2xl pl-4">Signup Here</h1>
                ):(
                    <h1 className="text-2xl pl-4">Login</h1>
                )
            }
        </div>
        <form className='flex flex-col space-y-8' onSubmit={handleSubmit}>
            <div className="email-div w-full flex justify-center relative">
                <input type="email" name="username" id="username" className='p-2 rounded-sm w-[90%] border border-black' placeholder='Email address' autoComplete = 'off'/>
            </div>
            <div className="password-div w-full flex justify-center">
                <input type="password" name="password" id="password" className='p-2 rounded-sm w-[90%]  border border-black' placeholder='Password' autoComplete = 'off'/>
            </div>
            {
                Type === "Register"? (
                    <div className="password-div w-full flex justify-center">
                        <input type="password" name="confirmpassword" id="confirmpassword" className='p-2 rounded-sm w-[90%]  border border-black' placeholder='Confirm Password'/>
                    </div>
                ):(
                    <></>
                )
            }
            <div className="submit-div w-full flex justify-center">
                <input type="submit" value={Type} className=' cursor-pointer bg-blue-500 text-white w-[90%] p-2 rounded-sm hover:bg-blue-700 transition-colors duration-500'/>
            </div>
            <div className="alertMessages w-full flex justify-center">
                <h1 className=" text-xl">{info}</h1>
            </div>
            <div className="loader-div w-full flex justify-center">
                {
                   loader && <Loader/>
                }
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form

import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const [cookies,setCookies] = useCookies(["things_token"]);
    const navigate = useNavigate();
    const handleClicklog = ()=>{
        setNav(!nav);
        setCookies("things_token","");
        window.localStorage.removeItem("userID");
        navigate("/");
    }
    return (
        <>
           <nav className="nav-bar flex bg-neutral-400 items-center p-4 justify-between z-50">
            <h1 className="text-xl text-gray-900 ">Things-To-D</h1>
            <div className="lines1 flex flex-col space-y-2  lg:hidden" onClick={()=>setNav(!nav)}>
                <span className="bar border w-6 border-black"></span>
                <span className="bar border w-6 border-black"></span>
                </div>
            <div className={`first-nav absolute ${nav?`top-0`:`-top-[1000px]`} z-50 h-full w-full left-0 bg-neutral-400 flex items-center flex-col space-y-12 py-4 transition-all duration-500 lg:transition-none lg:duration-0 lg:w-[88%] lg:justify-between lg:flex-row lg:py-0 lg:static lg:space-y-0 lg:h-auto`}>
            <div className="bars w-full flex my-2 lg:hidden justify-end">
                <div className="lines2 flex flex-col space-y-2 px-4 lg:hidden" onClick={()=>setNav(!nav)}>
                <span className="bar border w-6 border-black rotate-45 translate-y-1"></span>
                <span className="bar border w-6 border-black -rotate-45 -translate-y-[0.3rem]"></span>
                </div>
            </div>
            {
                cookies.things_token?(
                    <ul className='nav-list flex flex-col space-y-8 border-y-2 border-neutral-600 py-4 lg:flex-row lg:space-x-3 lg:space-y-0 w-[90%] text-center lg:border-none lg:py-0 lg:w-auto'>  
                        <NavLink to="/" className="cursor-pointer hover:text-slate-800 transition-colors duration-500" onClick={()=>setNav(!nav)}>Home</NavLink>
                        <NavLink to="/todo" className="cursor-pointer hover:text-slate-800 transition-colors duration-500" onClick={()=>setNav(!nav)}>ToDo</NavLink>
                    </ul>
                ):(
                    <div className='w-[90%]'></div>
                )
            }
            
            
            <div className="nav-btns flex space-y-4 w-[90%] lg:space-x-4 flex-col justify-center lg:w-auto lg:flex-row lg:space-y-0 ">
                {
                    cookies.things_token?(
                        <button className='p-2 px-4 bg-red-600 text-white text-center rounded-lg cursor-pointer hover:bg-red-500 transition-colors duration-500' onClick={handleClicklog}>LogOut</button>
                    ):(<>
                        <NavLink to="/auth/signup" className='p-2 px-4 bg-white rounded-lg text-center cursor-pointer border hover:bg-slate-200 transition-colors duration-500' onClick={()=>setNav(!nav)}>SignUp</NavLink>
                        <NavLink to="/auth/login" className='p-2 px-4 bg-black text-white text-center rounded-lg cursor-pointer border hover:bg-slate-700 transition-colors duration-500' onClick={()=>setNav(!nav)}>Login</NavLink>
                        </>
                    )
                }
                
                
            </div>
            </div>
           </nav>
        </>
    )
}

export default Navbar

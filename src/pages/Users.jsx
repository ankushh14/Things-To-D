import React, { useEffect, useState } from 'react'
import Userrow from '../components/Userrow';
import "./userRow/userrow.css"

const Users = () => {
    const [user, setUser] = useState([]);
    const [number, setnumber] = useState(0);
    useEffect(() => {
        fetchUsers();
    }, [])
    const fetchUsers = async () => {
        const users = await fetch(`${process.env.BACKEND_API}/auth/getAllUsers`, { method: "GET", mode: "cors" });
        const data = await users.json();
        setnumber(data.length);
        setUser(data);
    }
    const deleteUser = async (userID) => {
         await fetch(`${process.env.BACKEND_API}/auth/deleteuser`, {
            method: "DELETE", mode: "cors", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                userID
            })
        })
        setUser((prev)=>[...prev].filter(elem => elem.userID !== userID));
        setnumber((prev)=>prev = prev-1);
    }
    return (
        <>
            <div className="total-count w-full p-6 flex justify-end items-center">
                <span className='font-bold text-xl'>Total Accounts : {number}</span>
            </div>
            <div className="flex items-center justify-center p-4">
                <table className=" w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden my-5">
                    <thead className="text-black">
                        {
                            user.map(r => {
                                return (
                                    <tr className="bg-neutral-300 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                        <th className="p-3 text-left">Username</th>
                                        <th className="p-3 text-left">Created</th>
                                        <th className="p-3 text-left" width="110px">Actions</th>
                                    </tr>
                                )
                            })
                        }

                    </thead>
                    <tbody className="flex-1 sm:flex-none">
                        {
                            user.map(r => {
                                return <Userrow username={r.username} createdOn={r.createdOn} id={r.userID} deleteuser={deleteUser} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Users

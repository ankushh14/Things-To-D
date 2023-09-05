import React from 'react'
import { FaTrash } from "react-icons/fa";

const Userrow = ({username, createdOn,deleteuser,id }) => {
    return (
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td className="border-grey-light border hover:bg-gray-100 p-3">{username}</td>
            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{createdOn}</td>
            <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer" onClick={()=>{deleteuser(id)}}>Delete</td>
        </tr>
    )
}

export default Userrow

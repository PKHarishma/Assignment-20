import React from "react";
export const Search=()=>
    {
        return(
            <>
            <>
            <input 
            type="Search"
            placeholder= "Search..."
            className='w-[300px] h-9 border rounded-2xl p-3 mr-1'
            />
            
            </>
            
            </>
        )
    }
    export const Nav=()=>
        {
            return(
                <div className="flex justify-start mr-2">
                <p className='m-1'>Home</p>
                <p className='m-1'>Product</p>
                <p className='m-1'>Cart</p>
                </div>
            )
        }
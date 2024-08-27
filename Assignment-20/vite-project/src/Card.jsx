import React from "react";
import ReactDOM from 'react-dom/client';
 const Card=(props)=>
{
    return(
     <>
     <img 
     src={props.imgSrc}
     alt="card image" />
     <p>{props.title}</p>
     <button type="button"
     className="bg-slate-500 border rounded-xl"
     >Add to cart</button>

     </>
    )
}
export default Card;
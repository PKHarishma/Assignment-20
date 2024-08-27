import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo from "./Logo.jsx";
import {Search , Nav } from "./Search.jsx";
import uuid from 'react-uuid';
import Card from './Card.jsx';
import Product from './Product.jsx'



const AppLayout=()=>
{
   return(
    <>
    <div className='flex justify-evenly items-center bg-blue-900'>
      <Logo/>
      <Search/>
      <Nav/>
    </div>
   <div className='2xl:container mx-auto'>
   
   { Product.map((e)=>
      {
        return(
         
        
         <Card
          key={uuid()}
          imgSrc={e.img}
          title={e.tit}
          />
         
        )
      })}
   
  
   
   </div>
    </>  )}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);
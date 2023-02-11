import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css'

function Nav(){
  const [show,handleShow] = useState(false);
  const history = useHistory();
  const transitionNavBar=()=>{
    if(window.scrollY >100){
      handleShow(true)
    }else{
      handleShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
    },[]
  )



    return <div className={`nav ${show && "nav__black"}`}>
    <div 
    className='nav_contents'>
      <img onClick={()=>history.push("/")}
       className ="nav__logo" 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"alt=""/>   
          <img 
          onClick={()=> history.push("/profile")}
          className ="nav__avatar" 
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TgaAHUyoIz8Va9nAF9xQvd6t6pdIFS_-pA&usqp=CAU"
           alt=""/>   
    </div>
    </div>
}

export default Nav;
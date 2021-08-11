import React,{useEffect,useState} from 'react'
import "./Navbar.css"

const Navbar = () => {
   
        const [show , handleShow]=useState(false);
    
        useEffect(() => {
            window.addEventListener("scroll",()=>{
                if (window.scrollY>100){
                  handleShow(true);
                }else handleShow(false);
            })
            return () => {
               window.removeEventListener("scroll") ;
            };
        }, []);
    

    return (
        <div className={`Navbar ${show && "Nav_black"}`}>
            <img
            className="logo"
            alt="logo"
            src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8"
            ></img>
            
            <img
            className="avatar"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            ></img>
        </div>
    )
}

export default Navbar

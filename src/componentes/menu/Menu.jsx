"use client";
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import './menu.css'
<Link href="/">DWBA</Link>
export default function Menu(){

    const [menustate,setMenuState]       = useState(false);
    const [menuclassstate,setClassState] = useState("menu_close_start");

    const changeStateMenu = ()=>{
        if(menustate){
            setClassState("menu menu-close");
            setMenuState(false);
        }else{
            setClassState("menu menu-open");
            setMenuState(true);
            console.log("aa")
        }
    }

    return(

        <>
            <nav id="menuprincipal" className={menuclassstate}> 
                <ul>
                    <li><Link href="/">DWBA</Link></li>
                    <li><Link href="/portafolio">Portafolio</Link></li>
                    <li><Link href="/apps">APPS</Link></li>
                    { 
                     // <li><Link href="/revista">REVISTA</Link></li>
                    }
                    <li><Link href="/#contacto">CONTACTO</Link></li>
                </ul>
            </nav>

            <img id="pagemenuid" className="icon_menu_mobile" src="/icon/menu.svg" alt="Icono menu mobile" onClick={changeStateMenu}/>
        </>
       
    )
}
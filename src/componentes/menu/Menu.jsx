"use client";
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import './menu.css'
<Link href="/">DWBA</Link>

export default function Menu(){

    const [menustate,setMenuState]                     = useState(false);
    const [menuclassstate,setClassState]               = useState("menu_close_start");
    const [submenustate,setSubmenuState]               = useState(false);
    const [menuclassstateSubmenu,setClassStateSubmenu] = useState("submenu_close");

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

    const changeStateSubmenu =() =>{
        if(submenustate){
            setClassStateSubmenu("submenu_close");
            setSubmenuState(false);
        }else{
            setClassStateSubmenu("submenu");
            setSubmenuState(true);
        }
    }

    return(

        <>
            <nav id="menuprincipal" className={menuclassstate}> 
                <ul>
                    <li><Link href="/">DWBA</Link></li>
                    <li className="submenucontent">
                        <Link onClick={changeStateSubmenu} href="#">Servicios &#8964;</Link>
                     
                        <ul className={menuclassstateSubmenu}>
                            <li> <Link href="/diseño-web-orense">Diseño Web</Link></li>
                            <li> <Link href="/desarrollo-web-wordpress-ourense">Desarrollo web WordPress</Link></li>
                            <li> <Link href="/mantenimiento-web">Mantenimiento Web</Link></li>
                        </ul>
                    </li>
                   { /* <li><Link href="/portafolio">Portafolio</Link></li> */} 
                    <li><Link href="/portafolio">Portafolio</Link></li>
                    { /* <li><Link href="/revista">REVISTA</Link></li> */ }
                    <li><Link href="/apps">APPS</Link></li>
                    <li><Link href="/#contacto">CONTACTO</Link></li>
                </ul>
            </nav>

            <img id="pagemenuid" className="icon_menu_mobile" src="/icon/menu.svg" alt="Icono menu mobile" onClick={changeStateMenu}/>
        </>
       
    )
}
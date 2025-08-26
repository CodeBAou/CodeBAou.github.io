import React from 'react';
import './section_header.css';

export default function Section_header(){

    return(
       <div className="section-header">
            <img class="logoDWBA" src="/image/LOGO_DWBA_Transparente.webp" alt="Logo_DWBA"/>
            <h1 id="dwba">DWBA, desarrollo, diseño y marketing digital</h1>
            <p>Ourense</p>
            <div className="apps_list">
                <img className="app_imagen" src="/image/Logo-de-la-app-pixelgrino-de-DWBA.png" alt="El logo de la app pixelgrino de DWBA" />
            </div>
            <div className="tecnologias_list">
                <img className="tecnologias_imagen" src="/icon/Linux.svg" alt="Logo de linux" width="50px" height=""/>
                <img className="tecnologias_imagen" src="/icon/Arch_Linux.svg" alt="Logo de Arch Linux"/>
                <img className="tecnologias_imagen" src="/icon/GitHub.svg" alt="Logo de GitHub"/>
                <img className="tecnologias_imagen" src="/icon/GIMP.svg" alt="Logo del editor GIMP"/>
                <img className="tecnologias_imagen" src="/icon/MongoDB.svg" alt="Logo de MongoDB"/>
                <img className="tecnologias_imagen" src="/icon/MySQL.svg" alt="Logo de MySQL"/>
                <img className="tecnologias_imagen" src="/icon/SQLite.svg" alt="Logo de SQLite"/>
                <img className="tecnologias_imagen" src="/icon/node.svg" alt="Logo de node"/>
                <img className="tecnologias_imagen" src="/icon/PHP.svg" alt="Logo de PHP"/>
                <img className="tecnologias_imagen" src="/icon/js.svg" alt="Logo de javascript"/>
                <img className="tecnologias_imagen" src="/icon/CSS3.svg" alt="Logo de CSS3"/>
                <img className="tecnologias_imagen" src="/icon/react.svg" alt="Logo de react"/>
                <img className="tecnologias_imagen" src="/icon/wordpress.svg" alt="Logo de wordpress"/>
                <img className="tecnologias_imagen" src="/icon/WooCommerce.svg" alt="Logo de woocommerce"/>
            </div>
       </div>
    )
}
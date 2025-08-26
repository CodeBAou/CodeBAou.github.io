import React from 'react';
import './content_section_footer.css';

export default function Content_section_footer(){

    return(
        <footer>

            <div className="content_enlaces">

                <div className="footer_logo_content">
                    <img src="/image/LOGO_DWBA_Transparente.webp" alt="" />
                </div>

                <div className="footer_paginas_Legales">
                    <ul>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Terminos y Condiciones</a></li>
                        <li><a href="#">Politica de cookies</a></li>
                    </ul>
                </div>

                <div className="footer_ultimas_paginas">
                    <ul>
                        <li>Apps</li>
                        <li>Servicios</li>
                        <li>Revista</li>
                    </ul>
                </div>
            </div>

            <div className="copyright">
                <span>©2025, DWBA - Boris Álvarez , Ourense</span>
            </div>

        </footer>
    )
}
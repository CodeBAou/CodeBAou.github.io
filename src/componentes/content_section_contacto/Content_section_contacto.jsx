import React from 'react';
import './content-section_contacto.css';

export default function Content_section_contacto(){

    return(

        <div id="contacto" className="section_contacto">

            <h2 >Información de contacto</h2>

            <div>
                <div className="content_datos_contacto">

                   <div>
                        <img src="/icon/movil.svg" alt="Icono de movil" loading="lazy"/>
                        <img src="/icon/whatssap.svg" alt="Icono de whatssap" loading="lazy"/>
                        <p className="numeroTelefono">+34 644 81 42 58</p> 
                        <img className="qrcontacto" src="/image/qr_whatssap_contacto.webp" alt="QR para contacto de whatssap de dwba" loading="lazy"/>
                    </div>

                    <div>
                        <img src="/icon/email.svg" alt="icono de correo electronico" loading="lazy"/>
                        <p>dwba.soporte@gmail.com</p>
                        <img className="qrcontacto" src="/image/qr_email_contacto.webp" alt="QR para contacto de email de dwba" loading="lazy"/>
                    </div>

                    <div>
                        <img src="/icon/horario.svg" alt="icono de horario" loading="lazy"/>
                        <p>8:30 - 14:00 | 15:00 - 17:30</p>
                    </div>
                </div>
            </div>

            <div className="content_datos_localizacion">
                <div>
                    <h3>Áreas de servicio</h3>
                    <p>Trabajamos desde Ourense, pero atendemos de forma online y aceptamos trabajos de cualquier ciudad.</p>
                    <p>Zonas cercanas: <strong>A Cañiza</strong>, <strong>Celanova</strong>, <strong>Ribadavia</strong>, <strong>Ourense</strong>, <strong>Ponteareas</strong>, <strong>Salvaterra de Miño</strong>, <strong>Xinzo de Limia</strong> y <strong>Verín</strong>.</p>
                    <p><strong>Dirección:</strong> 32200 Cortegada, Ourense.</p>
                </div>
            </div>
        </div>
    )
    
}
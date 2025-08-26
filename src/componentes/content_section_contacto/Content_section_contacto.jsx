import React from 'react';
import './content-section_contacto.css';

export default function Content_section_contacto(){

    return(

        <div id="contacto" className="section_contacto">

            <h2 >Contacto</h2>

            <div>

                <div className="content_imagen_dwba">
                    <img src="/image/LOGO_DWBA_Transparente.webp" alt="" />
                </div>

                <div className="content_datos_contacto">

                    <div>
                        <h3>TELEFONO</h3> 
                        <div>
                            <img src="/icon/movil.svg" alt="Icono de movil" />
                            <img src="/icon/whatssap.svg" alt="Icono de whatssap" />
                            <p>+34 644 81 42 58</p> 
                        </div>
                    </div>

                    <div>
                        <h3>EMAIL</h3> 
                        <div>
                            <img src="/icon/email.svg" alt="icono de correo electronico" />
                            <p>borisafou@gmail.com</p>
                        </div>
                    </div>

                     <div>
                        <h3>Horario</h3> 
                        <div>
                            <img src="/icon/horario.svg" alt="icono de horario" />
                            <p>8:30 14:00 15:00 - 17:30</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
    
}
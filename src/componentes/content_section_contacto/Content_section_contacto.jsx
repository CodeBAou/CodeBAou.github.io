import React from 'react';
import './content-section_contacto.css';

export default function Content_section_contacto(){

    return(

        <div id="contacto" className="section_contacto">

            <h2 >Información de contacto</h2>

            <div>

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
                            <p>dwba.soporte@gmail.com</p>
                        </div>
                    </div>

                     <div>
                        <h3>Horario</h3> 
                        <div>
                            <img src="/icon/horario.svg" alt="icono de horario" />
                            <p>8:30 - 14:00 | 15:00 - 17:30</p>
                        </div>
                    </div>

                </div>

              
, 
            </div>

              <div className="content_datos_localización">
                    <div>
                        <h3>Áreas de servicio</h3>
                        <p>Ofrecemos servicios de diseño web, desarrollo y marketing digital en toda España.</p>
                        <p>Trabajamos especialmente en zonas cercanas como <strong>A Cañiza</strong>, <strong>Celanova</strong>, <strong>Ribadavia</strong>, <strong>Ourense</strong>, <strong>Ponteareas</strong>, <strong>Salvaterra de Miño</strong>, <strong>Xinzo de Limia</strong> y <strong>Verín</strong>.</p>
                        <p><strong>Dirección:</strong> Fermín Bouza Brei, 22, 32200 Cortegada, Ourense.</p>
                    </div>
                </div>
        </div>
    )
    
}
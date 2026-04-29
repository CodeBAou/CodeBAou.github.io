import React from 'react';
import './divisor-apartado-web.css';

export default function DivisorApartadoWeb( { children, title}){
   
        return(
            <section className="content-main">
               
                <div className="text-content">

                    <h2> {title} </h2>
                   
                </div>

                <div className="content-hijos">
                        {children}
                </div>

            </section>
    )
}
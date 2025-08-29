'use client'
import React, {useState, useEffect} from 'react'
import Data_Servicios from '../../data/page_inicio/Data_servicios_descripción_corta.json';
import Content_carrupser from '@/componentes/content_carrupsel/Content_carrupsel.jsx';

import './servicios.css';

export default function Page(){

    return(
        <div className="servicios">
            <ul id="ulscroll">
                {
                    Data_Servicios.map((servicio,index) =>{

                        return <li key={index} className="openli">
                            <div className="carrupsel_content">
                               <Content_carrupser images={servicio.images_muestra_servicios}/>
                            </div>
                            <div className="title_content">
                                <h2>{servicio.name}</h2>
                                <div className="barra_decorativa"></div>
                            </div>
                        </li>
                    })
                }
            </ul>
           
        </div>

    )
}
import React from 'react';
import './content_section_detalles.css';

/**
 * @param {array<string>}, lista de servicio
 * @param {string} , la duración del desarrollo del servicio
 * @param {array<string>}, lista precios
 * @param {array<array<string>>}, [ [src, alt] ]
 */
export default function Content_section_detalles({servicios=[], duracion="", precio="", tecnologias=[]}){
    
    let itemsservicio = 0;
    let frutas        = ['Manzana', 'Banana', 'Naranja'];

    return(
        <div className="detalles"> 
        
            <h3>ÁMBITO</h3>
     
            {
                servicios.map( (servicio,index)=> {
                       return <p key={`servicio${index}`}>{servicio}</p>
                })
            }
          
            <h3>DURACIÓN APROX.</h3>
            {
                duracion.map( (duracion,index) => {
                    return <p key={`duracion${index}`}>{duracion}</p>
                })
            }
            
            <h3>PRECIO</h3>
            {
                precio.map( (precio,index) => {
                    return <p key={`precio${index}`}>{precio}</p>
                })
            }
          
            <h3>TECNOLOGÍAS</h3>
         
            <div className="content-icons">
                {
                    tecnologias.map( (tecnologia,index)=> {
                        return  <img key={`icon${index}`} src={tecnologia.path} alt={tecnologia.alt} width={tecnologia.width} height={tecnologia.height}/>
                    })
                }
            </div>
          
        
        </div>
    )
}
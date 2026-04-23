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
        
            <h4>ÁMBITO</h4>
     
            {
                servicios.map( (servicio,index)=> {
                       return <p key={`servicio${index}`}>{servicio}</p>
                })
            }
          
            <h4>DURACIÓN APROX.</h4>
            {
                duracion.map( (duracion,index) => {
                    return <p key={`duracion${index}`}>{duracion}</p>
                })
            }
            
            <h4>PRECIO</h4>
            {
                precio.map( (precio,index) => {
                    return <p key={`precio${index}`}>{precio}</p>
                })
            }
          
            <h4>TECNOLOGÍAS</h4>
         
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
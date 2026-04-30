import React, {props} from 'react';
import './textChild.css';

export default function TextChild({title, parrafo, children}){
    return(
       <div className="textChildren">
            <div>
                <h3>{title}</h3>
                <p>{parrafo}</p>
            </div>
            <div>
                {children}
            </div>
       </div>
    )
}
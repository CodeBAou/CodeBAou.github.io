import React from 'react';
import './section_diseño_web_responsive.css';

export default function Section_diseño_web_responsive(){
    return(
        <div className="responsive">
            <div className="escritorio">
                <h3>DISEÑO RESPONSIVE</h3>
                <p>DISEÑO RESPONSIVE PARA TODOS LOS DISPOSITIVOS</p>
                <h4>ESCRITORIO</h4>
            </div>
            <div className="tablet">
                <h4>TABLET</h4>
            </div>
            <div className="mobile">
                <h4>MOBILE</h4>
            </div>
        </div>
    )
}
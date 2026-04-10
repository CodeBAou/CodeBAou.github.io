import React from 'react';
import './section_diseño_web_apisGoogle.css';

export default function Section_diseño_web_apisGoogle(){
    
    return(
        <div className="content-apisGoogle">
            <div>
                <picture>
                    <img src="/icons_apis_google/icon-google.svg" width="200px;" height="200px;" alt="" />
                </picture>
                
            </div>
            <div>
                <h3>Diseño para contenido dinámico</h3>
                <p>APROBECHA LAS PODEROSAS APIS DE GOOGLE AL MÁXIMO</p>
            </div>
            <div>
                <img src="/icons_apis_google/icon-google_analytics-icon-old.svg" alt="" width="50px" height="50px"/>
                <img src="/icons_apis_google/icon-reunión-de-google.svg" alt="" width="50px" height="50px"/>
                <img src="/icons_apis_google/icon-calendario-de-google.svg" alt="" width="50px" height="50px"/>

                <img src="/icons_apis_google/icon-google-keep.svg" alt="" width="50px" height="50px"/>
                <img src="/icons_apis_google/icon-mapas-de-google.svg" alt="" width="50px" height="50px"/> {/** CENTER */}
                <img src="/icons_apis_google/icon-google-fotos.svg" alt="" width="50px" height="50px"/>

                <img src="/icons_apis_google/icon-google-drive.svg" alt="" width="50px" height="50px"/>
                <img src="/icons_apis_google/icon-youtube.svg" alt="" width="50px" height="50px"/>
                <img src="/icons_apis_google/icon-google-blogger.svg" alt="" width="50px" height="50px"/>
            </div>
        </div>
    )
}
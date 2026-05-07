import React,{props} from 'react';
import ImageDwba from '@/componentes/Image-dwba/Image.jsx';
import './header-page-unica.css';

export default function HeaderPageUnica({imageSrc,imageSrcTablet,imageSrcMobile,alt, title, subtitle}){
    return(
         <section className="header-page-unica-content">
        
                        <ImageDwba data={{
                            mobile : {
                                media:765,
                                src:imageSrcMobile
                            },
                            tablet : {
                                media:1200,
                                src:imageSrcTablet,
                            },
                            src:imageSrc,
                            className:"image-header-page-unica",
                            alt:{alt},
                            load:"eager"
                        }}/>
        
                        <h1 className="title-header-page-unica">{title}</h1>
                       
                        <h2 className="subtitle-header-page-unica">{subtitle}</h2>
                        
            </section>   
    )
}
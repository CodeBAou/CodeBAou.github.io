"use client";

import React, { useState, useEffect, useRef } from 'react';
import './content_carrupsel.css';

export default function Content_carrupsel({ images }) {

  const carrouselDadRef        = useRef(null);
  const carouselRef            = useRef(null);
  const isDragging             = useRef(false);
  const startX                 = useRef(0);
  const scrollLeft             = useRef(0);
  const [isMobile,setIsMobile] = useState(1920);

  useEffect(() => {

    //CARRUPSEL

    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current     = e.pageX - carousel.offsetLeft;
      scrollLeft.current = carousel.scrollLeft;               
    };

    const handleMouseLeave = () => (isDragging.current = false);
    const handleMouseUp    = () => (isDragging.current = false);

    const handleMouseMove = (e) => {

      if (!isDragging.current) return;
      e.preventDefault();

      const x             = e.pageX - carousel.offsetLeft;
      const walk          = (x - startX.current) * 1.8; // velocidad del arrastre
      carousel.scrollLeft = scrollLeft.current - walk;
    };

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    if (typeof window !== "undefined") {

       // eventos globales (importante para no quedarse trabado)
      window.addEventListener("mouseup", handleMouseUp);

      //Detectar mobile
      window.addEventListener("resize", (event) => {
        setIsMobile(window.innerWidth);
      })
    }
   
    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);


  if(isMobile > "780"){

    return (

       <div className="carrupsel"> {/**carrupsel full */}

        <div className="content-items" ref={carouselRef}>
          {images.map((src, i) => (
              <div
                key={i}
                className="carrupsel-item"
                style={{ backgroundImage: `url(${src})` }}
              />
          ))}
        </div>
      </div>
   
    )

  }else {

    return(
      <div className="carrupsel-mobile"> {/**carrupsel full */}

          <div className="content-items-mobile" ref={carouselRef}>
            {images.map((src, i) => (
                <div
                key={i}
                className="carrupsel-item-mobile"
                style={{ backgroundImage: `url(${src})` }}
                />
            ))}
          </div>
      </div>
    )

  }
  
}
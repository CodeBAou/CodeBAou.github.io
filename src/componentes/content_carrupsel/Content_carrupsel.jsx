import React, { useState, useEffect, useRef } from 'react';
import './content_carrupsel.css';

export default function Content_carrupsel({ images }) {
  const carouselRef = useRef(null);
  const isDragging  = useRef(false);
  const startX      = useRef(0);
  const scrollLeft  = useRef(0);

  useEffect(() => {
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
      const walk          = (x - startX.current) * 1.5; // velocidad del arrastre
      carousel.scrollLeft = scrollLeft.current - walk;
    };

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (

    <>

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


      {/** carrupsel mobile */}

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
    
    </>
   
  );
}
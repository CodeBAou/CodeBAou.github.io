"use client";
import React, {useState, useEffect} from 'react'

export const metadata = {
  title: 'Redirigiendo...',
};

export default function Page(){

    return(
        <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/paginas-web-economicas-promo" />
      </head>
      <body>
        <p>Redirigiendo a la nueva página de la promoción...</p>
      </body>
    </html>

    )
}
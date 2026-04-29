"use client";
import React, { useState, useEffect, useRef } from 'react';
import './Image3DHoverEffect.css';

export default function Image3DHoverEffect( {src, Width, Height, MarginTop} ) {

    return(
        <div class="Image3DHoverEffect_container" style={{ marginTop: MarginTop }}>    
                <img  src={src} loading="lazy"></img>
                <img  src={src} loading="lazy"></img>
                <img  src={src} loading="lazy"></img>
                <img  src={src} loading="lazy"></img>
        </div>
    );
}
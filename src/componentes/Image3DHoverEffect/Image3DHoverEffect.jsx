"use client";
import React, { useState, useEffect, useRef } from 'react';
import './Image3DHoverEffect.css';

export default function Image3DHoverEffect( {src, Width, Height} ) {

    return(
        <div class="Image3DHoverEffect_container">    
                <img width={Width} Height={Height} src={src}></img>
                <img width={Width} Height={Height} src={src}></img>
                <img width={Width} Height={Height} src={src}></img>
                <img width={Width} Height={Height} src={src}></img>
        </div>
    );
}
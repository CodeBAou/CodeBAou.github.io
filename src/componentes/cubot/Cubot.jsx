"use client"
import React, {useProps, useEffect} from 'react'
import './cubot.css';

export default function Cubot({items}){


    return(
        <div className="espacio3D">
            <div className="cubo3D">
                <div className="base"></div>
                <aside className="cara cara1">{(items) ? items[0] : null}</aside>
                <aside className="cara cara2">{(items) ? items[1] : null}</aside>
                <aside className="cara cara3">{(items) ? items[2] : null}</aside>
                <aside className="cara cara4">{(items) ? items[3] : null}</aside>
                <aside className="cara cara5"></aside>
                <aside className="cara cara6"></aside>
            </div>
        </div>
        
    )
}
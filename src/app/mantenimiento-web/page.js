"use client";
import React from 'react'
import './mantenimiento-web.css';
import Link from 'next/link';
export default function Page(){
    return(
        <div className="mantenimientopage">
            <h1>Servico de mantenimiento web</h1>
            <h2>Olvídate de los problemas técnicos de tu web y concéntrate en hacer crecer tu negocio.</h2>
            <br/>
            <h3>¿Que te cubre este servicio?</h3>
            <p>Cuando una web presenta problemas perjudica al usuario bajando la probabilidad de que complete un formulario o realize alguna compra.</p>
            <p>Google analiza cada web y la puntúa para decidir que página presenta primero en el ranking de resultados, es importante que la web esté actualizada y funcione correctamente en el momento que un robot de Google la revise.</p>
            <p>Solucionamos y evitamos incidencias como:</p>
            <ul>
                <li>No se visualiza correctamente en móviles.</li>
                <li>No has hecho copias de seguridad.</li>
                <li>Los formularios no funcionan.</li>
                <li>Has recibido notificaciones de Google sobre errores de indexación.</li>
                <li>Tranquilidad y seguridad web.</li>
                <li>Problemas con el servidor y velocidad de carga.</li>
                <li>Cuando la tienda online no funciona como quieres o va muy lenta.</li>
                <li>Cuando un servicio que ofreces desde la web te da algún dolor de cabeza.</li>
                <li>Algun problema técnico que tengas sin resolver y necesites solucionar.</li>
                <li>No sabes cual es el estado de tu web.</li>
            </ul>

             <h3>Planes</h3>
            <div className="planes_content">
                <div className="planes_content_shadow">
                    <h4>Estandar</h4>
                    <ul>
                        <li>Soporte para incidencias</li>
                        <li>Seguridad web básica.</li>
                        <li>Copia de seguridad <b>MENSUAL</b></li>
                        <li>Actualizaciones</li>
                    </ul>
                    <p className="precio">45€</p>
                </div>
                <div className="planes_content_shadow">   
                    <h4>Proactivo</h4>
                    <ul>
                        <li>Soporte para incidencias</li>
                        <li>Seguridad web básica.</li>
                        <li>Copia de seguridad <b>SEMANAL</b></li>
                        <li>Actualizaciones</li>
                        <li>Seguimiento Activo para incidencias</li>
                        <li>Informe</li>
                    </ul>
                    <p className="precio">85€</p>
                </div>
                <div className="planes_content_shadow">
                     <h4>Tienda Online / Servicio</h4>
                    <ul>
                        <li>Soporte para incidencias</li>
                        <li>Seguridad web básica.</li>
                        <li>Copia de seguridad <b>SEMANAL</b></li>
                        <li>Actualizaciones</li>
                        <li>Seguimiento Activo para incidencias</li>
                        <li>Informe Salud del sition SEMANAL</li>
                        <li>Soporte woocommerce, fooevents o funcionalidad avanzada para comercio electrócino.</li>
                    </ul>
                    <p className="precio">175€</p>
                </div>
                <div className="planes_content_shadow">
                    <h4>BOLSA DE HORAS</h4>
                    <ul>
                        <li>Bolsa de horas para proyectos más grandes y con un número mayor de funcionalidades que mantener.</li>
                        <li>Solución puntual, se calcula el precio por estimación de horas</li>
                    </ul>
                    <p className="precio">Presupuesto</p>
                </div>
                <div>
                    <Link className="call_action_contactar" href="/#contacto">contactar</Link>
                </div>
            </div>
            <h3>¿Como trabajamos?</h3>
            <div>
                <p>1º - Realizamos una auditoría y evaluamos la salud del sitio.</p>
                <p>2º - Planificamos las soluciones según las horas disponibles del plan.</p>
                <p>3º - Creamos un informe sobre la salud del sitio y solucciones aplicadas.</p>
            </div>
        </div>
    )
}
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './FormContacto.css';

export default function FormContacto(){

    //https://dashboard.emailjs.com/ Envio Gmail
    const [aviso, setAviso] = useState("");
    const form              = useRef();
    // En lugar de escribir las claves a mano, las leemos desde el .env / GitHub Variables
    const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, "q_sawiCA32Es570j4")
      .then(
        () => {
          console.log('SUCCESS!');
          setAviso("Hemos recibido tu mendaje");
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

    return(
        <form ref={form}>
            <label>
                Nombre:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="email" name="email"  required />
            </label>
            <label>
                Propuesta:
                <textarea name="message"  minlength="15" required />
            </label>
            <p className="Mesageform">{aviso}</p>
            <input type="submit" onClick={enviarEmail} value="Enviar" />
        </form>
    )
}
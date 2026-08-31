This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

https://dwba.es/


## Getting Started

First, run the development server:

```bash
npm run dev

```
http://localhost:3000

## Variables de Entorno - gitpages
Esa configuración le dice a GitHub Actions qué claves secretas debe leer y cómo debe ejecutar el proceso al momento de compilar tu proyecto de Next.js.
Para que funciones es necesario configurar este fichero .github/workflows/nextjs.yml ejemplo:::>>
 - name: Build with Next.js
        env:
          NEXT_PUBLIC_BLOGGER_API_KEY: ${{ secrets.NAME_KEY }}
          NEXT_PUBLIC_BLOGGER_BLOG_ID: ${{ secrets.NAME_BLOG_ID }}
          NEXT_PUBLIC_SERVER: ${{ secrets.NAME__SERVER }}
          FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Proyecto
/inicio $\color{green}{\text{IMPLEMENTADO}}$, /diseño-web $\color{green}{\text{IMPLEMENTADO}}$, /diseño-web-wordpress-ourense $\color{green}{\text{IMPLEMENTADO}}$,  /Desarrollo $\color{red}{\text{NO IMPLEMENTADO}}$, /Seo $\color{red}{\text{NO IMPLEMENTADO}}$, /Presencia-basica $\color{red}{\text{NO IMPLEMENTADO}}$, /apps $\color{red}{\text{NO IMPLEMENTADO}}$, /mantenimiento-web $\color{GREEN}{\text{IMPLEMENTADO}}$

/desarrollo  > /Desarrollo web wordpress $\color{red}{\text{NO IMPLEMENTADO}}$
/desarrollo > /Desarrollo a media $\color{red}{\text{NO IMPLEMENTADO}}$

###  antes de subir a produccion 
    - Poner  output: 'export' en next.config.js
    - Para desarrollo  -> %C3%B1 sustituye a la ñ  en la rutas, en produccion poner la 'ñ'.

### Almacenamiento de datos para la construcción del sitio
Los datos para el contenido del sitio se almacenan como json en la carpeta ./data/, se componen por array de json.

- ./data/servicios $\color{green}{\text{IMPLEMENTADO}}$
    - Se almacenan los servicios que se listarán en la página de inicio.










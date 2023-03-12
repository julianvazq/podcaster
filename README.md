# Podcaster

**IMPORTANTE**: noto que los requests para obtener los episodios a través de [AllOrigins](https://allorigins.win/) son bastante lentos, por lo cual recomiendo testear con un podcast que tenga pocos episodios (e.j. Norah Jones Is Playing Along).

## Requisitos

- Instalar [NodeJS](https://nodejs.org/en/) para poder seguir los siguientes pasos.

## Instalación

1. Ejecutar el siguiente comando para clonar el projecto.

    `git clone https://github.com/julianvazq/podcaster.git`

2. Ejecutar el siguiente comando para instalar dependencies.

    `npm install`

## Development

1. Ejecutar el siguiente comando para iniciar el servidor local en modo **_development_**:

    `npm run dev`

2. Navegar a [http://127.0.0.1:5173](http://127.0.0.1:5173) en un browser.

## Production

1. Ejecutar el siguiente comando para crear el **_production_** build:

    `npm run build`

2. Ejecutar el siguiente comando para iniciar el servidor local en modo **_production_**:

    `npm run preview`
    
3. Navegar a [http://127.0.0.1:4173](http://127.0.0.1:4173) en un browser.

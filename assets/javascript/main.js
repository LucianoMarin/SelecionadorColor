(() => {


    'use strict'


    const app = document.querySelector('.app');
    const row = document.querySelector('.row');

    const cambiarColor = document.createElement('input');
    cambiarColor.setAttribute('type', 'color');


    const labelInformacion = document.createElement('label');

    const cuadro = document.createElement('canvas');
    cuadro.id = 'cuadro';




    const crearCuadro = () => {

        app.append(cuadro);
    }


    const crearElementos = () => {
        cambiarColor.id = 'inputColor';

        const titulo = document.createElement('label');

        titulo.innerText = 'Seleccionador de color';
        titulo.id = 'titulo';

        labelInformacion.id = 'labelInformacion';
        row.append(cambiarColor);
        app.append(labelInformacion)
        app.append(titulo);

    }

    const iniciarAPP = () => {

        crearCuadro();
        crearElementos();

    }

    iniciarAPP();



    cambiarColor.addEventListener('change', () => {


        let colorObtenido = cambiarColor.value;
        labelInformacion.innerText = `Codigo: ${colorObtenido}`;

        cuadro.style = `background-color:${colorObtenido}`;
        

    })



})();
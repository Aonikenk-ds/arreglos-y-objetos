const propiedades_alquileres = [

    {
        id: 1,
        nombre: 'Apartamento en la ciudad',
        imagen: 'https://www.istockphoto.com/es/foto/elementos-modernos-en-la-arquitectura-contempor%C3%A1nea-gm1446754769-484750883?searchscope=image%2Cfilm',
        descripcion: 'Apartamento en el centro de la ciudad',
        ubicacion: 'Av. Vicuña Mackenna 5633, San Joaquín',
        habitaciones: 2,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        id: 2,
        nombre: 'Apartamento frente al mar',
        imagen: 'https://www.istockphoto.com/es/foto/chicago-skyline-vista-a%C3%A9rea-gm511665488-86759789?searchscope=image%2Cfilm',
        descripcion: 'vista al mar',
        ubicacion: 'Valparaiso',
        habitaciones: 3,
        costo: 2000,
        smoke: false,
        pets: true

    },

    {
        id: 3,
        nombre: 'Casa en condominio',
        imagen: 'https://www.istockphoto.com/es/foto/renderizado-3d-del-exterior-de-una-casa-privada-moderna-gm1357933711-431705350?searchscope=image%2Cfilm',
        despcricion: 'Casa en condominio',
        ubicacion: 'Las condes 4593, Las Condes',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true
    }

];

const alquiler = document.querySelector('#propiedades-alquiler');

let alquileres = ""

for (let ApartamentosAlquiler of propiedades_alquileres) {
    alquileres += `
        <div class="propiedad-alquiler">
            <img src="${ApartamentosAlquiler.imagen}" alt="${ApartamentosAlquiler.nombre}">
            <h2>${ApartamentosAlquiler.nombre}</h2>
            <p>${ApartamentosAlquiler.descripcion}</p>
            <p>Ubicación: ${ApartamentosAlquiler.ubicacion}</p>
            <p>Habitaciones: ${ApartamentosAlquiler.habitaciones}</p>
            <p>Precio: $${ApartamentosAlquiler.costo}</p>
            <p>${ApartamentosAlquiler.smoke ? 'Se permite fumar' : 'No se permite fumar'} </p>
            <p>${ApartamentosAlquiler.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'} </p>
            </div>
    `;        
}
alquiler.innerHTML = alquileres

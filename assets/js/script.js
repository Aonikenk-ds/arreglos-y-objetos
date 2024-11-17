const propiedades_ventas = [

    {
        id: 1,
        nombre: 'Apartamento de lujo en zona exclusiva',
        imagen: 'https://www.cosasdearquitectos.com/wp-content/uploads/ASTON1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en zona residencial',
        Ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: true

    },
    {
        id: 2,
        nombre: 'Apartamento acogedor en la montaña',
        imagen: 'https://pixabay.com/es/photos/caba%C3%B1a-de-troncos-caba%C3%B1a-casa-1886620/',
        descripcion: 'Esta cabaña está situada en la montaña con impresionantes vistas',
        ubicacion: '982 Mountain Road, sumit peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: false,
        pets: true

    },
    {
        id: 3,
        nombre: 'Penthouse de lujo con terraza',
        imagen: 'https://numberoneproperty.net/en/news/what-is-the-penthouse',
        descripcion: ' Este penthouse ofrece vista panorámica y amplio espacio',
        ubicacion: '567 skyline avenue, skyview city, CA 45884',
        habitaciones: 5,
        costo: 5000,
        smoke: true,
        pets: true
    }
];

const ventas = document.querySelector('#propiedades-venta');
console.log("aqui",ventas)
let ventasdeptos = ""

for (let ApartamentosVenta of propiedades_ventas) {
    ventasdeptos += `
        <div class="propiedad">
            <img src="${ApartamentosVenta.imagen}" alt="${ApartamentosVenta.nombre}">
            <h2>${ApartamentosVenta.nombre}</h2>
            <p>${ApartamentosVenta.descripcion}</p>
            <p>Ubicación: ${ApartamentosVenta.ubicacion}</p>
            <p>Habitaciones: ${ApartamentosVenta.habitaciones}</p>
            <p>Precio: $${ApartamentosVenta.costo}</p>
            <p>${ApartamentosVenta.smoke ? 'Se permite fumar' : ' No se permite fumar'}</p>
            <p>${ApartamentosVenta.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'} </p>
            </div>
    
    `;
}

ventas.innerHTML = ventasdeptos

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


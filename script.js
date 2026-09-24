const WHATSAPP_NUMBER = "573132520761"; 

const productos = [
    {
        id: 1,
        titulo: "Traje Mariachi Gala Negro y Plata",
        categoria: "trajes",
        descripcion: "Traje de gala en paño negro con finos bordados florales en hilo de plata.",
        caracteristicas: [
            "Confeccionado en paño especial de alta calidad.",
            "Bordados artesanales en hilo plateado.",
            "Incluye chaquetilla, chaleco y pantalón.",
            "Confección a medida disponible."
        ],
        imagen: "img/traje-negro-plateado.jpeg"
    },
    {
        id: 2,
        titulo: "Traje Mariachi Blanco de Gala",
        categoria: "trajes",
        descripcion: "Elegante traje blanco de mariachi con acabados y bordados tradicionales.",
        caracteristicas: [
            "Tela de alta durabilidad y tono blanco impecable.",
            "Corte anatómico para mayor comodidad en el escenario.",
            "Incluye chaquetilla, chaleco y pantalón."
        ],
        imagen: "img/traje-blanco.jpeg"
    },
    {
        id: 3,
        titulo: "Traje Mariachi Azul Oscuro",
        categoria: "trajes",
        descripcion: "Traje mariachi en azul rey / oscuro con finos detalles de sastrería.",
        caracteristicas: [
            "Color vibrante e ideal para presentaciones.",
            "Diseño exclusivo y ajuste cómodo."
        ],
        imagen: "img/traje-azuloscuro.jpeg"
    },
    {
        id: 4,
        titulo: "Traje Mariachi para Dama (Negro)",
        categoria: "trajes",
        descripcion: "Traje corte femenino de mariachi en paño negro con bordados de alta gama.",
        caracteristicas: [
            "Corte estilizado especial para dama.",
            "Bordados elegantes en solapa y falda/pantalón."
        ],
        imagen: "img/traje-dama-negro.jpeg"
    },
    {
        id: 5,
        titulo: "Camisola Mariachi Beige",
        categoria: "camisolas",
        descripcion: "Camisola fina en tono beige con delicado bordado artesanal.",
        caracteristicas: [
            "Tela fresca y muy cómoda.",
            "Bordado frontal en contraste."
        ],
        imagen: "img/camisola-beige.jpeg"
    },
    {
        id: 6,
        titulo: "Camisola Mariachi Azul",
        categoria: "camisolas",
        descripcion: "Camisola ligera azul con vivos y detalles bordados.",
        caracteristicas: [
            "Ideal para presentaciones informales o ensayos.",
            "Excelente durabilidad."
        ],
        imagen: "img/camisola-azul.jpeg"
    },
    {
        id: 7,
        titulo: "Moño Rojo Tradicional",
        categoria: "monos",
        descripcion: "Moño charro tradicional en raso rojo con bordado artesanal.",
        caracteristicas: [
            "Acabado satinado de lujo.",
            "Ajuste sencillo y seguro."
        ],
        imagen: "img/mono-rojo.jpeg"
    }
];

function cargarProductos(productosAMostrar) {
    const contenedorGrid = document.getElementById('products-grid');
    if (!contenedorGrid) return;

    contenedorGrid.innerHTML = '';

    productosAMostrar.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('product-card');

        const listaCaracteristicas = producto.caracteristicas
            ? `<ul class="product-features">
                ${producto.caracteristicas.map(item => `<li>${item}</li>`).join('')}
               </ul>`
            : '';

        tarjeta.innerHTML = `
            <div class="product-img-container">
                <img src="${producto.imagen}" alt="${producto.titulo}" class="product-img" onerror="this.src=this.src.replace('.jpeg','.jpg')">
            </div>
            <div class="product-info">
                <h3 class="product-title">${producto.titulo}</h3>
                <p class="product-description">${producto.descripcion}</p>
                ${listaCaracteristicas}
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(producto.titulo)}" 
                   target="_blank" 
                   class="btn-contacto">Cotizar por WhatsApp</a>
            </div>
        `;

        contenedorGrid.appendChild(tarjeta);
    });
}

// Filtrado por categoría
const botonesFiltro = document.querySelectorAll('.filter-btn');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesFiltro.forEach(b => b.classList.remove('active'));
        boton.classList.add('active');

        const categoria = boton.getAttribute('data-category');

        if (categoria === 'todos') {
            cargarProductos(productos);
        } else {
            const filtrados = productos.filter(p => p.categoria === categoria);
            cargarProductos(filtrados);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos(productos);
});
 
const productos = [
    {
        id: '1',
        nombre: "BURGER KID BOX",
        precio: 4000,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/producto1-9d24324be1add642a616201486356378-480-0.jpg',
        category: "Boxes",
        descripcion: "12 medallones de 100 gramos Blend Kid (Bife de chorizo - Ojo de bife - Grasa de pela)\n24 fetas de cheddar Milkaut\n12 fetas de panceta Proyecto Ahumar\n6 panes Kalis"
    },
    {
        id: '2',
        nombre: "STRAWBERRY ICE CREAM BOX",
        precio: 3200,
        stock: 11,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/producto1-9d24324be1add642a616201486356378-480-0.jpg',
        category: "Boxes",
        descripcion: "12 bolitas de 100 gramos para smashear Strawberry Ice Cream Blend\n12 fetas de cheddar Milkaut\n\n6 panes Kalis"
    },
    {
        id: '3',
        nombre: "BURGER LIFE BOX",
        precio: 3200,
        stock: 20,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/producto1-9d24324be1add642a616201486356378-480-0.jpg',
        category: "Boxes",
        descripcion: "6 medallones de 140 gramos Blend Burger Life (Roastbeef - Tapa de bife - Cima). 24 fetas de cheddar Milkaut. 12 fetas de panceta Proyecto Ahumar. 6 panes Kalis"
    },
    {
        id: '4',
        nombre: "SUPER KID BOX",
        precio: 3500,
        stock: 8,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/producto1-9d24324be1add642a616201486356378-480-0.jpg',
        category: "Boxes",
        descripcion: "16 medallones de 80 gramos Blend Kid (Bife de chorizo - Ojo de bife - Grasa de pella). 16 fetas de cheddar Milkaut. 8 panes Martins"
    },
    {
        id: '5',
        nombre: "R-T-A BOX",
        precio: 3900,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/producto1-9d24324be1add642a616201486356378-480-0.jpg',
        category: "Boxes",
        descripcion: "12 medallones de 120 gramos blend Roastbeef, Tapa de Asado y Asado. 24 fetas de cheddar Milkaut. 12 fetas de panceta Proyecto Ahumar. 6 panes Kalis"
    },
    {
        id: '6',
        nombre: "SECRET BLEND BOX",
        precio: 4000,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/producto1-9d24324be1add642a616201486356378-480-0.jpg',
        category: "Boxes",
        descripcion: "12 medallones de 120 gramos secret blend. 24 fetas de cheddar Milkaut. 12 fetas de panceta Proyecto Ahumar. 6 panes Kalis"
    },
    {
        id: '7',
        nombre: "SANDALS BOX",
        precio: 4000,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/producto1-9d24324be1add642a616201486356378-480-0.jpg',
        category: "Boxes",
        descripcion: "12 medallones 120 gramos Blend Sandals (Asado - Bife de chorizo - Roastbeef). 24 fetas de cheddar Milkaut. 12 fetas de panceta Proyecto Ahumar. 6 panes Kalis"
    },
    {
        id: '8',
        nombre: "SWEET RELISH HEINZ",
        precio: 700,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/h11-f5a8452b0e8c6adf5316002731330801-480-0.jpg',
        category: "Salsas",
        descripcion: "La salsa de EEUU para hot dogs Sweet Relish es una mezcla de pimientos, pepino, vinagre y sal.\nOriginalmente, esta salsa americana fue creada para los hot dogs pero también puedes utilizarla para ensaladas. Frasco x 375gr"
    },
    {
        id: '9',
        nombre: "KETCHUP HEINZ",
        precio: 700,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/h21-8b894e792a8f7b882116002730006823-480-0.jpg',
        category: "Salsas",
        descripcion: "Sin colorantes, sabores, conservantes ni espesantes artificiales. Apto para veganos y vegetarianos. Sin aceite de palma ni ingredientes que contengan gluten. Frasco x 397gr"
    },
    {
        id: '10',
        nombre: "MOSTAZA HEINZ",
        precio: 700,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/h31-be8a3c42430396381116002732531362-480-0.jpg',
        category: "Salsas",
        descripcion: "Sin colorantes, sabores ni conservantes artificiales. Apto para vegetarianos. Frasco x 396gr"
    },
    {
        id: '11',
        nombre: "BBQ HEINZ",
        precio: 800,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/h51-cc347ea843b6d9d56516002733467039-480-0.jpg',
        category: "Salsas",
        descripcion: "Una deliciosa salsa para acompañar tus barbacoas, en un formato práctico.. Apto para vegetarianos. Frasco x 606gr"
    },
    {
        id: '12',
        nombre: "MAYONESA HEINZ",
        precio: 1400,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/h41-7b5f3a5ee68143b4f516002729071390-480-0.jpg',
        category: "Salsas",
        descripcion: "Sin colorantes, sabores ni espesantes artificiales añadidos. Hecho con huevos 100% de corral. Apto para vegetarianos. Frasco x 562gr"
    },
    {
        id: '13',
        nombre: "TABASCO CHIPPOTLE",
        precio: 510,
        stock: 10,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/206/252/products/tab21-59fab2a6b03924c52116002725604772-480-0.jpg',
        category: "Salsas",
        descripcion: "El sabor suave y ahumado de la Salsa TABASCO® Chipotle es ideal para comidas que llevan barbacoa o van a la parrilla. Usá un buen chorro para marinar y cocinar un bife, cerdo, pollo o verduras.\nDe hecho, poniéndole un par de gotas de salsa a tu plato favorito es la manera ideal de lograr un intenso sabor asado, ¡y sin siquiera encender la plancha!. Botellita x 60ml"
    }
]
export default productos
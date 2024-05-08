const iconSocial = [
    {
        id: 1,
        name: "Facebook",
        icon: "assets/icons/Icon_facebook.png",
        url: "https://www.facebook.com/",
    },
    {
        id: 2,
        name: "Instagram",
        icon: "assets/icons/Icon_instagram.png",
        url: "https://www.instagram.com/",
    },
    {
        id: 3,
        name: "Twitter",
        icon: "assets/icons/Icon_twitter.png",
        url: "https://www.twitter.com/",
    },
    {
        id: 4,
        name: "YouTube",
        icon: "assets/icons/Icon_youtube.png",
        url: "https://www.youtube.com/",
    },
];

const menu = [
    {
        id: 1,
        name: "Filete de bacalao blanco",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        price: '20'
    },
    {
        id: 2,
        name: "Filete con mantequilla de romero",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        price: '22'
    },
    {
        id: 3,
        name: "Ensalada de pepino",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        price: '18'
    },
    {
        id: 4,
        name: "Maridaje natural",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        price: '90'
    },
];

const features = [
    {
        id: 1,
        name: "Calidad Premium",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        icon: "assets/vectors/Icon_fish.svg"
    },
    {
        id: 2,
        name: "Productos de estación",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        icon: "assets/vectors/Icon_carrot.svg"
    },
    {
        id: 3,
        name: "Vegetales y frutas frescas",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        icon: "assets/vectors/Icon_lemon.svg"
    },
];

const blogs = [
    {
        id: 1,
        image: "assets/images/blog-image-1.webp",
        avatar: "assets/images/Avatar1.png",
        name: "Julie Christie",
        day: "October 17,2021",
        hour: "3:33 pm",
        comments: "2 comments",
        title: "Frutas y hortalizas y protección contra las enfermedades",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
        id: 2,
        image: "assets/images/blog-image-2.webp",
        avatar: "assets/images/Avatar2.png",
        name: "Dianne Russell",
        day: "October 17,2021",
        hour: "3:33 pm",
        comments: "2 comments",
        title: "Ensalada de primavera de espárragos con rúcula y queso de cabra",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
];

const categories = [
    {
        id: 1,
        name: "Entradas",
        image: "assets/images/Category1.webp",
        arrow: "assets/icons/Icon_arrow-right.svg"
    },
    {
        id: 2,
        name: "Principales",
        image: "assets/images/Category2.webp",
        arrow: "assets/icons/Icon_arrow-right.svg"
    },
    {
        id: 3,
        name: "Sopas",
        image: "assets/images/Category3.webp",
        arrow: "assets/icons/Icon_arrow-right.svg"
    },
];

const testimonials = [
    {
        id: 1,
        name: "Laura Quinteros",
        avatar: "/assets/images/Avatar3.png",
        testimonial: "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet. ",
    },
    {
        id: 2,
        name: "Matias Lascano",
        avatar: "/assets/images/Avatar1.png",
        testimonial: "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet. ",
    },
];

const entrantes = [
    {
        id: 1,
        titulo: "Ensalada de Quinoa y Vegetales Asados",
        descripcion: "Una mezcla fresca de quinoa cocida, vegetales de temporada asados (como pimientos, calabacines y berenjenas), mezclados con hojas verdes frescas y aliñado con vinagreta de limón y hierbas frescas.",
        precio: 12.50
    },
    {
        id: 2,
        titulo: "Tartar de Aguacate y Mango",
        descripcion: "Aguacate maduro y mango fresco picados finamente y sazonados con lima, cilantro y un toque de chile. Servido con chips de plátano macho crujientes.",
        precio: 11.00
    },
    {
        id: 3,
        titulo: "Carpaccio de Remolacha con Queso de Cabra",
        descripcion: "Rodajas finas de remolacha cruda marinadas en aceite de oliva y vinagre balsámico, servidas con rúcula fresca, nueces tostadas y queso de cabra desmenuzado.",
        precio: 10.75
    }
];

const principales = [
    {
        id: 1,
        titulo: "Risotto de Espárragos y Champiñones",
        descripcion: "Risotto cremoso hecho con arroz Arborio, espárragos frescos, champiñones salteados, caldo vegetal y queso parmesano. Terminado con hierbas frescas y un toque de limón.",
        precio: 18.50
    },
    {
        id: 2,
        titulo: "Salmón Glaseado con Miel y Jengibre",
        descripcion: "Filete de salmón fresco glaseado con una mezcla de miel, jengibre y salsa de soja. Acompañado de verduras al vapor y arroz integral con semillas de sésamo.",
        precio: 22.00
    },
    {
        id: 3,
        titulo: "Cazuela de Quinoa y Verduras de Temporada",
        descripcion: "Una mezcla reconfortante de quinoa cocida con calabaza, brócoli, zanahorias y garbanzos, en una salsa de tomate casera y hierbas mediterráneas. Gratificado con queso feta desmenuzado.",
        precio: 16.75
    }
];

const postres = [
    {
        id: 1,
        titulo: "Tarta de Manzana y Almendras",
        descripcion: "Una tarta clásica con una twist saludable: base de masa quebrada integral rellena de manzanas frescas, almendras laminadas y un toque de canela. Horneada a la perfección y servida con una bola de helado de vainilla.",
        precio: 9.00
    },
    {
        id: 2,
        titulo: "Mousse de Chocolate Amargo con Frutos Rojos",
        descripcion: "Mousse ligera y aireada de chocolate amargo, endulzada con un toque de miel orgánica. Decorada con frutos rojos frescos como fresas y frambuesas. Una delicia indulgente pero equilibrada.",
        precio: 10.50
    },
    {
        id: 3,
        titulo: "Helado Artesanal de Coco y Mango",
        descripcion: "Una combinación refrescante de helado artesanal elaborado con leche de coco y trozos naturales de mango. Sin conservantes ni colorantes artificiales. Perfecto para cerrar una comida fresca y sabrosa.",
        precio: 8.50
    }
];

const tragos = [
    {
        id: 1,
        titulo: "Mojito de Pepino y Albahaca",
        descripcion: "Una refrescante variación del clásico mojito con rodajas de pepino fresco y hojas de albahaca. Combinado con ron blanco, jugo de lima, un toque de jarabe de agave y soda. Servido en vaso alto con hielo picado.",
        precio: 12.00
    },
    {
        id: 2,
        titulo: "Gin-Tónico de Lavanda y Arándanos",
        descripcion: "Una versión aromática del gin-tónico con gin premium infusionado con lavanda seca y adornado con arándanos frescos. Completado con tónica premium y una ramita de lavanda para decorar. Un trago elegante y floral.",
        precio: 14.50
    },
    {
        id: 3,
        titulo: "Cóctel de Maracuyá y Hierbabuena",
        descripcion: "Un cóctel tropical y refrescante con puré de maracuyá fresco, hojas de hierbabuena, vodka premium y un toque de jugo de limón. Agitado y servido en copa de martini, decorado con una hoja de hierbabuena.",
        precio: 13.00
    }
];

const contact = [
    {
        id: 1,
        email: 'info@foodzero.com',
        phone: '+86 852 346 000',
        direction: '1959 Sepulveda Blvd. Culver City, CA, 90230'
    }
];

const links = [
    {
        id: 1,
        name: 'Home',
        url: '/'
    },
    {
        id: 2,
        name: 'Menu',
        url: '/menu'
    },
    {
        id: 3,
        name: 'Sobre Nosotros',
        url: '/about'
    },
    {
        id: 4,
        name: 'Portfolio',
        url: '/portfolio'
    },
    {
        id: 5,
        name: 'Blog',
        url: '/blog'
    },
    {
        id: 6,
        name: 'Contacto',
        url: '/contact'
    },
];


export { iconSocial, menu, features, blogs, categories, testimonials, entrantes, principales, postres, tragos, contact, links }
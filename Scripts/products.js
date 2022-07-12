//this script is to declare the different products and to create the DOM elements dynamically

//created an Object Constructor to create the objects for the products

function products(id, name, price, size, imageSrc, pageSrc) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.size = size;
  this.imageSrc = imageSrc;
  this.pageSrc = pageSrc;
}

let product1 = new products(
  "1",
  "granola Small",
  "20",
  "200",
  "./images/GRANOLA PEQUEÑA.png",
  "./products-page/granola.html"
);
let product2 = new products(
  "2",
  "granola Medium",
  "30",
  "300",
  "./images/GRANOLA MEDIANA.png",
  "./products-page/granola.html"
);
let product3 = new products(
  "3",
  "granola Large",
  "45",
  "450",
  "./images/GRANOLA GRANDE.png",
  "./products-page/granola.html"
);
let product4 = new products(
  "4",
  "jam Strawberry",
  "25",
  "300",
  "./images/strawberry jam.png",
  "./products-page/mermeladafresa.html"
);
let product5 = new products(
  "5",
  "jam Membrillo",
  "25",
  "300",
  "./images/istockphoto-1147544807-612x612.jpg",
  "./products-page/mermeladademembrillo.html"
);
let product6 = new products(
  "6",
  "jam Pineapple",
  "25",
  "300",
  "./images/pineapple jam.png",
  "./products-page/mermeladapiña.html"
);
let product7 = new products(
  "7",
  "peanut Butter",
  "25",
  "250",
  "./images/mantequilla_de_mani.png",
  "./products-page/mantequillademani.html"
);

let arrayOfProducts = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
];

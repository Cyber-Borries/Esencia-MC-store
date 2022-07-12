const productsElement = document.querySelector(".column-3");
const cartItemsElement = document.querySelector(".items-container");
const courierElement = document.querySelector(".choose_courier");
const subTotalElement = document.querySelector(".subtotal");
const totalElement = document.querySelector(".total");
const vatElement = document.querySelector(".vat");
const submitOrderBtn = document.querySelector(".checkout");
const delivery = document.querySelector(".delivery");
const collect = document.querySelector(".collect");
let isDelivery = false;
let discountInput = document.querySelector("#couponCode");
let discountAmount = 0;
var shippingCost = 0;
let totalPrice = 0;
let vatAmount = 0;
let totalAmount = 0;
let vat = 1.15;
let totalItems = 0;

let cart = JSON.parse(localStorage.getItem("cart")) || [];
// Function that stores the cart array as JSON file.
function storeCart() {
  sessionStorage.setItem("shopCart", JSON.stringify(cart));
}
//function to set cart as localStorage and to check if this is the first time the pages loads
function myLoad() {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("hasCodeRunBefore", true);
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  updateCart();
  const ovnCourier = document.getElementById("#ovnCourier");
}
//rendering products
function renderProducts() {
  arrayOfProducts.forEach((product) => {
    productsElement.innerHTML += `
    <div class="column-3">
    <h4>${product.name}</h4>
    <img src="${product.imageSrc}" alt="" />
    <p> ${product.price}</p>
  <button class="show-details"> <a href="${product.pageSrc}"> See more</a></button>
  <button class="shop-item-button" onclick="addToCart(${product.id})">Add to cart</button>
  </div>
    `;
  });
}

renderProducts();

updateCart();

//update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  //save cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

//function for sub total for cart

function renderSubtotal() {
  totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  totalPrice += shippingCost;
  totalPrice -= discountAmount;
  subTotalElement.innerHTML = `Subtotal (${totalItems} items): R${totalPrice.toFixed(
    2
  )}`;
  totalAmount = totalPrice /= 1.15;
  vatAmount = totalPrice -= totalPrice /= 1.15;
  vatElement.innerHTML = `VAT: R${vatAmount.toFixed(2)}`;
  totalElement.innerHTML = `Total: R${totalAmount.toFixed(2)}`;
  addToCart();
}

function addToCart(id) {
  //check if product is in cart already
  cart = JSON.parse(localStorage.getItem("cart"));
  let myVariable = cart.some((item) => item.id === id);
  totalCalc();
  console.log(totalPrice);
  console.log(totalAmount);

  if (myVariable) {
    alert("Product already in cart!");
  } else {
    let item = arrayOfProducts.find((products) => products.id == id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

//render cart items

function renderCartItems() {
  cartItemsElement.innerHTML = ""; //to clear any items in the cart
  cart.forEach((item) => {
    cartItemsElement.innerHTML += `
        <div class="item">
                <h5>${item.name}</h5>
                <img src="${item.imageSrc}" alt="${item.imageSrc}" />
        </div>
        <div class="item-pricing">
                <span class="cart-price">${item.price}</span>

        </div>
    `;
  });
}

// discount coupon function on anything except an empty string
function discount() {
  if (discountInput == "") {
    discountAmount = 0;
  } else {
    discountAmount = 25;
  }
  updateCart();
  renderSubtotal();
}
//function to allow user to choose a shipping option
function changeShipping(e) {
  switch (e) {
    case "delivery":
      shippingCost = 35;
      courierElement.style.display = "block";
      isDelivery = true;
      break;
    case "collect":
      shippingCost = 0;
      break;
    default:
      alert("Please choose a shipping method");
      break;
  }
  // console.log(e);
}
//function to allow the user to choose what type of courier
function courierShipping() {
  console.log(isDelivery);
  if (isDelivery == true && nrmlCourier.checked) {
    console.log("Nrml Shipping cost: " + shippingCost);
    shippingCost = 50;
  }
  if (isDelivery == true && ovnCourier.checked) {
    console.log("Ovn Shipping cost: " + shippingCost);
    shippingCost = 85;
  }
  updateCart();
  renderSubtotal();
}
//function to give the user a order number
function cartCheckout() {
  let referenceNumber = Math.floor(Math.random() * 1000);
  let orderSubTotal = subTotalElement.innerHTML;
  alert(
    `Order successful, total price is ${orderSubTotal} and your order reference number is ${referenceNumber}`
  );
}

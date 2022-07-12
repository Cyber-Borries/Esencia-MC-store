function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

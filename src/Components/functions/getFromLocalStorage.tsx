export function getBasketFromLocalStorage() {
  const basketData = localStorage.getItem("basket");
  return basketData ? JSON.parse(basketData) : null;
}

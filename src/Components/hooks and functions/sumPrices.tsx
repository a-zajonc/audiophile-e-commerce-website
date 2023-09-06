export function sumPrices(shoppingBasket: any) {
  const initialValue = 0;
  if (shoppingBasket) {
    const sum = shoppingBasket.map((item: any) =>
      Number(item.price.split(",").join(""))
    );
    const total = sum
      .reduce(
        (accumulator: any, currentValue: any) => accumulator + currentValue,
        initialValue
      )
      .toLocaleString("en-US");
    return total;
  }
  return "0";
}

export function sumWithTax(shoppingBasket: any, tax: number) {
  //   return sumPrices(shoppingBasket).replace(",", "");
  const result = Number(sumPrices(shoppingBasket).replace(",", "")) * tax;
  return Math.ceil(result).toLocaleString("en-US");
}

export function sumGrandTotal(shoppingBasket: any, shippingCost: number) {
  const result =
    Number(sumPrices(shoppingBasket).replace(",", "")) + shippingCost;
  return result.toLocaleString("en-US");
}

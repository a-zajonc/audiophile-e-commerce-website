import * as React from "react";

export function useSumPrices(shoppingBasket: any) {
  const [total, setTotal] = React.useState("0");

  React.useEffect(() => {
    const initialValue = 0;

    if (shoppingBasket) {
      const newTotal = shoppingBasket
        .reduce(
          (accumulator: number, item: any) =>
            accumulator +
            Number(item.price.split(",").join("")) * item.quantity,
          initialValue
        )
        .toLocaleString("en-US");

      setTotal(newTotal);
    } else {
      setTotal("0");
    }
  }, [shoppingBasket]);
  return total;
}

export function useSumWithTax(total: any, tax: number) {
  const result = Number(total.replace(",", "") * tax);
  return Math.ceil(result).toLocaleString("en-US");
}

export function useSumGrandTotal(total: any, shippingCost: number) {
  const result = Number(total.replace(",", "")) + shippingCost;
  return result.toLocaleString("en-US");
}

import { useContext } from "react";
import { BasketContext } from "../../context";

export function useAddToBasket() {
  const { setBasket } = useContext(BasketContext);

  const addToBasket = (
    productName: any,
    productCartImg: any,
    productPrice: any
  ) => {
    const productToAddToBasket = {
      name: productName,
      img: productCartImg,
      price: productPrice,
    };

    setBasket((prevBasket: any) => {
      const updatedBasket = Array.isArray(prevBasket) ? [...prevBasket] : [];
      updatedBasket.push(productToAddToBasket);
      return updatedBasket;
    });
  };

  return addToBasket;
}

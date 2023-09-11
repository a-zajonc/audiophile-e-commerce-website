import { useContext } from "react";
import { BasketContext } from "../../context";

export function useAddToBasket() {
  const { setBasket } = useContext(BasketContext);

  const addToBasket = (
    productName: any,
    productCartImg: any,
    productPrice: any,
    quantity: any
  ) => {
    setBasket((prevBasket: any) => {
      if (!prevBasket) {
        return [
          {
            name: productName,
            img: productCartImg,
            price: productPrice,
            quantity: quantity,
          },
        ];
      }
      const index = prevBasket.findIndex(
        (item: any) => item.name === productName
      );

      if (index !== -1) {
        const updatedBasket = prevBasket.map((item: any, i: number) => {
          if (i === index) {
            return {
              ...item,
              quantity: (item.quantity || 1) + 1,
            };
          }
          return item;
        });
        return updatedBasket;
      } else {
        return [
          ...prevBasket,
          {
            name: productName,
            img: productCartImg,
            price: productPrice,
            quantity: quantity,
          },
        ];
      }
    });
  };

  return addToBasket;
}

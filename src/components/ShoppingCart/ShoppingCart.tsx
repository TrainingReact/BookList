import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortAndDeduplicateDiagnostics } from "typescript";
import { deleteBooksToCart } from "../../asyncCallThunkToolkit/BooksAdded/deleteBooksToCart";
import { getBooksAddedToCart } from "../../asyncCallThunkToolkit/BooksAdded/getBooksAddedToCart";
import { useHistory } from "react-router-dom";
function ShoppingCart() {
  const store = useSelector(
    (state: any) => state.booksAddedToCart.booksAddedToCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAddedToCart());
  }, [dispatch]);

  const hisotry = useHistory();

  const handleDeleteItemFromShoppingCart = (id: number) => {
    dispatch(deleteBooksToCart(id));
    console.log(store.length);
    // if (store.length === 1) hisotry.push("/");
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>SHOPPING CART</h1>
      </div>
      {store &&
        store.map((val: any, index: number) => {
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
              key={index}
            >
              <div> {val?.name?.value} </div>
              <div>
                <button
                  onClick={() => handleDeleteItemFromShoppingCart(val.id)}
                >
                  remove from cart
                </button>
              </div>
            </div>
          );
        })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <h1>prezzo : </h1>
      </div>
    </div>
  );
}

export default ShoppingCart;

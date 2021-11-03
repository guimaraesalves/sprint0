import React from "react";
import "./Products.css";
function Product({ handleClick, showProducts }) {
  return (
    <>
      <div className="main_content box">
        {showProducts().map((prod, id) => (
          <div className="card box-products" key={id}>
            <div className="card_img box-img">
              <img src={prod.thumb} alt="" />
            </div>
            <div className="box-position">
              <div className="box-name space">{prod.name}</div>
              <div className="box-category space">{prod.category}</div>
              <div className="box-price space">R$ {prod.price.toFixed(2)}</div>
              <button className="btn" onClick={() => handleClick(prod)}>
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;

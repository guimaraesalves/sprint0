import React from "react";
import Product from "../Product/Product";
import "./MenuContainer.css";

const MenuContainer = ({
  total,
  currentSale,
  setCurrentSale,
  handleClick,
  showProducts,
}) => {
  function handleRemover(produto) {
    setCurrentSale(currentSale.filter((item) => item !== produto));
  }

  return (
    <div>
      <div className="Container">
        <Product
          handleClick={handleClick}
          showProducts={showProducts}
          currentSale={currentSale}
        />
        <div className="new-box">
          <div className="container-box">
            <div className="price">Carrinho de compras</div>
            <div className="container-price">
              {!currentSale.length ? (
                <>
                  <h3>Sua sacola está vazia</h3>
                  <p>Carrinho Vazio</p>
                </>
              ) : (
                <>
                  {currentSale.map((prod, index) => (
                    <div className="box-new-products" key={index}>
                      <div className="img">
                        <img src={prod.img} alt="hamburgueria" />
                      </div>
                      <div className="box-food">
                        <div className="box-name space">{prod.name}</div>
                        <div className="box-category space">
                          {prod.category}
                        </div>

                        <button onClick={() => handleRemover(prod)}>
                          Remover
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="total">
                    <p className="total-value">Valor Total</p>
                    <p className="total-price">R$ {total.toFixed(2)}</p>
                  </div>
                  <button
                    className="button-total"
                    onClick={() => setCurrentSale([])}
                  >
                    Remover tudo
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;

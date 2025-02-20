import React from "react";
import './shopProduct.css'

const ShopProduct = ({ products }) => {
  return (
    <section className="wpo-shop-section">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="shop-grids">
              {products.length > 0 &&
                products.map((product) => (
                  <div className="grid-item" key={product.id}>
                    <div className="img-holder">
                      <img src={product.pImg} alt={product.title} />
                    </div>
                    <div className="pdt_details">
                      <h3>
                          {product.title}
                      </h3>
                      <span>Rs {product.price}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProduct;

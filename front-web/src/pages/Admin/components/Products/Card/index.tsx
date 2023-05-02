import React from "react";
import './styles.scss';
import ProductPrice from "../../../../../core/components/ProductPrice"; 

const Card = () => {
  return (
      <div className="card-base product-card-admin">
          <div className="row">
              <div className="col-2 text-center border-end py-3">
                  <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg"
                      alt="imagem testes"
                      className="product-card-image-admin"
                  />
              </div>
              <div className="col-7 py-3">
                  <h3 className="product-card-name-admin">Computador i7</h3>
                  <ProductPrice price={40.5} />
                  <div>
                      <span className="badge bg-secondary me-1">Categoria 1</span>
                      <span className="badge bg-secondary ">Categoria 2</span>
                  </div>
              </div>
              <div className="col-3 py-3 pr-5">
                  <button
                      type="button"
                      className="btn btn-outline-primary btn-block border-radius-10 mb-3 btn-edit"
                  >
                    EDITAR
                  </button> <br />
                  <button
                      type="button"
                      className="btn btn-outline-primary btn-block border-radius-10"
                 >
                    EXCLUIR
                 </button>
              </div>
          </div>
      </div>
  )
}

export default Card;
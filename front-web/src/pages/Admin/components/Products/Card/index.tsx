import React from "react";
import './styles.scss';
import ProductPrice from "../../../../../core/components/ProductPrice";
import { Product } from "../../../../../core/types/Product";
import { Link } from "react-router-dom";

type Props = {
    product: Product;
    onRemove: (productId: number) => void;
}

const Card = ({ product, onRemove }: Props) => {
  return (
      <div className="card-base product-card-admin">
          <div className="row">
              <div className="col-2 text-center border-end py-3">
                  <img
                      src={product.imgUrl}
                      alt={product.name}
                      className="product-card-image-admin"
                  />
              </div>
              <div className="col-7 py-3">
                  <h3 className="product-card-name-admin">{product.name}</h3>
                  <ProductPrice price={product.price} />
                  <div>
                    <span className="badge bg-secondary me-1">Categoria 01</span>
                    <span className="badge bg-secondary me-1">Categoria 02</span>
                  </div>
              </div>
              <div className="col-3 py-3 pr-5">
                  <Link to={`/admin/products/${product.id}`}
                      type="button"
                      className="btn btn-outline-primary btn-block border-radius-10 mb-3 btn-outline-secondary"
                  >
                    EDITAR
                  </Link> <br />
                  <button
                      type="button"
                      className="btn btn-outline-primary btn-block border-radius-10"
                      onClick={() => onRemove(product.id)}
                 >
                    EXCLUIR
                 </button>
              </div>
          </div>
      </div>
  )
}

export default Card;
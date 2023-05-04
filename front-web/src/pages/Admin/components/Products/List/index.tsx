import React, {useCallback, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Card from '../Card';
import { ProductsResponse } from "../../../../../core/types/Product";
import Pagination from "core/components/Pagination";
import { makePrivateRequest, makeRequest } from "core/utils/request";
import { toast } from "react-toastify";

const List = () => {
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();

    const getProducts = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage:4,
            direction: 'DESC',
            orderBy: 'id'
        }

        setIsLoading(true);
        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage])

    useEffect(() => {
        getProducts();
    }, [getProducts]);

  const handleCreate = () => {
    history.push('/admin/products/create');
  }

  const onRemove = (productId: number) => {
  const confim = window.confirm('Deseja realmente excluir este produto?');

    if ( confim ) {
        makePrivateRequest({ url:`/products/${productId}`, method: 'DELETE'})
          .then(() => {
              toast.info('Produto removido com sucesso!');
              getProducts();
          })
          .catch(() => {
              toast.error('Erro ao reemover produto!')
          })
    }
  }

  return (
      <div className="admin-products-list">
          <button className="btn btn-primary btn-lg" onClick={handleCreate}>
              ADICIONAR
          </button>
          <div className="admin-list-container">
              <h1>Listagem de produtos</h1>
              {productsResponse?.content.map(product => (
                  <Card product={product} key={product.id} onRemove={onRemove} />
              ))}
              {productsResponse && (
              <Pagination
                totalPages={productsResponse.totalPages}
                activePage={activePage}
                onChange={page => setActivePage(page)} />
              )}
          </div>
      </div>
  )
}

export default List;
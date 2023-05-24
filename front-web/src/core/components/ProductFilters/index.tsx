import React, {useEffect, useState} from "react";
import './style.scss';
import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import Select from "react-select";
import {makeRequest} from "../../utils/request";
import {Category} from "../../types/Product";

const ProductFilters = () => {
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    
    useEffect(() => {
        setIsLoadingCategories(true);
        makeRequest({ url: '/categories', method:"GET"})
            .then(response => setCategories(response.data.content))
            .finally(() => setIsLoadingCategories(false));
    }, []);
    
    return (
        <div className="card-base product-filters-container">
            <div className="input-search">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar produto"
                />
                <SearchIcon />
            </div>
            <Select
                name="categories"
                isLoading={isLoadingCategories}
                options={categories}
                getOptionLabel={ (option: Category) => option.name }
                getOptionValue={ (option: Category) => String(option.id) }
                className="filter-select-container"
                classNamePrefix="product-categories-select"
                placeholder="Categorias"
            />
            <button className="btn btn-outline-secondary border-radius-10">LIMPAR FILTRO</button>
            
        </div>
    )
}

export default ProductFilters;
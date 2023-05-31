import React, { useEffect, useState } from "react";
import './style.scss';
import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import Select from "react-select";
import { makeRequest } from "../../utils/request";
import { Category } from "../../types/Product";

export type FilterForm = {
    name?: string;
    categoryId?: number;
}

type Props = {
    onSearch: (filter: FilterForm) => void;
}

const ProductFilters = ({ onSearch }: Props) => {
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState<Category>();
    
    useEffect(() => {
        setIsLoadingCategories(true);
        makeRequest({ url: '/categories', method:"GET"})
            .then(response => setCategories(response.data.content))
            .finally(() => setIsLoadingCategories(false));
    }, []);
    
    const handleChangeName = (name: string) => {
        setName(name);
        onSearch({ name, categoryId: category?.id });
    }

    const handleChangeCategory = (category: Category) => {
       setCategory(category);
       onSearch({ name, categoryId: category?.id });
    }

    const clearFilter = () => {
        setCategory(undefined);
        setName('');

        onSearch({ name:'', categoryId: undefined });
    }

    return (
        <div className="card-base product-filters-container">
            <div className="input-search">
                <input
                    type="text"
                    value={name}
                    className="form-control"
                    placeholder="Pesquisar produto"
                    onChange={event => handleChangeName(event.target.value)}
                />
                <SearchIcon />
            </div>
            <Select
                name="categories"
                value={category}
                key={`select-${category?.id}`}
                isLoading={isLoadingCategories}
                options={categories}
                getOptionLabel={ (option: Category) => option.name }
                getOptionValue={ (option: Category) => String(option.id) }
                className="filter-select-container"
                classNamePrefix="product-categories-select"
                placeholder="Categorias"
                onChange={value => handleChangeCategory(value as Category)}
                isClearable
            />
            <button
                className="btn btn-outline-secondary border-radius-10"
                onClick={clearFilter}
                >
                    LIMPAR FILTRO
            </button>
            
        </div>
    )
}

export default ProductFilters;
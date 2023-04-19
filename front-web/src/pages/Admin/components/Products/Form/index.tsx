import React, {useState} from "react";
import './styles.scss'
import BaseForm from "../../BaseForm";
import {makePrivateRequest, makeRequest} from "../../../../../core/utils/request";

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

type FormState = {
    name?: string
    price?: string
    category?: string
    description?: string
}

const Form = () => {

    const [formData, setFormData] = useState<FormState>({
        name:'',
        price:'',
        category:'',
        description:''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({...data, [name]: value }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/245882/Console-Playstation-5-Standard-Edition-Sony_1638284860_gg.jpg',
            categories: [{ id: formData.category }]
        }

        makePrivateRequest({url: '/products', method:'POST', data: payload})
            .then(() => {
                setFormData({name: '', category: '', price:'', description:''})
            });

    }

    return (
        <form onSubmit={handleSubmit}>
        <BaseForm title="cadastrar um produto">
            <div className="row">
                <div className="col-6">
                    <input
                        value={formData.name}
                        name="name"
                        type="text"
                        className="form-control mb-5"
                        onChange={handleOnChange}
                        placeholder="Nome do produto"
                    />
                    <select value={formData.category} className="form-control mb-5" onChange={handleOnChange} name="category">
                        <option value="1">Livros</option>
                        <option value="2">Eletrônicos</option>
                        <option value="3">Computadores</option>
                    </select>
                    <input
                        value={formData.price}
                        name="price"
                        type="text"
                        className="form-control"
                        onChange={handleOnChange}
                        placeholder="Preço"
                    />
                </div>
                <div className="col-6">
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleOnChange}
                        className="form-control"
                        cols={30}
                        rows={10}
                    />
                </div>
            </div>
        </BaseForm>
        </form>
    )
}

export default Form;
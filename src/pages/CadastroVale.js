import React, { useState, useEffect } from "react";
import EditClientStyle from "../style/EditClientStyle";
import axios from "axios";
import Url from "../config/Config";
import { Link } from "react-router-dom";
import { getProducts } from "../model/Model";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CadastroVale = () => {
    const [quantity, setQuantity] = useState("");
    const [productId, setProductId] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts(); 
    }, []);

    async function fetchProducts() {
        const produtos = await getProducts();
        setProducts(produtos);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post(`${Url}/vouchers`, {
                quantity: quantity,
                productId: productId, 
            });
    
            window.location.href = "/vales";
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            toast.error('Erro ao cadastrar. Por favor, tente novamente.', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    };

    return (
        <div id="edit-client">
            <EditClientStyle />

            <h1 className="subtitulo">Cadastrar Vale</h1>

            <form onSubmit={handleSubmit}>
                <div className="divisao">
                    <label>
                        Quantidade:
                        <input
                            type="text"
                            value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}
                            placeholder="Digite a quantidade"
                            maxLength={50}
                            required
                        />
                    </label>
                </div>

                <div className="divisao">
                    <label>
                        Selecione o Produto:
                        <select required value={productId} onChange={(event) => setProductId(event.target.value)}>
                            <option value="">Selecione um produto</option>
                            {products.map(product => (
                                <option key={product.productId} value={product.productId}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="buttons">
                    <button type="submit">Cadastrar</button>
                    <Link to="/vales">
                        <button>Cancelar</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CadastroVale;

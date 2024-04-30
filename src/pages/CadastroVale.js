import React, { useState, useEffect } from "react";
import EditClientStyle from "../style/EditClientStyle";
import axios from "axios";
import Url from "../config/Config";
import { Link } from "react-router-dom";
import { getClientes, getProducts } from "../model/ClienteModel";

const CadastroVale = () => {
    const [quantity, setQuantity] = useState("");
    const [productId, setProductId] = useState(""); 
    const [clientes, setClientes] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchClientes();
        fetchProducts(); 
    }, []);

    async function fetchClientes() {
        const clientesAPI = await getClientes();
        setClientes(clientesAPI);
    }

    async function fetchProducts() {
        const produtos = await getProducts();
        setProducts(produtos);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post(`${Url}/vouchers`, {
            quantity: quantity,
            productId: productId, 
        });

        console.log(response);

        window.location.href = "/vales";
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
                        />
                    </label>
                </div>

                <div className="divisao">
                    <label>
                        Selecione o Produto:
                        <select value={productId} onChange={(event) => setProductId(event.target.value)}>
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

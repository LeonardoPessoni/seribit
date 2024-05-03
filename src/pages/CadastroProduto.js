import React, { useState, useEffect } from "react";
import EditClientStyle from "../style/EditClientStyle";
import axios from "axios";
import Url from "../config/Config";
import { Link } from "react-router-dom";
import { getClientes } from "../model/Model";

const CadastroProduto = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [clientId, setClientId] = useState(""); 

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchClientes();
    }, []);

    async function fetchClientes() {
        const clientesAPI = await getClientes();
        setClientes(clientesAPI);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formattedPrice = price.replace(",", ".");

        const response = await axios.post(`${Url}/products`, {
            name: name,
            price: formattedPrice,
            clientId: clientId, 
        });

        console.log(response);

        window.location.href = "/produtos";
    };

    return (
        <div id="edit-client">
            <EditClientStyle />

            <h1 className="subtitulo">Cadastrar</h1>

            <form onSubmit={handleSubmit}>
                <div className="divisao">
                    <label>
                        Nome do Produto:
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Digite o nome do produto"
                        />
                    </label>
                </div>

                <div className="divisao">
                    <label>
                        Preço:
                        <input
                            type="text"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                            placeholder="Digite o preço do produto"
                        />
                    </label>
                </div>

                <div className="divisao">
                    <label>
                        Selecione o Cliente:
                        <select value={clientId} onChange={(event) => setClientId(event.target.value)}>
                            <option value="">Selecione um cliente</option>
                            {clientes.map(cliente => (
                                <option key={cliente.clientId} value={cliente.clientId}>
                                    {cliente.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="buttons">
                    <button type="submit">Cadastrar</button>
                    <Link to="/produtos">
                        <button>Cancelar</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CadastroProduto;

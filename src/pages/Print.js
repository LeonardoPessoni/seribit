import PrintStyle from "../style/PrintStyle"
import React, { useState, useEffect } from "react";
import { getClientesID, getProductsId, getValesId } from "../model/Model";
import gerarPDF, { Margin } from 'react-to-pdf';
import { useParams } from "react-router-dom";

const Print = () => {

    const { id } = useParams();
    const [vales, setVales] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [clientes, setClientes] = useState({
        address: {
            cep: '',
            complement: '',     
            neighborhood: '',
            number: '',
            state: '',
            street: '',
        },
        cpfCnpj: '',
        email: '',
        name: '',
        phone: {
            ddd: '',
            phone: ''
        }

    });
    
    useEffect(() => {
        async function fetchVales() {
            try {
                const response = await getValesId({ id: id});
                setVales(response);
                console.log(response);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        if (id) {
            fetchVales();
        }
    }, [id]);

    const idProduto = vales.productId;

    useEffect(() => {
        async function fetchProdutos() {
            try {
                const response = await getProductsId({ id: idProduto });
                setProdutos(response);
                console.log(response);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        if (idProduto) {
            fetchProdutos();
        }
    }, [idProduto]);

    const idCliente = produtos.clientId;

    useEffect(() => {
        async function fetchClientes() {
            try {
                const response = await getClientesID({ id: idCliente });
                setClientes(response);
                console.log(response);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        if (idCliente) {
            fetchClientes();
        }
    }, [idCliente]);

    const personalizar = {
        method: 'open',
        page: {
        margin: Margin.SMALL,
        format: 'A4',
        orientation: 'portrait'
        }
    };
    
        const PDF = () => document.getElementById('conteudo');

    return (
        <div id="page">
            <PrintStyle />

            <div id="conteudo">

                <div className="borda">
                    <div className="cabecalho-completo">
                        <h2>SERIBIT</h2>

                        <div className="cabecalho">
                            <div className="divisao">
                                <h5 className="num">Nº do Vale:</h5>
                                <p>{vales.voucherId}</p>
                            </div>

                            <div className="divisao">
                                <h5>Valor Total:</h5>
                                <p>R${vales.total}</p>
                            </div>
                        </div>
                    </div>

                    <div className="teste">
                        <div>
                            <div className="divisao">
                                <h5>Produto:</h5>
                                <p>{produtos.name}</p>
                            </div>
                            <div className="divisao">
                                <h5>Quantidade:</h5>
                                <p>{vales.quantity}</p>
                            </div>
                            <div className="divisao">
                                <h5>Cliente:</h5>
                                <p>{clientes.name}</p>
                            </div>
                            <div className="divisao">
                                <h5>Endereço</h5>
                                <p>{clientes.address.street}, {clientes.address.number} - {clientes.address.neighborhood}   CEP: {clientes.address.cep}</p>
                            </div>
                            <div className="divisao">
                                <h5>Assinatura:</h5>
                                <p className="linha"></p>
                            </div>
                        </div>

                        <div>
                            <br />
                            <div className="divisao" id="space">
                                <h5>Valor Unitário:</h5>
                                <p>R${produtos.price}</p>
                            </div> 
                            <div className="divisao">
                                <h5>Contato(s):</h5>
                                <p>({clientes.phone.ddd}) {clientes.phone.phone}</p>
                            </div>
                            <br />
                            <div className="divisao" id="space">
                                <h5>Data e Hora:</h5>
                                <p>{vales.createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pontilhado"></div>

                <div className="borda">
                    <div className="cabecalho-completo">
                        <h2>SERIBIT</h2>

                        <div className="cabecalho">
                            <div className="divisao">
                                <h5 className="num">Nº do Vale:</h5>
                                <p>{vales.voucherId}</p>
                            </div>

                            <div className="divisao">
                                <h5>Valor Total:</h5>
                                <p>R${vales.total}</p>
                            </div>
                        </div>
                    </div>

                    <div className="teste">
                        <div>
                            <div className="divisao">
                                <h5>Produto:</h5>
                                <p>{produtos.name}</p>
                            </div>
                            <div className="divisao">
                                <h5>Quantidade:</h5>
                                <p>{vales.quantity}</p>
                            </div>
                            <div className="divisao">
                                <h5>Cliente:</h5>
                                <p>{clientes.name}</p>
                            </div>
                            <div className="divisao">
                                <h5>Endereço</h5>
                                <p>{clientes.address.street}, {clientes.address.number} - {clientes.address.neighborhood}   CEP: {clientes.address.cep}</p>
                            </div>
                            <div className="divisao">
                                <h5>Assinatura:</h5>
                                <p className="linha"></p>
                            </div>
                        </div>

                        <div>
                            <br />
                            <div className="divisao" id="space">
                                <h5>Valor Unitário:</h5>
                                <p>R${produtos.price}</p>
                            </div> 
                            <div className="divisao">
                                <h5>Contato(s):</h5>
                                <p>({clientes.phone.ddd}) {clientes.phone.phone}</p>
                            </div>
                            <br />
                            <div className="divisao" id="space">
                                <h5>Data e Hora:</h5>
                                <p>{vales.createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="bottom">
                <button className="print-button" onClick={() => gerarPDF(PDF, personalizar)}>Imprimir</button>  
            </div>
        </div>
    )
}

export default Print
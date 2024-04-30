import React, { useState, useEffect } from "react";
import ClientesStyle from '../style/ClientesStyle';
import { Link } from "react-router-dom";
import { getVales, clienteAPI, getProducts, getClientes } from "../model/ClienteModel";

const Vales = () => {

  const [vales, setVales] = useState([]);
  const [products, setProducts] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetchVales();
    fetchProducts();
    fetchClientes(); 
  }, []);

  async function fetchClientes() {
    const clientesAPI = await getClientes();
    setClientes(clientesAPI);
  }

  async function fetchProducts() {
    const produtos = await getProducts();
    setProducts(produtos);
  }

  async function fetchVales() {
    const valesAPI = await getVales();
    setVales(valesAPI);
  }

  async function deleteVale(id) {
    await clienteAPI.delete(`/vouchers/${id}`);
    fetchVales();
  }

  return (
    <div id="clientes">
      <ClientesStyle />

      <div className="top">
        <Link to="/menu" className="button-register">Voltar</Link>
        <h1 className="subtitulo">Vales Cadastrados</h1>
      </div>

      <div className="mid">
        <div className='title'>
            <Link to='/cadastroVale' className='button-register'>Novo Vale</Link>
        </div>

        <table className='table'>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Nome do Cliente</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Excluir</th>
                    <th>Imprimir</th>
                </tr>
            </thead>
            <tbody>
              {vales.map((vale, key) => {
                  const product = products.find(prod => prod.productId === vale.productId);
                  const client = clientes.find(cli => cli.clientId === product.clientId);
                  return (
                      <tr key={key}>
                          <td>{vale.createdAt}</td>
                          <td>{client ? client.name : ''}</td> 
                          <td>{product ? product.name : ''}</td>
                          <td>{vale.quantity}</td>
                          <td>R$ {vale.total}</td>
                          <td className='button-cell'>
                              <button onClick={() => deleteVale(vale.voucherId)}>Excluir</button>
                          </td>
                          <td></td>
                      </tr>
                  );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vales;

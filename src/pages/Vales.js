import React, { useState, useEffect } from "react";
import ClientesStyle from '../style/ClientesStyle';
import { Link } from "react-router-dom";
import { getVales, clienteAPI, getProducts, getClientes } from "../model/Model";
import './Modal.css';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className='title'>Tem certeza disso?</h2>
        
        <div className="modal-buttons">
          <button className='buttonModalNo' onClick={onClose}>Não</button>
          <button className='buttonModalYes' onClick={onConfirm}>Sim</button>
        </div>
      </div>
    </div>
  );
};

const Vales = () => {

  const [vales, setVales] = useState([]);
  const [products, setProducts] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [openModals, setOpenModals] = useState({});

  const handleOpenModal = (id) => {
    setOpenModals(prevState => ({ ...prevState, [id]: true }));
  };

  const handleCloseModal = (id) => {
    setOpenModals(prevState => ({ ...prevState, [id]: false }));
  };

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
    try {
      await clienteAPI.delete(`/vouchers/${id}`);
      fetchVales();
    } catch (error) {
      console.error(error);
    } finally {
      handleCloseModal(id);
    }
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
                            <Link to={`/visualizarVale/${vale.voucherId}`}><button>Visualizar</button></Link>
                          </td>
                          <td className='button-cell'>
                            <button onClick={() => handleOpenModal(vale.voucherId)}>Excluir</button>
                          </td>
                          <Modal 
                            isOpen={openModals[vale.voucherId]} 
                            onClose={() => handleCloseModal(vale.voucherId)} 
                            onConfirm={() => deleteVale(vale.voucherId)} 
                          />
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

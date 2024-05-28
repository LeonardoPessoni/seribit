import React from 'react'
import { Link } from 'react-router-dom';
import ClientesStyle from '../style/ClientesStyle'
import { getClientes, clienteAPI } from "../model/Model";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const Clientes = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClientId, setCurrentClientId] = useState(null);

  const handleOpenModal = (id) => {
    setCurrentClientId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentClientId(null);
  };

  useEffect(() => {
    fetchClientes()
  }, []);

  async function fetchClientes() {
    const clientesAPI = await getClientes();
    setPosts(clientesAPI);
  }

  async function deleteCliente() {
    try {
      await clienteAPI.delete(`/clients/${currentClientId}`)
      fetchClientes()
      setIsModalOpen(false);
    } catch (error) {
      toast.error('Não é possível excluir este cliente, pois ele está vinculado a um produto ou vale.', {
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
  }

  return (
    <div id='clientes'>
      <ClientesStyle />
        <div className='top'>
          <Link to="/menu" className='button-register'>Voltar</Link>
          <h1>Clientes Cadastrados</h1>
        </div>

        <div className='mid'>
          <div className='title'>
            <Link to='/cadastroCliente' className='button-register'>Novo Cliente</Link>
          </div>

          <table className='table'>
          <thead >
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CPF/CNPJ</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, key) => {
              return (
                <tr key={key}>
                  <td>{post.name}</td>
                  <td>{post.email}</td>
                  <td>{post.cpfCnpj}</td>

                  <td className='button-cell'>
                    <Link to={`/editClient/${post.clientId}`}><button>Editar</button></Link>
                  </td>

                  <td className='button-cell'>
                    <button onClick={() => handleOpenModal(post.clientId)}>Excluir</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          </table>
        </div>
        <Modal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          onConfirm={deleteCliente} 
        />
    </div>
  )
}

export default Clientes
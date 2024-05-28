import React from 'react';
import { Link } from 'react-router-dom';
import ClientesStyle from '../style/ClientesStyle';
import { getFuncionarios, clienteAPI } from "../model/Model";
import { useState, useEffect } from "react";
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

const Usuarios = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFuncionarioId, setCurrentFuncionarioId] = useState(null);

  const handleOpenModal = (id) => {
    setCurrentFuncionarioId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentFuncionarioId(null);
  };

  useEffect(() => {
    fetchFuncionarios();
  }, []);

  async function fetchFuncionarios() {
    const clientesAPI = await getFuncionarios();
    setPosts(clientesAPI);
  }

  async function deleteFuncionario() {
    await clienteAPI.delete(`/employees/${currentFuncionarioId}`);
    fetchFuncionarios();
    handleCloseModal();
  }

  return (
    <div id='clientes'>
      <ClientesStyle />

      <div className='top'>
        <Link to="/menu" className='button-register'>Voltar</Link>
        <h1>Usuários Cadastrados</h1>
      </div>

      <div className='mid'>
        <div className='title'>
          <Link to='/cadastroFunc' className='button-register'>Novo Usuário</Link>
        </div>

        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CPF</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, key) => (
              <tr key={key}>
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.cpf}</td>

                <td className='button-cell'>
                  <Link to={`/editFuncionario/${post.employeeId}`}><button>Editar</button></Link>
                </td>

                <td className='button-cell'>
                  <button onClick={() => handleOpenModal(post.employeeId)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onConfirm={deleteFuncionario} 
      />
    </div>
  );
}

export default Usuarios;

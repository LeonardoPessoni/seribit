import React from 'react'
import { Link } from 'react-router-dom';
import ClientesStyle from '../style/ClientesStyle'
import { getClientes, clienteAPI } from "../model/Model";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Clientes = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchClientes()
  }, []);

  async function fetchClientes() {
    const clientesAPI = await getClientes();
    setPosts(clientesAPI);
  }

  async function deleteCliente(id) {
    try {
      await clienteAPI.delete(`/clients/${id}`)
      fetchClientes()
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
                    <button onClick={() => deleteCliente(post.clientId)}>Excluir</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          </table>
        </div>
    </div>
  )
}

export default Clientes
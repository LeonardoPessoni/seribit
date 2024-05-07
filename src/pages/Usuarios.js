import React from 'react'
import { Link } from 'react-router-dom';
import ClientesStyle from '../style/ClientesStyle'
import { getFuncionarios, clienteAPI } from "../model/Model";
import { useState, useEffect } from "react";

const Usuarios = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchFuncionarios()
  }, []);

  async function fetchFuncionarios() {
    const clientesAPI = await getFuncionarios();
    setPosts(clientesAPI);
  }

  async function deleteFuncionario(id) {
    await clienteAPI.delete(`/employees/${id}`)
    fetchFuncionarios()
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
          <thead >
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CPF</th>
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
                  <td>{post.cpf}</td>

                  <td className='button-cell'>
                    <Link to={`/editFuncionario/${post.employeeId}`}><button>Editar</button></Link>
                  </td>

                  <td className='button-cell'>
                    <button onClick={() => deleteFuncionario(post.employeeId)}>Excluir</button>
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

export default Usuarios
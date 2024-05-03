import React, { useState } from 'react';
import EditClientStyle from '../style/EditClientStyle';
import axios from 'axios';
import Url from '../config/Config';
import { Link } from 'react-router-dom';

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [state, setState] = useState('');
    const [cep, setCep] = useState('');
    const [complement, setComplement] = useState('');
    const [ddd, setDDD] = useState('');
    const [phone, setPhone] = useState('');
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post(`${Url}/clients`, {
                name: name,
                email: email,
                cpfCnpj: cpfCnpj,
                street: street,
                number: number,
                neighborhood: neighborhood,
                state: state,
                cep: cep,
                complement: complement,
                ddd: ddd,
                phone: phone
            });

            console.log('Cadastro realizado com sucesso!', response.data);

            window.location.href = '/clientes';
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }
        
    };

    return ( 
        <div id='edit-client'>
        <EditClientStyle />
            <h1 className='subtitulo'>Cadastrar</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    Nome
                    <input className='input-name'
                        type="text"
                        name={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome"
                    />
                </label>

                <div className='divisao'>
                    <label>
                        Email
                        <input className='input'
                            type="text"
                            name={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Digite seu email'
                        />
                    </label>
                    <label>
                        CPF/CNPJ
                        <input className='input'
                            type="text"
                            name={cpfCnpj}
                            onChange={(e) => setCpfCnpj(e.target.value)}
                            placeholder='Digite seu CPF ou CNPJ'
                        />
                    </label>
                </div>

                <div className='divisao'>
                    <label>
                        DDD
                        <input className='input'
                            type="text"
                            name={ddd}
                            onChange={e => setDDD(e.target.value)}
                            placeholder='Digite o DDD'
                        />
                    </label>
                    <label>
                        Telefone
                        <input className='input'
                            type="text"
                            name={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder='Digite o telefone'
                        />
                    </label>
                </div>

                <div className='divisao'>
                    <label>
                        CEP
                        <input className='input'
                            type="text"
                            name={cep}
                            onChange={e => setCep(e.target.value)}
                            placeholder='Digite o CEP'
                        />
                    </label>
                    <label>
                        Estado
                        <input className='input'
                            type="text"
                            name={state}
                            onChange={e => setState(e.target.value)}
                            placeholder='Digite o estado'
                        />
                    </label>
                </div>

                <div className='divisao'>
                    <label>
                        Bairro
                        <input className='input'
                            type="text"
                            name={neighborhood}
                            onChange={e => setNeighborhood(e.target.value)}
                            placeholder='Digite o bairro'
                        />
                    </label>
                    <label>
                        Endereço
                        <input className='input'
                            type="text"
                            name={street}
                            onChange={e => setStreet(e.target.value)}
                            placeholder='Digite o endereço'
                        />
                    </label>
                </div>
                
                <div className='divisao'>
                    <label>
                        Número
                        <input className='input'
                            type="text"
                            name="address"
                            onChange={e => setNumber(e.target.value)}
                            placeholder='Digite o número'
                        />
                    </label>
                    <label>
                        Complemento
                        <input className='input'
                            type="text"
                            name={complement}
                            onChange={e => setComplement(e.target.value)}
                            placeholder='Digite o complemento'
                        />
                    </label>
                </div>

                <div className='buttons'>
                    <button type="submit">Cadastrar</button>
                    <Link to="/clientes"><button>Cancelar</button></Link>
                </div>

            </form>        
        </div>
    );
};

export default Cadastro;

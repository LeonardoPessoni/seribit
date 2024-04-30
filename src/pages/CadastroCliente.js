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

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCpfCnpjChange = (event) => {
        setCpfCnpj(event.target.value);
    };

    const handleStreetChange = (event) => {
        setStreet(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleNeighborhoodChange = (event) => {
        setNeighborhood(event.target.value);
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleCepChange = (event) => {
        setCep(event.target.value);
    };

    const handleComplementChange = (event) => {
        setComplement(event.target.value);
    };

    const handleDddChange = (event) => {
        setDDD(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

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
                        onChange={handleNameChange}
                        placeholder="Digite seu nome"
                    />
                </label>

                <div className='divisao'>
                    <label>
                        Email
                        <input className='input'
                            type="text"
                            name={email}
                            onChange={handleEmailChange}
                            placeholder='Digite seu email'
                        />
                    </label>
                    <label>
                        CPF/CNPJ
                        <input className='input'
                            type="text"
                            name={cpfCnpj}
                            onChange={handleCpfCnpjChange}
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
                            onChange={handleDddChange}
                            placeholder='Digite o DDD'
                        />
                    </label>
                    <label>
                        Telefone
                        <input className='input'
                            type="text"
                            name={phone}
                            onChange={handlePhoneChange}
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
                            onChange={handleCepChange}
                            placeholder='Digite o CEP'
                        />
                    </label>
                    <label>
                        Estado
                        <input className='input'
                            type="text"
                            name={state}
                            onChange={handleStateChange}
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
                            onChange={handleNeighborhoodChange}
                            placeholder='Digite o bairro'
                        />
                    </label>
                    <label>
                        Endereço
                        <input className='input'
                            type="text"
                            name={street}
                            onChange={handleStreetChange}
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
                            onChange={handleNumberChange}
                            placeholder='Digite o número'
                        />
                    </label>
                    <label>
                        Complemento
                        <input className='input'
                            type="text"
                            name={complement}
                            onChange={handleComplementChange}
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

import React, { useState } from 'react';
import EditStyle from '../style/EditClientStyle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Url from '../config/Config';

function CadastroFunc() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [ddd, setDDD] = useState('');
    const [phone, setPhone] = useState('');

    const [salary, setSalary] = useState('');

    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [state, setState] = useState('');
    const [cep, setCep] = useState('');
    const [complement, setComplement] = useState('');


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCpfChange = (event) => {
        setCpf(event.target.value);
    };

    const handleUserChange = (event) => {
        setUser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
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
        if (password === confirmPassword) {
            try {
                const response = await axios.post(`${Url}/employees`, {
                    name: name,
                    email: email,
                    cpf: cpf,
                    user: user,
                    password: password,
                    salary: salary,
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

                window.location.href = '/usuarios';
            } catch (error) {
                console.error('Erro ao cadastrar:', error);
            }
        }
        else {
            alert('As senhas não coincidem!');
            return;
        }

    };

    return (
        <div id='edit-client'>
            <EditStyle />
            <h2 className='subtitulo'>Cadastro</h2>
            <form onSubmit={handleSubmit}>

                <div className='divisao'>
                    <label>
                        Nome
                        <input className='input'
                            type="text"
                            name={name}
                            onChange={handleNameChange}
                            placeholder="Digite seu nome"
                        />
                    </label>
                    <label>
                        Email
                        <input className='input'
                            type="text"
                            name={email}
                            onChange={handleEmailChange}
                            placeholder='Digite seu email'
                        />
                    </label>
                </div>

                <div className="divisao">
                    <label>
                        CPF
                        <input className='input'
                            type="text"
                            name={cpf}
                            onChange={handleCpfChange}
                            placeholder='Digite seu CPF'
                        />
                    </label>
                    <label>
                        Salário
                        <input className='input'
                            type="text"
                            name={salary}
                            onChange={handleSalaryChange}
                            placeholder='Digite o salário'
                        />
                    </label>
                </div>

                <label>
                    Usuário
                    <input className='input-name'
                        type="text"
                        name={user}
                        onChange={handleUserChange}
                        placeholder='Digite seu usuário'
                    />
                </label>

                <div className="divisao">
                    <label>
                        Senha
                        <input className='input'
                            type="password"
                            name={password}
                            onChange={handlePasswordChange}
                            placeholder='Digite sua senha'
                        />
                    </label>
                    <label>
                        Confirmação de senha
                        <input className='input'
                            type="password"
                            name={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder='Confirme sua senha'
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
                            maxLength={2}
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
                            maxLength={2}
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
                    <button className='buttonLogin' type="submit">Cadastrar</button>
                    <Link to="/usuarios"><button>Cancelar</button></Link>
                </div>
            </form>

        </div>
    );
};

export default CadastroFunc;

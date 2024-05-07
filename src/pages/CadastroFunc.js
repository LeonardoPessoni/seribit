import React, { useState } from 'react';
import EditStyle from '../style/EditClientStyle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Url from '../config/Config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleCepChange = async (event) => {
        const cepValue = event.target.value

        setCep(cepValue);

        if (cepValue.length === 8) { 
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`);
                if (!response.data.erro) {
                    setStreet(response.data.logradouro);
                    setNeighborhood(response.data.bairro);
                    setState(response.data.uf);
                }
            } catch (error) {
                console.error('Erro ao obter endereço:', error);
                toast.error('Erro ao obter endereço. Por favor, tente novamente.', {
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
                toast.error('Erro ao cadastrar. Por favor, tente novamente.', {
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
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome"
                            maxLength={50}
                            required
                        />
                    </label>
                    <label>
                        Email
                        <input className='input'
                            type="text"
                            name={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Digite seu email'
                            maxLength={50}
                            required
                        />
                    </label>
                </div>

                <div className="divisao">
                    <label>
                        CPF
                        <input className='input'
                            type="text"
                            name={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder='Digite seu CPF'
                            maxLength={11}
                            required
                        />
                    </label>
                    <label>
                        Salário
                        <input className='input'
                            type="text"
                            name={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder='Digite o salário'
                            maxLength={20}
                            required
                        />
                    </label>
                </div>

                <label>
                    Usuário
                    <input className='input-name'
                        type="text"
                        name={user}
                        onChange={(e) => setUser(e.target.value)}
                        placeholder='Digite seu usuário'
                        maxLength={10}
                        required
                    />
                </label>

                <div className="divisao">
                    <label>
                        Senha
                        <input className='input'
                            type="password"
                            name={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Digite sua senha'
                            maxLength={15}
                            required
                        />
                    </label>
                    <label>
                        Confirmação de senha
                        <input className='input'
                            type="password"
                            name={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder='Confirme sua senha'
                            maxLength={15}
                            required
                        />
                    </label>
                </div>

                <div className='divisao'>
                    <label>
                        DDD
                        <input className='input'
                            type="text"
                            name={ddd}
                            onChange={(e) => setDDD(e.target.value)}
                            placeholder='Digite o DDD'
                            maxLength={2}
                            required
                        />
                    </label>
                    <label>
                        Telefone
                        <input className='input'
                            type="text"
                            name={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder='Digite o telefone'
                            maxLength={9}
                            required
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
                            maxLength={8}
                            required
                        />
                    </label>
                    <label>
                        Estado
                        <input className='input'
                            type="text"
                            name={state}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            placeholder='Digite o estado'
                            maxLength={2}
                            required
                        />
                    </label>
                </div>

                <div className='divisao'>
                    <label>
                        Bairro
                        <input className='input'
                            type="text"
                            name={neighborhood}
                            value={neighborhood}
                            onChange={(e) => setNeighborhood(e.target.value)}
                            placeholder='Digite o bairro'
                            maxLength={30}
                            required
                        />
                    </label>
                    <label>
                        Endereço
                        <input className='input'
                            type="text"
                            name={street}
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            placeholder='Digite o endereço'
                            maxLength={30}
                            required
                        />
                    </label>
                </div>

                <div className='divisao'>
                    <label>
                        Número
                        <input className='input'
                            type="text"
                            name="address"
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder='Digite o número'
                            maxLength={10}
                            required
                        />
                    </label>
                    <label>
                        Complemento
                        <input className='input'
                            type="text"
                            name={complement}
                            onChange={(e) => setComplement(e.target.value)}
                            placeholder='Digite o complemento'
                            maxLength={30}
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

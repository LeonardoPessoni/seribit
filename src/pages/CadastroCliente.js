import React, { useState } from 'react';
import EditClientStyle from '../style/EditClientStyle';
import axios from 'axios';
import Url from '../config/Config';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        
        try {
            await axios.post(`${Url}/clients`, {
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

            window.location.href = '/clientes';
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
                        maxLength={50}
                        required
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
                            maxLength={50}
                            required
                        />
                    </label>
                    <label>
                        CPF/CNPJ
                        <input className='input'
                            type="text"
                            name={cpfCnpj}
                            onChange={(e) => setCpfCnpj(e.target.value)}
                            placeholder='Digite seu CPF ou CNPJ'
                            maxLength={14}
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
                            onChange={e => setDDD(e.target.value)}
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
                            onChange={e => setPhone(e.target.value)}
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
                            onChange={e => setState(e.target.value)}
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
                            onChange={e => setNeighborhood(e.target.value)}
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
                            onChange={e => setStreet(e.target.value)}
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
                            onChange={e => setNumber(e.target.value)}
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
                            onChange={e => setComplement(e.target.value)}
                            placeholder='Digite o complemento'
                            maxLength={30}
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

import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { clienteAPI } from '../model/Model';
import EditClientStyle from '../style/EditClientStyle';
import { Link } from 'react-router-dom/dist';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditClient = () => {
    const { id } = useParams();
    const [client, setClient] = useState({
        name: '',
        email: '',
        cpfCnpj: '',
        address: {
            street: '',
            neighborhood: '',
            number: '',
            state: '',
            cep: '',
            complement: ''
        },
        phone: {
            ddd: '',
            phone: ''
        }
    });

    useEffect(() => {
        fetchClientId();
    });

    async function fetchClientId() {
        try {
            const res = await clienteAPI.get(`/clients/${id}`);
            setClient(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const cpfCnpjRef = useRef(null);
    const streetRef = useRef(null);
    const neighborhoodRef = useRef(null);
    const numberRef = useRef(null);
    const stateRef = useRef(null);
    const cepRef = useRef(null);
    const dddRef = useRef(null);
    const phoneRef = useRef(null);
    const complementRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const updatedClient = {
                street: streetRef.current.value,
                neighborhood: neighborhoodRef.current.value,
                number: numberRef.current.value,
                state: stateRef.current.value,
                cep: cepRef.current.value,
                complement: complementRef.current.value,
                name: nameRef.current.value,
                email: emailRef.current.value,
                cpfCnpj: cpfCnpjRef.current.value,
                ddd: dddRef.current.value,
                phone: phoneRef.current.value,
            };

            const response = await clienteAPI.put(`/clients/${id}`, updatedClient);
            console.log("Deu bom!", response.data);
            window.location.href = '/clientes';
        } catch (error) {
            console.error('Erro ao editar:', error);
            toast.error('Erro ao editar. Por favor, tente novamente.', {
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
            <h1 className='subtitulo'>Editar Cliente</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    Nome
                    <input className='input-name'
                        type="text"
                        name="name"
                        defaultValue={client.name}
                        ref={nameRef}
                        maxLength={50}
                        required
                    />
                </label>

                <div className='divisao'>
                    <label>
                        Email
                        <input className='input'
                            type="text"
                            name="email"
                            defaultValue={client.email}
                            ref={emailRef}
                            maxLength={50}
                            required
                        />
                    </label>
                    <label>
                        CPF/CNPJ
                        <input className='input'
                            type="text"
                            name="cpfCnpj"
                            defaultValue={client.cpfCnpj}
                            ref={cpfCnpjRef}
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
                            name="cpfCnpj"
                            defaultValue={client.phone.ddd}
                            ref={dddRef}
                            maxLength={2}
                            required
                        />
                    </label>
                    <label>
                        Telefone
                        <input className='input'
                            type="text"
                            name="cpfCnpj"
                            defaultValue={client.phone.phone}
                            ref={phoneRef}
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
                            name="address"
                            defaultValue={client.address.cep}
                            ref={cepRef}
                            maxLength={8}
                            required
                        />
                    </label>
                    <label>
                        Estado
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={client.address.state}
                            ref={stateRef}
                            maxLength={30}
                            required
                        />
                    </label>
                </div>

                <div className='divisao'>
                    <label>
                        Bairro
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={client.address.neighborhood}
                            ref={neighborhoodRef}
                            maxLength={30}
                            required
                        />
                    </label>
                    <label>
                        Endereço
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={client.address.street}
                            ref={streetRef}
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
                            defaultValue={client.address.number}
                            ref={numberRef}
                            maxLength={10}
                            required
                        />
                    </label>
                    <label>
                        Complemento
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={client.address.complement}
                            ref={complementRef}
                        />
                    </label>
                </div>
                
                <div className='buttons'>
                    <button type="submit">Atualizar</button>
                    <Link to="/clientes"><button>Cancelar</button></Link>
                </div>
            </form>
        </div>
    );
};

export default EditClient;

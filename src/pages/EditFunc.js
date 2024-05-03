import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { clienteAPI } from '../model/Model';
import EditClientStyle from '../style/EditClientStyle';
import { Link } from 'react-router-dom/dist';

const EditFunc = () => {

    const { id } = useParams();
    const [employee, setEmployee] = useState({
        address: {
            cep: '',
            complement: '',     
            neighborhood: '',
            number: '',
            state: '',
            street: '', 
        },
        cpf: '',
        email: '',
        name: '',
        password: '',
        user: '',
        salary: '',
        phone: {
            ddd: '',
            phone: ''
        }
    });

    useEffect(() => {
        fetchEmployeeId();
    });

    async function fetchEmployeeId() {
        try {
            const res = await clienteAPI.get(`/employees/${id}`);
            setEmployee(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const cepRef = useRef(null);
    const complementRef = useRef(null);
    const neighborhoodRef = useRef(null);
    const numberRef = useRef(null);
    const stateRef = useRef(null);
    const streetRef = useRef(null);
    const cpfRef = useRef(null);
    const emailRef = useRef(null);
    const userRef = useRef(null);
    const passwordRef = useRef(null);
    const salaryRef = useRef(null);
    const nameRef = useRef(null);
    const dddRef = useRef(null);
    const phoneRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const updatedEmployee = {
                cep: cepRef.current.value,
                complement: complementRef.current.value,
                neighborhood: neighborhoodRef.current.value,
                number: numberRef.current.value,
                state: stateRef.current.value,
                street: streetRef.current.value,
                cpfCnpj: cpfRef.current.value,        
                email: emailRef.current.value,
                password: passwordRef.current.value,
                user: userRef.current.value,
                salary: salaryRef.current.value,
                name: nameRef.current.value,
                ddd: dddRef.current.value,
                phone: phoneRef.current.value,
            };

            const response = await clienteAPI.put(`/employees/${id}`, updatedEmployee);
            console.log("Deu bom!", response.data);
            window.location.href = '/usuarios';
        } catch (error) {
            console.log("Deu ruim!", error);
        }
    };

    return (
        <div id='edit-client'>
            <EditClientStyle />
            <h1 className='subtitulo'>Editar Funcionário</h1>

            <form onSubmit={handleSubmit}>

                <div className='divisao'>
                    <label>
                        Nome
                        <input className='input'
                            type="text"
                            name="name"
                            defaultValue={employee.name}
                            ref={nameRef}
                        />
                    </label>
                    <label>
                        Email
                        <input className='input'
                            type="text"
                            name="email"
                            defaultValue={employee.email}
                            ref={emailRef}
                        />
                    </label>     
                </div>

                <div className='divisao'>
                    <label>
                        CPF
                        <input className='input'
                            type="text"
                            name="cpf"
                            defaultValue={employee.cpf}
                            ref={cpfRef}
                        />
                    </label>
                    <label>
                        Salário
                        <input className='input'
                            type="text"
                            name="salario"
                            defaultValue={employee.salary}
                            ref={salaryRef}
                        />
                    </label>
                </div>

                <label>
                    Usuário
                    <input className='input-name'
                        type="text"
                        name="usuario"
                        defaultValue={employee.user}
                        ref={userRef}
                    />
                </label>

                <div className='divisao'>
                    <label>
                        Senha
                        <input className='input'
                            type="password"
                            name="senha"
                            defaultValue={employee.password}
                            ref={passwordRef}
                        />
                    </label>
                    <label>
                        Confirmação de senha
                        <input className='input'
                            type="password"
                            name="confirmenha"
                            defaultValue={employee.password}
                        />
                    </label>
                </div>

                <div className='divisao'>
                <label>
                        DDD
                        <input className='input'
                            type="text"
                            name="cpfCnpj"
                            defaultValue={employee.phone.ddd}
                            ref={dddRef}
                        />
                    </label>
                    <label>
                        Telefone
                        <input className='input'
                            type="text"
                            name="cpfCnpj"
                            defaultValue={employee.phone.phone}
                            ref={phoneRef}
                        />
                    </label>
                </div>

                <div className='divisao'>
                    <label>
                        CEP
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={employee.address.cep}
                            ref={cepRef}
                        />
                    </label>
                    <label>
                        Estado
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={employee.address.state}
                            ref={stateRef}
                        />
                    </label>
                </div>

                <div className='divisao'>
                    <label>
                        Bairro
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={employee.address.neighborhood}
                            ref={neighborhoodRef}
                        />
                    </label>
                    <label>
                        Endereço
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={employee.address.street}
                            ref={streetRef}
                        />
                    </label>
                </div>
                
                <div className='divisao'>
                    <label>
                        Número
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={employee.address.number}
                            ref={numberRef}
                        />
                    </label>
                    <label>
                        Complemento
                        <input className='input'
                            type="text"
                            name="address"
                            defaultValue={employee.address.complement}
                            ref={complementRef}
                        />
                    </label>
                </div>
                
                <div className='buttons'>
                    <button type="submit">Atualizar</button>
                    <Link to="/usuarios"><button>Cancelar</button></Link>
                </div>
            </form>

        </div>
    );
};

export default EditFunc;
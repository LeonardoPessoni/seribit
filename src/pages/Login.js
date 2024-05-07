import React, { useState } from 'react';
import LoginStyle from '../style/LoginStyle';
import Logo from '../images/Vector.png';
import Input from '../components/Input';
import postUser from '../model/LoginModel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!username || !password) {
            toast.info('Por favor, preencha todos os campos!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
            return;
        };
    
        try {
            const loginSuccessful = postUser(username, password, setUsername, setPassword);
            
            if (!loginSuccessful) {
                toast.error('Usuário ou senha incorretos!', {
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
        } catch (error) {
            console.error('Ocorreu um erro ao fazer login:', error);
        }
    };
    

    return ( 
        <div className='login'>
            <LoginStyle />

            <div className='left'>
                <h2 className='subtitulo'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input'>
                        <Input 
                            props={{
                                label: "Usuário",
                                type: "text",
                                value: username,
                                onChange: (e) => setUsername(e.target.value),
                                placeholder: "Digite seu usuário",
                                maxLength: 45
                            }}
                        />
                    </div>

                    <div className='input'>
                        <Input 
                            props={{
                                label: "Senha",
                                type: "password",
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: "Digite sua senha",
                                maxLength: 45
                            }}
                        />    
                    </div>

                    <button className='buttonLogin' type="submit">Entrar</button>
                </form>        
            </div>

            <div className='right'>
                <img src={Logo} alt="Logo Seribit" className='seribit'/>
                <p className='descripton'>Management System</p>
            </div>
        </div>
    );
};

export default Login;

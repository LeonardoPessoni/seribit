import React, { useState } from 'react';
import LoginStyle from '../style/LoginStyle';
import Logo from '../images/Vector.png';
import Input from '../components/Input';
import postUser from '../model/LoginModel';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        postUser(username, password, setUsername, setPassword);

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
                                onChange: handleUsernameChange,
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
                                onChange: handlePasswordChange,
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

import { createGlobalStyle } from 'styled-components';
import BackgroundHome from '../images/background.png'


const LoginStyle = createGlobalStyle`
    body {
        background-image: linear-gradient(283deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 30%,rgba(130, 130, 130,0.04) 30%, rgba(130, 130, 130,0.04) 49%,rgba(31, 31, 31,0.04) 49%, rgba(31, 31, 31,0.04) 100%),linear-gradient(297deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 20%,rgba(130, 130, 130,0.04) 20%, rgba(130, 130, 130,0.04) 60%,rgba(31, 31, 31,0.04) 60%, rgba(31, 31, 31,0.04) 100%),linear-gradient(242deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 29%,rgba(130, 130, 130,0.04) 29%, rgba(130, 130, 130,0.04) 48%,rgba(31, 31, 31,0.04) 48%, rgba(31, 31, 31,0.04) 100%),linear-gradient(90deg, rgb(10,5,19),rgb(10,5,19));
        height: 100%;
    }

    .login {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login > .left {
        flex: 1;
    }

    .left {
        flex: 1;
        text-align: center;
    }

    .input {
        margin-bottom: 24px;
    }
    
    label {
        display: flex;
        margin-bottom: 4px;
        color: #ccc ;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.8px;
    }

    .input {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    input {
        font-size: 16px;
    }

    input::placeholder {
        opacity: 0.25;
        color: #fff;
        font-size: 16px;
        font-weight: 300;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
        padding: 10px;
        padding-right: 30px;
        text-align: start;
        width: 240px;
        height: 16px;
        border: none;
        border-radius: 4px;
        background-color: #33244F;
        transition: 480ms;
    }
    
    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="password"]:focus {
        outline: 1.5px solid #803cff94;
        box-shadow: 0px 0px 8px #873CFF;
        transform: scale(1.1);
        
    }

    .right {
        background-image: url(${BackgroundHome});
        background-size: cover;
        background-position: right;
        height: 100vh;
        width: 50%;
    }

    .subtitulo {
        font-size: 64px;
        letter-spacing: 16px;
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 24px;
    }

    .buttonLogin {
        font-weight: 500;
        font-size: 24px;
        padding: 2px 8px;
        border-radius: 4px;
        opacity: 0.6;
        transition: 360ms;
        cursor: pointer;
        border: none;
        margin-top: 16px;
        color: #fff;
        background-color: transparent;
        border: 1px solid #ccc;
    }

    .buttonLogin:hover {
        opacity: 1;
        background-color: #873CFF;
        border: 1px solid #873CFF;
        box-shadow: 0px 0px 8px #873CFF;
        transform: scale(1.1);
    }

    .seribit {
        width: 240px;
    }

    .login > .right {
        flex: 1;
    }

    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .descripton{
        font-size: 24px;
        font-weight: 200;
        text-transform: uppercase;
        letter-spacing: 4px;
        margin-top: 16px
    }
`

export default LoginStyle;
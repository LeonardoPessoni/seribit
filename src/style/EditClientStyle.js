import { createGlobalStyle } from 'styled-components';


const EditClientStyle = createGlobalStyle`
body {
    background-image: linear-gradient(283deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 30%,rgba(130, 130, 130,0.04) 30%, rgba(130, 130, 130,0.04) 49%,rgba(31, 31, 31,0.04) 49%, rgba(31, 31, 31,0.04) 100%),linear-gradient(297deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 20%,rgba(130, 130, 130,0.04) 20%, rgba(130, 130, 130,0.04) 60%,rgba(31, 31, 31,0.04) 60%, rgba(31, 31, 31,0.04) 100%),linear-gradient(242deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 29%,rgba(130, 130, 130,0.04) 29%, rgba(130, 130, 130,0.04) 48%,rgba(31, 31, 31,0.04) 48%, rgba(31, 31, 31,0.04) 100%),linear-gradient(90deg, rgb(10,5,19),rgb(10,5,19));
    height: 100vh;
}

.subtitulo {
    font-size: 32px;
    letter-spacing: 8px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 5px;
}

#edit-client {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.buttons {
    display: flex;
    gap: 30px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.divisao {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

label {
    display: flex;
    margin-bottom: 4px;
    color: #ccc ;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.8px;
    flex-direction: column;
}

select {
    text-align: start;
    width: 280px;
    height: 35px;
    border: none;
    border-radius: 4px;
    background-color: #33244F;
    transition: 480ms;
    margin-bottom: 20px;
    color: #fff;
    font-size: 16px;
}

select:focus {
    outline: 1.5px solid #803cff94;
    box-shadow: 0px 0px 8px #873CFF;
}

.input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
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

.input-name[type="text"] {
    margin-bottom: 24px;
    width: 540px;
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
}


button {
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
    margin-bottom: 20px;
}

button:hover {
    opacity: 1;
    background-color: #873CFF;
    border: 1px solid #873CFF;
    box-shadow: 0px 0px 8px #873CFF;
    transform: scale(1.1);
}
`

export default EditClientStyle;
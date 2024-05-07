import { createGlobalStyle } from 'styled-components';



const ClientesStyle = createGlobalStyle`
body {
    background-image: linear-gradient(283deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 30%,rgba(130, 130, 130,0.04) 30%, rgba(130, 130, 130,0.04) 49%,rgba(31, 31, 31,0.04) 49%, rgba(31, 31, 31,0.04) 100%),linear-gradient(297deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 20%,rgba(130, 130, 130,0.04) 20%, rgba(130, 130, 130,0.04) 60%,rgba(31, 31, 31,0.04) 60%, rgba(31, 31, 31,0.04) 100%),linear-gradient(242deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 29%,rgba(130, 130, 130,0.04) 29%, rgba(130, 130, 130,0.04) 48%,rgba(31, 31, 31,0.04) 48%, rgba(31, 31, 31,0.04) 100%),linear-gradient(90deg, rgb(10,5,19),rgb(10,5,19));
    height: 100vh; 
}

#clientes {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 30px;
}

.mid {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    margin-bottom: 20px;
}

.button-register {
    font-weight: 500;
    font-size: 24px;
    padding: 2px 8px;
    border-radius: 4px;
    opacity: 0.6;
    transition: 360ms;
    cursor: pointer;
    border: none;
    color: #fff;
    background-color: transparent;
    border: 1px solid #ccc;
}

.button-register:hover {
    opacity: 1;
    background-color: #873CFF;
    border: 1px solid #873CFF;
    box-shadow: 0px 0px 8px #873CFF;
    transform: scale(1.1);
}

button {
    color: #333;
    font-weight: bold;
    background-color: transparent;
    border:none;
    cursor: pointer;
}

.button-cell {
    text-align: center; 
    vertical-align: middle;
    transition: 360ms;
    color: black;
}

.button-cell:hover {
    background-color: #873CFF;
    box-shadow: 0px 0px 8px #873CFF;
}

table {
    width: 90%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    border-bottom: 1.5px solid #ccc;
    border-right: 1.5px solid #ccc; 
    color: #333;
}


th {
    background-color: #333; 
    color: white; 
    padding: 16px; 
    font-size: 16px; 
    font-weight: bold;
    letter-spacing: 1.5px;
}


th:last-child, td:last-child {
    border-right: none;
}

tr:nth-child(odd) {
    background-color: #fdfdfd; 
}

tr:nth-child(even) {
    background-color: #fcfcfc; 
}

p {
    color: white;
}
`

export default ClientesStyle;
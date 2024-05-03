import { createGlobalStyle } from "styled-components";

const PrintStyle = createGlobalStyle`
    body {
        background-image: linear-gradient(283deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 30%,rgba(130, 130, 130,0.04) 30%, rgba(130, 130, 130,0.04) 49%,rgba(31, 31, 31,0.04) 49%, rgba(31, 31, 31,0.04) 100%),linear-gradient(297deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 20%,rgba(130, 130, 130,0.04) 20%, rgba(130, 130, 130,0.04) 60%,rgba(31, 31, 31,0.04) 60%, rgba(31, 31, 31,0.04) 100%),linear-gradient(242deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 29%,rgba(130, 130, 130,0.04) 29%, rgba(130, 130, 130,0.04) 48%,rgba(31, 31, 31,0.04) 48%, rgba(31, 31, 31,0.04) 100%),linear-gradient(90deg, rgb(10,5,19),rgb(10,5,19));
        min-height: 100vh;
    }

    #page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .pontilhado {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 800px;
        height: 1px;
        border-top: 2px dashed black;
    }

    h5, p {
        color: black;
        font-size: 12px;
    }

    h2 {
        color: black;
        letter-spacing: 5px;
    }

    .num {
        color: red;
    }

    #space {
        margin-top: 30px;
    }

    #conteudo {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin-top: 20px;
        padding: 20px;
        min-width: 70%;
        border-radius: 20px;
    }

    .borda {
        border: 1px solid black;
        width: 800px;
        height: 300px;
        border-radius: 20px;
    }

    .cabecalho-completo {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .cabecalho {
        display: flex;
        justify-content: center;
        gap: 50px;
        margin-top: 20px;
    }

    .teste {
        display: flex;
        justify-content: space-around;
        gap: 10px;
    }

    .divisao {
        display: flex;
        align-items: left;
        gap: 10px;
        margin-top: 20px;
    }

    .linha {
        border-bottom: 1px solid black;
        width: 300px;
    }

    .bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .print-button {
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

    .print-button:hover {
        opacity: 1;
        background-color: #873CFF;
        border: 1px solid #873CFF;
        box-shadow: 0px 0px 8px #873CFF;
        transform: scale(1.1);
    }
`

export default PrintStyle;
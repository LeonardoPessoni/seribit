import { createGlobalStyle } from "styled-components";

const MenuStyle = createGlobalStyle`
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: white;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        text-align: center;
    }

    .modal-buttons {
        display: flex;
        justify-content: space-around;
        margin-top: 16px;
    }

    .buttonsModal {
        padding: 8px 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: 200ms;
    }

    .buttonsModal:hover {
        transform: scale(1.1);
    }
`

export default MenuStyle;
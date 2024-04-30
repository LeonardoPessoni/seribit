import { createGlobalStyle } from "styled-components";

const MenuStyle = createGlobalStyle`
    body {
        background-image: linear-gradient(283deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 30%,rgba(130, 130, 130,0.04) 30%, rgba(130, 130, 130,0.04) 49%,rgba(31, 31, 31,0.04) 49%, rgba(31, 31, 31,0.04) 100%),linear-gradient(297deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 20%,rgba(130, 130, 130,0.04) 20%, rgba(130, 130, 130,0.04) 60%,rgba(31, 31, 31,0.04) 60%, rgba(31, 31, 31,0.04) 100%),linear-gradient(242deg, rgba(228, 228, 228,0.04) 0%, rgba(228, 228, 228,0.04) 29%,rgba(130, 130, 130,0.04) 29%, rgba(130, 130, 130,0.04) 48%,rgba(31, 31, 31,0.04) 48%, rgba(31, 31, 31,0.04) 100%),linear-gradient(90deg, rgb(10,5,19),rgb(10,5,19));
    }

    .menu {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .logo {
        width: 240px;
    }
    
    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
    }

    .logout {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 32px;
        font-weight: 200;
        gap: 8px;
        transition: 200ms;
        letter-spacing: 4px;
        opacity: 0.7;
    }

    .logout:hover {
        transform: scale(1.1);
        opacity: 1;
    }   
    
    .mid {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 32px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 300;
        letter-spacing: 4px;
    }
    
    li {
        margin-bottom: 32px;
        opacity: 0.7;
        transition: 200ms;
    }

    li:hover {
        transform: scale(1.1);
        opacity: 1;
    }
`

export default MenuStyle;
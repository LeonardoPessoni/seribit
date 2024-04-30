import { createGlobalStyle } from 'styled-components';
import BackgroundHome from '../images/background.png'


const InicialStyle = createGlobalStyle`
    body {
        background-image: url(${BackgroundHome});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .centro{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        height: 10%;   
    }
`

export default InicialStyle;
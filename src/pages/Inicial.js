import InicialStyle from '../style/InicialStyle'
import Logo from '../images/Vector.png'
import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const Inicial = () => {
  const [fadeOut, setFadeOut] = useState(false);

  const TransitionStyle = createGlobalStyle`
      body {
          text-align: center;
          transition: opacity 1s ease; 
          opacity: ${fadeOut ? 0 : 1}; 
      }
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
        setFadeOut(true); 
        setTimeout(() => {
            window.location.href = '/login'; 
        }, 1500); 
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <TransitionStyle />
      <InicialStyle />
      <div className='centro'><img src={Logo} alt="Logo Seribit" /></div>
    </div>
  )
}

export default Inicial
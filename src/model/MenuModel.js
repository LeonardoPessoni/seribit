import axios from "axios"; 
import Url from "../config/Config";
import { useState, useEffect } from "react";


function Teste() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`${Url}/clients`)
        .then(response => {
            setPost(response.data);
        })
        .catch(() => console.log('Deu Errado!'));
    }, [])
}

export default Teste;0
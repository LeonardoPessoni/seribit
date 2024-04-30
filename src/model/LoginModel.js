import Url from '../config/Config'

import axios from "axios";

function postUser(username, password, setUsername, setPassword) {
    axios.post(`${Url}/login`, {
        user: username,
        password: password
    })
    .then(response => {
        console.log(response);
        window.location.href = '/menu';
    })
    .catch(error => {
        console.log(error)
        setUsername('');
        setPassword('');
    });
}

export default postUser;
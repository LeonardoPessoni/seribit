import axios from "axios";

import Url from "../config/Config";

export const clienteAPI = axios.create({
    baseURL: Url,
});

async function getClientes() {
    try {
        const response = await clienteAPI.get("/clients");
        return response.data;
    } catch (error) {
        console.error("Deu Errado!");
    }
};

async function getFuncionarios() {
    try {
        const response = await clienteAPI.get("/employees");
        return response.data;
    } catch (error) {
        console.error("Deu Errado!");
    }
};

async function getProducts() {
    try {
        const response = await clienteAPI.get("/products");
        return response.data;
    } catch (error) {
        console.error("Deu Errado!");
    }
}

async function getVales() {
    try {
        const response = await clienteAPI.get("/vouchers");
        return response.data;
    } catch (error) {
        console.error("Deu Errado!");
    }
}

export { getClientes, getFuncionarios, getProducts, getVales };
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

async function getClientesID({ id }) {
    try {
        const response = await clienteAPI.get(`/clients/${id}`);
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

async function getProductsId({ id }) {
    try {
        const response = await clienteAPI.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Deu Errado!");
    }
}

async function getVales() {
    try {
        const response = await clienteAPI.get(`/vouchers`);
        return response.data;
    } catch (error) {
        console.error("Deu Errado!");
    }
}

async function getValesId({ id }) {
    try {
        const response = await clienteAPI.get(`/vouchers/${id}`);
        return response.data;
    } catch (error) {
        console.error("Deu Errado!");
    }
}

export { getClientes, getClientesID, getFuncionarios, getProducts, getVales, getValesId, getProductsId };
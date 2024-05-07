import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, clienteAPI } from "../model/Model";
import ClientesStyle from '../style/ClientesStyle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Produtos = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
    }, []);

    async function fetchProducts() {
        const produtos = await getProducts();
        setProducts(produtos);
    };

    async function deleteProduto(id) {
        try {
            await clienteAPI.delete(`/products/${id}`)
            fetchProducts()
        } catch (error) {
            toast.error('Não é possível excluir este produto, pois ele está vinculado a vale.', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    }

    return (
        <div id='clientes'>
            <ClientesStyle />
            <div className='top'>
                <Link to="/menu" className='button-register'>Voltar</Link>
                <h1>Produtos Cadastrados</h1>
            </div>

            <div className='mid'>
                <div className='title'>
                    <Link to='/cadastroProduto' className='button-register'>Novo Produto</Link>
                </div>

                <table className='table'>
                    <thead >
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Preço</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, key) => {
                        return (
                            <tr key={key}>
                                <td>{product.name}</td>
                                <td>R$ {product.price}</td>

                                <td className='button-cell'>
                                    <Link to={`/editProduto/${product.productId}`}><button>Editar</button></Link>
                                </td>

                                <td className='button-cell'>
                                    <button onClick={() => deleteProduto(product.productId)}>Excluir</button>
                                </td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Produtos;
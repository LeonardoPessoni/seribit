import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom/dist";
import { clienteAPI } from "../model/Model";
import EditClientStyle from "../style/EditClientStyle";
import { Link } from 'react-router-dom/dist';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {

    const { id } = useParams();
    const [products, setProducts] = useState({
        name: '',
        price: ''
    });

    useEffect(() => {
        fetchProductId();
    });

    async function fetchProductId() {
        try {
            const res = await clienteAPI.get(`/products/${id}`);
            setProducts(res.data)
        } catch (error) {
            console.error(error);
        }
    }

    const nameRef = useRef(null);
    const priceRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updateProduct ={
                name: nameRef.current.value,
                price: priceRef.current.value,
                clientId: products.clientId
            };

            const response = await clienteAPI.put(`/products/${id}`, updateProduct);
            console.log(response.data);
            window.location.href = "/produtos"
        } catch (error) {
            console.log("Erro ao editar!", error);
            toast.error('Erro ao editar. Por favor, tente novamente.', {
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
    };

    return (
        <div id="edit-client">
            <EditClientStyle />
            <h1 className='subtitulo'>Editar Produto</h1>

            <form onSubmit={handleSubmit}>
                <div className="divisao">
                    <label>
                        Nome do Produto:
                        <input className='input'
                            type="text"
                            name="name"
                            defaultValue={products.name}
                            ref={nameRef}
                            maxLength={30}
                            required
                        />
                    </label>
                </div>
                <div className="divisao">
                    <label>
                        Preço:
                        <input className='input'
                            type="text"
                            name="price"
                            defaultValue={products.price}
                            ref={priceRef}
                            maxLength={10}
                            required
                        />
                    </label>
                </div>

                <div className='buttons'>
                        <button type="submit">Atualizar</button>
                        <Link to="/produtos"><button>Cancelar</button></Link>
                    </div>
            </form>
        </div>
    );
};

export default EditProduct;
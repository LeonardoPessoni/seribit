import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Clientes from "./pages/Clientes";
import Produtos from "./pages/Produtos";
import Usuarios from "./pages/Usuarios";
import Vales from "./pages/Vales";
import Cadastro from "./pages/CadastroCliente";
import CadastroFunc from "./pages/CadastroFunc";
import CadastroProduto from "./pages/CadastroProduto";
import CadastroVale from "./pages/CadastroVale";
import EditProduct from "./pages/EditProduct";
import EditClient from "./pages/EditClient";
import EditFunc from "./pages/EditFunc";
import Print from "./pages/Print";

const routes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Inicial />} />
            
            <Route path="/login" element={<Login />} />

            <Route path="/menu" element={<Menu />} />

            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/vales" element={<Vales />} />

            <Route path="/editClient/:id" element={<EditClient />} />
            <Route path="/editFuncionario/:id" element={<EditFunc />} />
            <Route path="/editProduto/:id" element={<EditProduct />} />
            <Route path="/visualizarVale/:id" element={<Print />} />

            <Route path="/cadastroCliente" element={<Cadastro />} />
            <Route path="/cadastroFunc" element={<CadastroFunc />} />
            <Route path="/cadastroProduto" element={<CadastroProduto />} />
            <Route path="/cadastroVale" element={<CadastroVale />} />
        </Routes>
    </Router>
  );
};

export default routes;
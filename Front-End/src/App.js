import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import CadastroPage from "./pages/Cadastro";
import NotFoundPage from "./pages/NotFoundPage";
import AccessDenied from "./pages/AccessDenied";
import Principal from "./components/PrincipalCard";
import Pedidos from "./pages/Pedidos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

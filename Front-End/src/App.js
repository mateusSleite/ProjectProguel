import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import CadastroPage from "./pages/Cadastro";
import NotFoundPage from "./pages/NotFoundPage";
import AccessDenied from "./pages/AccessDenied";
import Pedidos from "./pages/Pedidos";
import Details from "./pages/Details";
import NavBar from "./components/NavbarLogin";
import ProtectedRoute from "./pages/ProtectedRoute"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/pedidos' element={
          <ProtectedRoute
          errorPage={<LoginPage />}
          targetPage={<Pedidos />}
          />
        }>
        </Route>
        <Route path='/pedidos/:id' element={
          <ProtectedRoute
          errorPage={<LoginPage />}
          targetPage={<Details />}
          />
        }>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/nav" element={<NavBar />} />
      </Routes>
    </>
  );
}

export default App;

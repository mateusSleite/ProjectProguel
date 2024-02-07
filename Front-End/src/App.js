import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import CadastroPage from "./pages/Cadastro";
import NotFoundPage from "./pages/NotFoundPage";
import AccessDenied from "./pages/AccessDenied";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<NavBar />}>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </>
  );
}

export default App;

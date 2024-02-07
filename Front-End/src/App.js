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
<<<<<<< HEAD
=======
        <Route path="/" element={<NavBar />}>
        </Route>
>>>>>>> 1a57eca20c6724dc9cdd4c8aef3f88492e59a26a
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </>
  );
}

export default App;

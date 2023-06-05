import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import TelaLogin from "./pages/TelaLogin/TelaLogin";
import TelaCadastro from './pages/TelaCadastro/TelaCadastro';
import TelaHabitos from './pages/TelaHabitos/TelaHabitos';
import TelaHoje from './pages/TelaHoje/TelaHoje';
import TelaHistorico from "./pages/TelaHistorico/TelaHistorico";
import { User } from "./contexts/User";

export default function App() {

  const [user, setUser] = useState({});

  return (
    <User.Provider value={{user, setUser}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={TelaLogin} />
        <Route path='/cadastro' Component={TelaCadastro} />
        <Route path='/habitos' Component={TelaHabitos} />
        <Route path='/hoje' Component={TelaHoje} />
        <Route path='/historico' Component={TelaHistorico} />
      </Routes>
    </BrowserRouter>
    </User.Provider>
  )
}

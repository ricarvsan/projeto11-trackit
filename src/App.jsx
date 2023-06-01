import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import TelaLogin from "./pages/TelaLogin/TelaLogin";
import TelaCadastro from './pages/TelaCadastro/TelaCadastro';
import TelaHabitos from './pages/TelaHabitos/TelaHabitos';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={TelaLogin} />
        <Route path='/cadastro' Component={TelaCadastro} />
        <Route path='/habitos' Component={TelaHabitos} />
      </Routes>
    </BrowserRouter>
  )
}

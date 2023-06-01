import logo from '../../assets/logo.png';
import { PageContainer } from './SCTelaHabitos';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function TelaLogin() {
    return (
        <PageContainer>
            <NavBar />
            <input placeholder="email" />
            <input placeholder="senha" />
            <input placeholder="nome" />
            <input placeholder="foto" />
            <button>Cadastrar</button>
            <p>Já tem uma conta? <Link to='/'>Faça login!</Link></p>
            <p>Link para <Link to='/habitos'>Habitos</Link></p>
            <Footer />
        </PageContainer>
    );
}
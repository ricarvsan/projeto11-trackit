import logo from '../../assets/logo.png';
import { PageContainer } from './SCTelaLogin';
import { Link } from 'react-router-dom';

export default function TelaLogin() {
    return (
        <PageContainer>
            <img src={logo} alt="" />
            <input placeholder="email" />
            <input placeholder="senha" />
            <button>Entrar</button>
            <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se!</Link></p>
        </PageContainer>
    );
}
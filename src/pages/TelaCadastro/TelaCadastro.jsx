import logo from '../../assets/logo.png';
import { PageContainer } from './SCTelaCadastro';
import { Link } from 'react-router-dom';

export default function TelaLogin() {
    return (
        <PageContainer>
            <img src={logo} alt="" />
            <input placeholder="email" />
            <input placeholder="senha" />
            <input placeholder="nome" />
            <input placeholder="foto" />
            <button>Cadastrar</button>
            <p>Já tem uma conta? <Link to='/'>Faça login!</Link></p>
            <p>Link para <Link to='/habitos'>Habitos</Link></p>
        </PageContainer>
    );
}
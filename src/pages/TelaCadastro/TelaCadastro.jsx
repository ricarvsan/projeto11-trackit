import { useState } from 'react';
import logo from '../../assets/logo.png';
import { PageContainer } from './SCTelaCadastro';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

export default function TelaLogin() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [url, setUrl] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const load = <ThreeDots color='#FFFFFF' />;

    function cadastrar(e) {
        e.preventDefault();

        const novo = {
            email: email,
            name: nome,
            image: url,
            password: senha
        };

        axios.post(`${BASE_URL}/auth/sign-up`, novo)
            .then(() => (navigate('/')))
            .catch(erro => {
                alert(erro.response.data.message);
                setDisabled(false);
            });

        setDisabled(true);
    }

    return (
        <PageContainer>
            <img src={logo} alt="" />
            <form onSubmit={cadastrar}>
                <input data-test='email-input' type='email' disabled={disabled} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input data-test='password-input' type='password' disabled={disabled} placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                <input data-test='user-name-input' type='text' disabled={disabled} placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                <input data-test='user-image-input' type='url' disabled={disabled} placeholder="foto" value={url} onChange={(e) => setUrl(e.target.value)} required />
                <button data-test='signup-btn' type='submit' disabled={disabled}>{disabled ? load : `Cadastrar`}</button>
            </form>
            <p>Já tem uma conta? <Link data-test='login-link' to='/'>Faça login!</Link></p>
            {/*<p>Link para <Link to='/habitos'>Habitos</Link></p>*/}
        </PageContainer>
    );
}
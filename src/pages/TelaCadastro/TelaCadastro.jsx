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
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [dadosLogin, setDadosLogin] = useState({});
    const navigate = useNavigate();
    const load = <ThreeDots color='#FFFFFF' />;

    function cadastrar(e) {
        e.preventDefault();

        const novo = { email, name, image, password};

        axios.post(`${BASE_URL}/auth/sign-up`, novo)
            .then((r) => {
                setDadosLogin(r);
                navigate('/');
            })
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
                <input data-test='password-input' type='password' disabled={disabled} placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input data-test='user-name-input' type='text' disabled={disabled} placeholder="name" value={name} onChange={(e) => setname(e.target.value)} required />
                <input data-test='user-image-input' type='url' disabled={disabled} placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)} required />
                <button data-test='signup-btn' type='submit' disabled={disabled}>{disabled ? load : `Cadastrar`}</button>
            </form>
            <p>Já tem uma conta? <Link data-test='login-link' to='/'>Faça login!</Link></p>
        </PageContainer>
    );
}
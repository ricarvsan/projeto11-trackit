import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { PageContainer } from './SCTelaLogin';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

export default function TelaLogin() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate();
    const load = <ThreeDots color='#FFFFFF' />;

    function login(e) {
        e.preventDefault();

        axios.post(`${BASE_URL}/auth/login`, { email: email, password: senha })
            .then(() => navigate('/hoje'))
            .catch(erro => {alert(erro.response.data.message);
            setDisabled(false);            
            });

        setDisabled(true);
    }

    return (
        <PageContainer>
            <form onSubmit={login}>
                <img src={logo} alt="" />
                <input type='email' disabled={disabled} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='password' disabled={disabled} placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                <button type='submit' disabled={disabled}>{disabled ? load : `Entrar`}</button>

                <p>Não tem uma conta? <Link to='/cadastro'>Cadastre-se!</Link></p>
            </form>
        </PageContainer>
    );
}
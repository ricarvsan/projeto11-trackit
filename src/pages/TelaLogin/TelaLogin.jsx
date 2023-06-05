import { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { PageContainer } from './SCTelaLogin';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { User } from '../../contexts/User';

export default function TelaLogin() {
    const {setUser} = useContext(User);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate();
    const load = <ThreeDots color='#FFFFFF' />;

    function login(e) {
        e.preventDefault();

        axios.post(`${BASE_URL}/auth/login`, {email, password})
            .then((r) => {
                setUser(r.data);
                navigate('/hoje');
            })
            .catch(erro => {alert(erro.response.data.message);
            setDisabled(false);            
            });

        setDisabled(true);
    }

    return (
        <PageContainer>
            <form onSubmit={login}>
                <img src={logo} alt="" />
                <input data-test='email-input' type='email' disabled={disabled} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input data-test='password-input' type='password' disabled={disabled} placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button data-test='login-btn' type='submit' disabled={disabled}>{disabled ? load : `Entrar`}</button>

                <p>Não tem uma conta? <Link data-test='signup-link' to='/cadastro'>Cadastre-se!</Link></p>
            </form>
        </PageContainer>
    );
}
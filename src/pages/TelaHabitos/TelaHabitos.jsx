import { PageContainer } from './SCTelaHabitos';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MeusHabitos from '../../components/Habitos/MeusHabitos'
import NovoHabito from '../../components/Habitos/NovoHabito';
import HabitosConcluidos from '../../components/Habitos/HabitosConcluidos';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { User } from '../../contexts/User';
import { useContext } from 'react';

export default function TelaHabitos() {

    const {user} = useContext(User);
    console.log(user);

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    
    const [habitos, setHabitos] = useState(undefined);

    useEffect(() => {
        axios.get(`${BASE_URL}/habits`, config)
            .then(r => console.log(r.data))
            .catch(erro => console.log(erro.response.data.message));
    }, []);

    return (
        <PageContainer>
            <Header />
            <MeusHabitos />
            <HabitosConcluidos /> 
            <NovoHabito />  
            <Footer />
        </PageContainer>
    );
}
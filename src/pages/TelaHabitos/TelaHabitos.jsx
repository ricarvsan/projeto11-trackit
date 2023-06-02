import { PageContainer } from './SCTelaHabitos';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import MeusHabitos from '../../components/Habitos/MeusHabitos'
import NenhumHabito from '../../components/Habitos/NenhumHabito'
import NovoHabito from '../../components/Habitos/NovoHabito';

export default function TelaLogin() {
    return (
        <PageContainer>
            <NavBar />
            <MeusHabitos />
            <NenhumHabito />
            <NovoHabito />
            <p>Link para <Link to='/hoje'>Hoje</Link></p>
            <Footer />
        </PageContainer>
    );
}
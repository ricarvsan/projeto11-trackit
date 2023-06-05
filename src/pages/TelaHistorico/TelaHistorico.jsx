import { HistoricoContainer } from "./SCTelaHistorico";
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";

export default function TelaHistorico() {
    return (
        <HistoricoContainer>
            <Header />
            <p>Histórico</p>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Footer />
        </HistoricoContainer>
    );
}
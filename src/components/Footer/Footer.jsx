import { Link } from 'react-router-dom';
import { FooterContainer } from './SCFooter';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { User } from '../../contexts/User';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';


export default function Footer() {

    const { user } = useContext(User);

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }   

    const [tarefas, setTarefas] = useState([]);
    const [finalizados, setFinalizados] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(r => {
                setTarefas(r.data);
            })
            .catch(erro => console.log(erro.response.data.message));
    }, []);

    return (
        <FooterContainer>
            <button data-test="habit-link"><Link to='/habitos'>Hábitos</Link> </button>
            <CircularProgressbarContainer data-test="today-link">
                <Link to='/hoje'>
                    <CircularProgressbar
                        value={finalizados}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </Link>
            </CircularProgressbarContainer>
            <button data-test="history-link"><Link to='/historico'>Histórico</Link></button>

        </FooterContainer>
    );
}

const CircularProgressbarContainer = styled.div`
    width: 91px;
    height: 91px;
    position: absolute;
    left: 40%;
    top: -60%;
`
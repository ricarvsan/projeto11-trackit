import Header from '../../components/Header/Header'
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import Footer from '../../components/Footer/Footer'
import { useEffect, useContext, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'
import { PageContainer } from './SCTelaHoje';
import Tarefa from '../../components/Habitos/Tarefa';
import { User } from '../../contexts/User';


export default function TelaHoje() {

    const {user} = useContext(User);

    let data = dayjs().locale('pt-br').format('dddd, DD/MM');
    data = data[0].toUpperCase() + data.substring(1);

    const [tarefas, setTarefas] = useState(undefined);
    const [done, setDone] = useState();

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(r => {
                setTarefas(r.data);
                console.log(`tarefas`, r.data);
            })
            .catch(erro => console.log(erro.response.data.message));
    }, [done]);

    if(tarefas === undefined) {
        return (
            <PageContainer>
                <Header />
                <p data-test='today'>{data}</p>
                <p data-test="today-counter">Nenhum hábito concluido ainda</p>
                <Footer />
            </PageContainer>
        );
    } else {
        return (
            <PageContainer>
                <Header />
                <p data-test='today'>{data}</p>
                <p data-test="today-counter">x tarefas concluidas de y</p>
                {tarefas.map(tarefas => 
                    <Tarefa data-test="today-habit-container" id={tarefas.i} tarefas={tarefas} setDone={setDone}/>
                )}
                <Footer />
            </PageContainer>
        );
    }

    

}
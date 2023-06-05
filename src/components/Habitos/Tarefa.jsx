import axios from "axios";
import { TarefaContainer } from "./SCTarefa";
import { BASE_URL } from "../../constants/urls";
import { User } from "../../contexts/User";
import { useContext, useState } from "react";

export default function Tarefa(props) {

    const {user} = useContext(User);

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    const {tarefas, setDone} = props;

    function finalizado() {

        const {tarefas} = props;
        console.log(tarefas);

        if(tarefas.done) {
            axios.post(`${BASE_URL}/habits/${tarefas.id}/uncheck`, {},config)
            .then(r => setDone(tarefas.done))
            .catch(erro => console.log(erro.response.data.message));
        } else {
            axios.post(`${BASE_URL}/habits/${tarefas.id}/check`, {}, config) 
            .then(r => console.log(r.data))
            .catch(erro => console.log(erro.response.data.message));
        }             
    }

    return (
        <TarefaContainer tarefas={tarefas} >
            <div>
                <p data-test="today-habit-name">{tarefas.name}</p>
                <p data-test="today-habit-sequence">Sequência atual: {tarefas.currentSequence} dias</p>
                <p data-test="today-habit-record">Seu recorde: {tarefas.highestSequence} dias</p>
            </div>
            <div>
                <ion-icon data-test="today-habit-check-btn" name="checkbox" onClick={() => finalizado()}></ion-icon>
            </div>
        </TarefaContainer>
    );
}
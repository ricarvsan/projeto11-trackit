import { NovoHabitoContainer } from "./SCNovoHabito";


export default function NovoHabito() {
  return (
    <NovoHabitoContainer>
      <input type="text" placeholder="nome do hábito"/>
      <div>
        <button>D</button>
        <button>S</button>
        <button>T</button>
        <button>Q</button>
        <button>Q</button>
        <button>S</button>
        <button>S</button>
      </div>
      <div>
        <button>Cancelar</button>
        <button>Salvar</button>
      </div>
    </NovoHabitoContainer>
  );
}
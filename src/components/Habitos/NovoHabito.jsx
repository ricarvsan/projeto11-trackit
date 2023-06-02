import { NovoHabitoContainer } from "./SCNovoHabito";


export default function NovoHabito() {
    return (
        <NovoHabitoContainer>
          <input type="text" />
          <button>Cancelar</button>
          <button>Salvar</button>
        </NovoHabitoContainer>
    );
}
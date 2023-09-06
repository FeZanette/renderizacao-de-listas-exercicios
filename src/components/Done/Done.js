import styled from "styled-components";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./DoneStyled";
import bin from "../../assets/bin.png";

export const Div = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Done = ({ lista }) => {
  console.log(lista);
  const listaNova = lista;

  return (
    <>
      <ListaContainer>
        <ul>
          <h2>Tarefas concluidas</h2>
          {listaNova.map((item) => (
            <Tarefa key={item.titulo}>
              <p><s>{item.titulo}</s></p>
            </Tarefa>
          ))}
        </ul>
      </ListaContainer>
    </>
  );
};

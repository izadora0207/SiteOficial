import "./styles.css";
import { DivBackA, Cont } from "./styled.js";

export function Titulo2(props) {
  return (
    <>
      <span className="subtxt-home">{props.text}</span>
      <hr className="hr" />
    </>
  );
}

export function Artigos(props) {
  return (
    <Cont>
      <DivBackA>
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
      </DivBackA>
      {props.children}
    </Cont>
  );
}

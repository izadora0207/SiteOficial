import Header from "../header/Header";
import { DivContainerContato } from "./styled";

export default function Contato() {
  return (
    <Header texto="Contato">
      <DivContainerContato>
        <h1>Nós conte sua experiência</h1>
        <p>
          Entre em contato se tiver alguma duvida ou quiser contar sua
          experiência com o site adorariamos saber e responder todas as duvidas.
        </p>
        <div className="div2">
          <form action="">
            <div>
              <input type="email" name="" id="" placeholder="Nome" />
              <input type="text" name="" id="" placeholder="Email" />
            </div>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensagem"
            ></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </DivContainerContato>
    </Header>
  );
}

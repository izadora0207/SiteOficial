import Header from "../header/Header";
import { DivContSobre } from "./styled";
import ArthurFT from "../../img/arthur.jpg";
import DiegoFT from "../../img/Diego.jpeg";
import IzaFT from "../../img/iza.jpeg";
import NathanFT from "../../img/nathan.jpg";
import { A, Div, Section, Img, Titulo, Linha2, DivA } from "./styled";
import circulo from "../../svg/circulo.svg";
export default function Sobre() {
  return (
    <Header texto="Sobre">
      <DivContSobre>
        <div>
          <hr />
          <h2>Nossos proposito e maiores inspirações</h2>
        </div>

        <p>
          Com o começo da pandemia o mundo todo ficou perdido na quantidade de
          informação solta sobre a pandemia ea quarentena, não sabendo o que era
          real ou não e as vezes mesmo com tanta informação era dificil achar o
          que você realmente queria por isso decidimos criar um site onde
          engloba todos os artigos e videos de confiança com informações e dicas
          que você precisa.
        </p>
        <img className="circulo" src={circulo} alt="" srcset="" />
      </DivContSobre>
      <DivA>
        <Titulo>
          Sobre nós <Linha2 />
        </Titulo>
        <Section>
          <Div>
            <Img src={ArthurFT} alt="foto arthur" />
            <A>
              <h2>Arthur</h2>
              <p>Desenvolvedor Backend da platforma</p>
            </A>
          </Div>
          <Div>
            <Img src={DiegoFT} alt="foto Diego" />
            <A>
              <h2>Diego</h2>
              <p>Desenvolvedor Backend da platforma</p>
            </A>
          </Div>
          <Div>
            <Img src={IzaFT} alt="foto Iza" />
            <A>
              <h2>Izadora</h2>
              <p>Desenvolvedora Frontend da platforma</p>
            </A>
          </Div>
          <Div>
            <Img src={NathanFT} alt="foto Nathan" />
            <A>
              <h2>Nathan</h2>
              <p>Desenvolvedor Frontend da platforma</p>
            </A>
          </Div>
        </Section>
      </DivA>
    </Header>
  );
}

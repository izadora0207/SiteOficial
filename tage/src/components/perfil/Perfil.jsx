import { DivContainer, ImgPerfil } from "./styled";
import foto from "../../img/Julia.jpg";
import Header from "../header/Header";
import { Artigos } from "../artigos/Artigos";
import { DivCont } from "../artigos/styled";

export default function Perfil() {
  return (
    <>
      <Header texto="Perfil">
        <Artigos titulo="Seu Perfil">
          <DivCont>
            <hr />
            <h2>Bem vindo(a) de Volta</h2>
            <DivContainer>
              <ImgPerfil src={foto} alt="Foto de perfil" />
              <p>
                Olá eu sou a julia, 20 anos adoro cozinhas e esses artigos são
                tudoo
              </p>
            </DivContainer>
          </DivCont>
        </Artigos>
      </Header>
    </>
  );
}

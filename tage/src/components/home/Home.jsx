import { Titulo2 } from "../artigos/Artigos";
import "./styles.css";
import Header from "../header/Header";
import { DivBack, DivContainerHome, DivHomeH, H1 } from "./styled";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import circulo from "../../svg/circulo.svg";
export default function Home(props) {
  return (
    <Header v1={props.verdade} texto="Inicio">
      <DivHomeH>
        <hr />
        <h1>
          Nós te ajudamos a achar as <span>informações</span> que você precisa.
        </h1>
        <p>
          Todas as informaçoes que você perde muito tempo pesquisando agora
          todas juntas em um lugar só aqui!.
        </p>
        <div>
          <button className="btn">
            <Link to="/sobre">Saiba mais </Link>
          </button>
          <button className="btn-out">
            <Link to="/contato">Contato </Link>
          </button>
        </div>
        <img src={circulo} alt="" srcset="" />
      </DivHomeH>

      <DivBack className="back">
        <h1>Artigos mais Populares</h1>
        <p>Nossos artigos com as melhores dicas do site.</p>
        <DivContainerHome>
          <div className="card">
            <Link to="/lazer">
              <div className="conteudo">
                <Titulo2 text="Lazer em casa" />
                <p>
                  Como se divertir e passar o tempo em casa como se estivesse na
                  rua
                </p>
                <button class="recipe-save" type="button">
                  <FiArrowRight />
                  Leia mais
                </button>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/academia">
              <div className="conteudo">
                <Titulo2 text="Atividade Fisica em casa" />
                <p>Tenha os mesmos resultados mais dentro de casa</p>
                <button class="recipe-save" type="button">
                  <FiArrowRight />
                  Leia mais
                </button>
              </div>
            </Link>
          </div>
          <div className="card">
            <Link to="/escritorio">
              <div className="conteudo">
                <Titulo2 text="Home Office" />

                <p>Dicas de como se acostumar a trabalhar de casa</p>
                <button class="recipe-save" type="button">
                  <FiArrowRight />
                  Leia mais
                </button>
              </div>
            </Link>
          </div>
        </DivContainerHome>

        <h1>Videos mais Populares</h1>
        <p>Nossos Videos com as melhores avaliações do site.</p>
        <DivContainerHome>
          <div
            className="card"
            onClick={() =>
              window.location.replace("./academia/#video-academia")
            }
          >
            <Link to="/lazer">
              <div className="conteudo">
                <Titulo2 text="Dicas para lidar com a ansiedade durante a pandemia" />
                <p>Veja dicas de como lidar com a pandemia com o lazer!</p>
                <button class="recipe-save" type="button">
                  <FiArrowRight />
                  Assistir
                </button>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="/academia">
              <div className="conteudo">
                <Titulo2 text="Exercícios Físicos, Saúde Física e Mental durante a Pandemia" />
                <p>
                  Sem academia? Assista agora esse vídeo de exercícios que você
                  pode fazer em casa!
                </p>
                <button class="recipe-save" type="button">
                  <FiArrowRight />
                  Assistir
                </button>
              </div>
            </Link>
          </div>
          <div className="card">
            <Link to="/escritorio">
              <div className="conteudo">
                <Titulo2 text="Dicas para trabalho em Home Office " />

                <p>
                  Trabalhando remoto, mas não está se sentindo motivado? Assista
                  a esse vídeo com dicas de como se acostumar ao home office
                </p>
                <button class="recipe-save" type="button">
                  <FiArrowRight />
                  Assistir
                </button>
              </div>
            </Link>
          </div>
        </DivContainerHome>
      </DivBack>
    </Header>
  );
}

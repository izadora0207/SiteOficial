import { Link } from "react-router-dom";
import { DivContainerLogin, Form, Button, DivInput } from "./styled";

import { DivSVG } from "../cadastro/styled";
import { BsArrow90DegLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import Home from "../home/Home";
export default function Login(props) {
  useEffect(() => {
    fetch("/rest/artigo/perfil")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setAdmin({ email: resp.email, senha: resp.senha });
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [admin, setAdmin] = useState({ email: "", senha: "" });
  const [user, setUser] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");
  const [details, setDetails] = useState({ email: "", senha: "" });

  const verdade = true;

  const Login = (i) => {
    console.log(i);
    if (details.email == admin.email && details.senha == admin.senha) {
      console.log("login");
      setUser({ senha: details.senha, email: details.email });
    } else {
      setErro("Dados incorretos");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <>
      {user.email != "" ? (
        <Home verdade={verdade} />
      ) : (
        <div>
          <DivSVG>
            <Link title="Inicio" to="/">
              <BsArrow90DegLeft />
            </Link>
          </DivSVG>
          <DivContainerLogin>
            <Form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Login</legend>
                <div className="erro">{erro}</div>
                <p>Preencha os campos abaixo para logar no site</p>
                <DivInput>
                  <input
                    className="sera"
                    type="email"
                    name="Email"
                    placeholder="Email"
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    value={details.email}
                  />
                </DivInput>
                <DivInput>
                  <input
                    className="sera"
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Senha"
                    onChange={(e) =>
                      setDetails({ ...details, senha: e.target.value })
                    }
                    value={details.senha}
                  />
                </DivInput>
                <Button type="submit">Entrar </Button>
                <Link to="/cadastro">Não é Cadastrado ? clique aqui</Link>
              </fieldset>
            </Form>
          </DivContainerLogin>
        </div>
      )}
    </>
  );
}

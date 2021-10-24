// import { DivCadastro, FormCadastro, DivSVG, Button } from "./styled";
// import { BsArrow90DegLeft } from "react-icons/bs";
// import { Link } from "react-router-dom";

// export default function Cadastro() {
//   return (
//     <>
//       <DivSVG>
//         <Link title="Login" to="/login">
//           <BsArrow90DegLeft />
//         </Link>
//       </DivSVG>

//       <DivCadastro className="ss">
//         <FormCadastro action="" autocomplete="off">
//           <h1>Cadastro</h1>
//           <p>Preencha os campos abaixo para se cadastrar no site</p>
//           <input
//             className="input"
//             type="text"
//             name=""
//             id=""
//             placeholder="Email"
//           />
//           <input type="password" name="" id="hi" placeholder=" Senha" />
//           <input type="date" name="" id="" />

//           <Button onClick="">
//             <Link> Cadastrar</Link>
//           </Button>
//         </FormCadastro>
//       </DivCadastro>
//     </>
//   );
// }

import { Link } from "react-router-dom";
import { DivContainerLogin, Form, Button, DivInput } from "../login/styled";
import { DivSVG } from "../cadastro/styled";
import { BsArrow90DegLeft } from "react-icons/bs";
export default function Login() {
  return (
    <>
      <DivSVG>
        <Link title="Inicio" to="/login">
          <BsArrow90DegLeft />
        </Link>
      </DivSVG>
      <DivContainerLogin>
        <Form>
          <fieldset>
            <legend>Cadastro</legend>
            <p>Preencha os campos abaixo para se cadastrar no site</p>
            <DivInput>
              <input
                className="sera"
                type="email"
                name="Email"
                placeholder="Email"
              />
            </DivInput>
            <DivInput>
              <input
                className="sera"
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
              />
            </DivInput>
            <DivInput>
              <input className="sera" type="date" name="data" id="data" />
            </DivInput>
            <Button type="submit">Cadastrar </Button>
          </fieldset>
        </Form>
      </DivContainerLogin>
    </>
  );
}

import "./style.css";
import Footer from "../footer/Footer";
import { useState } from "react";
import { MenuLogin } from "../menu/Menu";
import { Link } from "react-router-dom";
import logo from "../../svg/logo1.svg";
import btn1 from "../../svg/btn.svg";
import btn2 from "../../svg/btnup.svg";

export default function Header(props) {
  const [verifica, setVerifica] = useState(props.v1);
  const [btn, setBtn] = useState(btn1);

  function menu() {
    var menu = document.getElementById("sub-menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
      setBtn(btn1);
    } else {
      menu.style.display = "block";
      setBtn(btn2);
    }
  }

  const Logout = () => {
    setVerifica(false);
  };

  return (
    <div>
      {verifica != true ? (
        <MenuLogin />
      ) : (
        <header>
          <nav>
            <img style={{ width: "50px" }} src={logo} alt="" />
            <input type="checkbox" id="check1" />
            <label for="check1" class="check1">
              &#9776;
            </label>
            <ul className="menu">
              <li className="li-menu">
                <Link title="Inicio" to="/">
                  Inicio
                </Link>
              </li>
              <li className="sub">
                <button className="btn-submenu" onClick={menu}>
                  Conteúdos{" "}
                  <span className="btn-menu">
                    <img src={btn} alt="" />
                  </span>
                </button>
                <ul id="sub-menu" className="dropdown-menu none">
                  <li className="dropdown-item">
                    <Link title="Academia" to="/academia">
                      Academia
                    </Link>{" "}
                  </li>
                  <li className="dropdown-item">
                    <Link title="Escritorio" to="/escritorio">
                      Escritorio
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link title="Lazer" to="/lazer">
                      Lazer
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="li-menu">
                <Link title="Meu Perfil" to="/perfil">
                  Meu Perfil
                </Link>
              </li>
              <li className="li-menu">
                <Link title="Contato" to="/contato">
                  Contato
                </Link>
              </li>
              <li className="li-menu">
                <Link title="Sobre" to="/sobre">
                  {" "}
                  Sobre
                </Link>
              </li>
              <li>
                <button onClick={Logout} className="logout">
                  <Link title="Logout" to="/login">
                    Logout
                  </Link>
                </button>
              </li>
            </ul>
          </nav>
        </header>
      )}
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

import "./style.css";
import logo from "../../svg/logo1.svg";
import btn1 from "../../svg/btn.svg";
import btn2 from "../../svg/btnup.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export function MenuLogin() {
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

  return (
    <>
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
              <button className="logout">
                <Link title="Login" to="/login">
                  Login
                </Link>{" "}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

import "./styles.css";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoMdCall,
  IoIosMail,
} from "react-icons/io";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="fot-1">
          <div>
            <h1> Redes </h1>
            <ul>
              <li>
                <IoLogoFacebook /> Facebook
              </li>
              <li>
                <IoLogoInstagram /> Instagram
              </li>
              <li>
                <IoLogoTwitter /> Twitter
              </li>
            </ul>
          </div>
          <div>
            <h1>Contato</h1>
            <ul>
              <li>
                <IoLogoWhatsapp /> Whatsapp
              </li>
              <li>
                <IoMdCall /> Telefone
              </li>
              <li>
                <IoIosMail /> Email
              </li>
            </ul>
          </div>
          <div>
            <h1>Paginas</h1>
            <ul>
              <li>Meu Perfil</li>
              <li>Contato</li>
              <li>Sobre</li>
              <li>Academia</li>
              <li>Lazer</li>
              <li>Escritorio</li>
            </ul>
          </div>
        </div>
        <div className="fot-txt"> &amp; Tage 2021</div>
      </footer>
    </>
  );
}

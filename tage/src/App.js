import './app.css'
import { Menu, MenuLogin } from "./components/menu/Menu";
import { Link, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Perfil from './components/perfil/Perfil';
import Academia from './components/academia/Academia';
import Escritorio from './components/escritorio/Escritorio';
import Lazer from './components/lazer/Lazer'
import Contato from  './components/contato/Contato'
import Sobre from './components/sobre/Sobre'
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';


function App() {
  window.watsonAssistantChatOptions = {
    integrationID: "505c030a-81c0-48e4-9e34-eb8ef2c6b045", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "f962365e-0869-4c8c-b887-e731faf00b0b", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
    document.head.appendChild(t);
  });





  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/academia" component={Academia} />
          <Route path="/escritorio" component={Escritorio} />
          <Route path="/lazer" component={Lazer} />
          <Route path="/contato" component={Contato} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </div>
  );
}

export default App;

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
import { useState } from 'react';

function App() {
window.watsonAssistantChatOptions = {
    integrationID: "10de263d-c47c-4a56-811c-5d1238c45a6e", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "d8707b15-a5f3-46e6-b3c6-c882c00662de", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js"
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

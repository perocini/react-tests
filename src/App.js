import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    { nome:'Programação', id: 'programacao'},
    { nome:'Front-End', id: 'frontend'},
    { nome:'Data Science', id: 'datascience'},
    { nome:'Devops', id: 'devops'},
    { nome:'UX e Design', id: 'uxdesign'},
    { nome:'Mobile', id: 'mobile'},
    { nome:'Inovação e Gestão', id: 'gestao'}
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const evAdicionado = (colaborador) => {
    const colaboradorExistente = colaboradores.find(filtro => filtro.nome === colaborador.nome)
    if(!colaboradorExistente) {
      setColaboradores([...colaboradores, colaborador]);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Formulario evCadastrado={colaborador => evAdicionado(colaborador)} times={times.map(time => time)} />
        {times.map((time) => <Time key={time.nome} nome={time.nome} id={time.id} colaboradores={colaboradores.filter(filtro => filtro.time === time.id)} />)}    
     </header>
    </div>
  );
}

export default App;

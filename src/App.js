import './App.css';
import {useState} from 'react';

function App(props) {
  const [cep, setCep] = useState({});

  function handleTextChange(e) {
    e.preventDefault();
    fetch(`https://viacep.com.br/ws/${e.target.value}/json`)
    .then(res => res.json())
    .then(res => setCep(res));
  }

  return (
    <div>
      <strong>Olá, {props.name}</strong>
        <div>Digite o cep: 
          <input type="text" onChange={handleTextChange}></input>
            {Object.entries(cep).map((values, key) => (
              <h2 key={key}><strong>{values[0]}: {values[1]}</strong></h2>
            ))}      
        </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. This confirms correspondence. WEI
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <p>{response}</p>
      </div>
      </header>
    </div>
  );
  function sendMessage(e){
    console.log(e.target)
    let res = "Response to: " + input;
    setResponse(res)
    console.log("Send message")
  }
}

export default App;

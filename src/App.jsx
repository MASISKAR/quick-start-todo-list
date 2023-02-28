import logo from './logo.svg';
import Hello from './Hello';
import './App.css';



function Name(){
const name = 'John Smith';
  return  (
    <div>
  {name}
  <Hello name='John' age={23}/>
  </div>
  );
}




function App() {

  const message = 'Hello, I am your first React code.';

  return (
    <div className="App">
      <header className="App-header">
        <Name />
        <Name />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


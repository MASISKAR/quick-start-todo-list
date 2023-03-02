import {Component} from 'react';
import logo from './logo.svg';
import Hello from './Hello';
import './App.css';

function Name(props){
  console.log(props);

  return  (
    <h4>
  {props.text}
  </h4>
  );
}

class Surname extends Component{
// constructor(props){
//   super(props);
// }
state = {
  message: '',
  hasClicked: false,
};
handleClick = ()=>{
  this.setState({
    hasClicked: true,
  });

if(this.state.message){
  this.setState({
    message: '',
  });
}
else {
  this.setState({
  message: 'Hello, I am a simple text!'
});
}


}

  render(){
// console.log('this.props', this.props);
console.log(this.state);

    return  (
        <div>
        <h3>
        {this.props.text}
        </h3>
        <p className='text-red'>{this.state.message}</p>
       <button onClick={this.handleClick}>Click me</button>

        {
          /*
          this.state.hasClicked ? 
          <h2 className='text-red'>Clicked!</h2> : 
          <h6 className='text-green'>Not clicked yet!</h6>
          */
        }

        { this.state.hasClicked && <h2 className='text-red'>Clicked!</h2>}
        
        </div>
    );
  }
}

// function Surname(){
//     return  (
//       <h3>
//       Smith
//     </h3>
//     );
//   }



function App() {

  const message = 'Hello, I am your first React code.';
console.log('logo', logo)
  return (
    <div className="App">
      <header className="App-header">
        <Name text='John' test={true}/>
        <Surname text='Doe' age={56} />
        <Surname text='Alex' age={34}/>
        <Surname text='Alice' age={12} message={message}/>


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


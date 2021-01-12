
import React, {Component} from "react";
import './App.css';

class App extends Component {
  render() {
    //creating  variable
    const name = 'Binjita';
    //creating function
    const foo = () => 'Bar';
    //conditionals
    const loading = true;

    if(loading){
      return <h4>Loading...</h4>;
    }
    return (
        <div className="App">
          <h1>Hello from React to {name.toUpperCase()}</h1>
          <h1>Hello {foo()} </h1>
        </div>
    );
  }
}
export default App;

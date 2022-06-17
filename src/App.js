import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector.jsx';
import Circles from './components/Circles/Circles';

class App extends Component {
  state = {
    selectedCircle1: true ,
    selectedCircle2: false,
    selectedCircle3: false,
    selectedCircle4: false,
    
  };

  select1 = () => {
    this.setState({ selectedCircle1: true });
    this.setState({ selectedCircle2: false });
    this.setState({ selectedCircle3: false });
    this.setState({ selectedCircle4: false });
  }

  select2 = () => {
    this.setState({ selectedCircle1: false });
    this.setState({ selectedCircle2: true });
    this.setState({ selectedCircle3: false });
    this.setState({ selectedCircle4: false });
  }

  select3 = () => {
    this.setState({ selectedCircle1: false });
    this.setState({ selectedCircle2: false });
    this.setState({ selectedCircle3: true });
    this.setState({ selectedCircle4: false });
  }

  select4 = () => {
    this.setState({ selectedCircle1: false });
    this.setState({ selectedCircle2: false });
    this.setState({ selectedCircle3: false });
    this.setState({ selectedCircle4: true });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
          selectedCircle1={this.state.selectedCircle1}
          selectedCircle2={this.state.selectedCircle2}
          selectedCircle3={this.state.selectedCircle3}
          selectedCircle4={this.state.selectedCircle4}

          Select1={this.select1}
          Select2={this.select2}
          Select3={this.select3}
          Select4={this.select4}
          />
          
          <Circles
          selectedCircle1={this.state.selectedCircle1}
          selectedCircle2={this.state.selectedCircle2}
          selectedCircle3={this.state.selectedCircle3}
          selectedCircle4={this.state.selectedCircle4}
           />
        </main>
      </div>
    );
  }
}

export default App;
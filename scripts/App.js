// import React from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import Header from './Layout/Header';
import Washing from './components/Washing';
import Drying from './components/Drying';
import DisplayResults from './components/DisplayResults';


class App extends React.Component{

  state = {
    symbols: [
      {
        id: 1,
        display: false,
        text: 'wash below or at 30C'
      },
      {
        id: 2,
        display: false,
        text: 'wash below or at 40C'
      },
      {
        id: 3,
        display: false,
        text: 'wash below or at 50C'
      },
      {
        id: 4,
        display: false,
        text: 'wash below or at 60C'
      },
      {
        id: 5,
        display: false,
        text: 'wash below or at 95C'
      },
      {
        id: 6,
        display: false,
        text: 'tumble dry'
      },
      {
        id: 7,
        display: false,
        text: 'tumble dry, low heat'
      },
      {
        id: 8,
        display: false,
        text: 'tumble dry, medium head'
      },
      {
        id: 9,
        display: false,
        text: 'tumble dry, high heat'
      },
      {
        id: 10,
        display: false,
        text: 'dry normal, no heat'
      }]
    
  }

  updateList = (id) => {
    console.log(id);
    this.setState({symbols:this.state.symbols.map(sym => {
      if(sym.id === id)
      {
        sym.display = !sym.display;
      }
      return sym;
    })});
  }

  render(){

      return (
        <div className="App">
          <Header />
          <div className="container">
            <div className="row">
              <Washing updateList={this.updateList} symbols={this.state.symbols} />
            </div>
            <div className="row">
              <Drying updateList={this.updateList} symbols={this.state.symbols} />
            </div>
          </div>

          <div className="resultList">
              <DisplayResults symbols={this.state.symbols} />
            
          </div>

          
        </div>
      );
    }
}

export default App;

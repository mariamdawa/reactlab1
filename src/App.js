import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super();
    this.state={
      initCount:10
    }
  }
  // setInitCount=(val)=>{
  //   this.setState({initCount:val})
  // }
  // changeInitCount={this.setInitCount}
  
  render() {
    return (
      <div className="App">
       <Counter initCount={this.state.initCount} />
      </div>
    );
  }
}
class Counter extends React.Component{
  constructor(props){
    super();
    this.state={
      count:props.initCount
    }
  }
  changeCount=(opt)=>{
    if(opt=="-"){
      this.setState({
        count:this.state.count-1,
      });
    }
    else if(opt=="+"){
      this.setState({
        count:this.state.count+1,
      });
    }
  }
  render(){
    return(
      <div>
        <div>
          {this.state.count}
        </div>
        <button onClick={()=>this.changeCount("+")}>Increase</button>
        <button onClick={()=>this.changeCount("-")}>Deccrease</button>
      </div>
    );
  }
}

export default App;

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
  btnStyle={
    height:50,
    width:150,
    backgroundColor:'black',
    color:'white',
    fontSize:20

  }
  counterStyle={
    marginBottom:20,
    fontSize:30
  }
  style={
    padding:100,
  }
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
      <div style={this.style}>
        <div style={this.counterStyle}>
          {this.state.count}
        </div>
        <button style={this.btnStyle} onClick={()=>this.changeCount("+")}>Increase</button>
        <button style={this.btnStyle} onClick={()=>this.changeCount("-")}>Decrease</button>
      </div>
    );
  }
}

export default App;

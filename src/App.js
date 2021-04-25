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
  
  
  render() {
    return (
      <div className="App">
       <Counter initCount={this.state.initCount} />
       <Display/>
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
class Display extends React.Component{
  data={
    "id":"1",
    "jobTitleName":"Developer",
    "firstName":"Ahmed",
    "lastName":"Ali",
    "preferredFullName":"Ahmed Ali",
    "employeeCode":"E1",
    "region":"CA",
    "phoneNumber":"408-1234567",
    "emailAddress":"ahmed.ali@gmail.com"
  }
  style={
    padding:100,
    fontSize:30,
    backgroundColor:"gray",
    color:"white"

  }
  render(){
    return(
      <div style={this.style}>
        ID:{this.data.id}
        <br/>
        <br/>
        First Name: {this.data.firstName}
        <br/>
        <br/>
        Last Name: {this.data.lasttName}
        <br/>
        <br/>
        First Name: {this.data.firstName}
        <br/>
        <br/>
        Preferred Full Name: {this.data.preferredFullName}
        <br/>
        <br/>
        Employee Code: {this.data.employeeCode}
        <br/>
        <br/>
        Region: {this.data.region}
        <br/>
        <br/>
        Phone Number: {this.data.phoneNumber}
        <br/>
        <br/>
        Email Address: {this.data.emailAddress}

       </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state={
    imageSrc : "/image/image1.png",
    fullName:"Amal ben ammar",
    bio:"Diplômé de L Institut Supérieur d Informatque et de Multmédia de Sfax (ISIMS)",
    profession:"Designer graphique",
    isShow:true,

  }
  handleShow=()=>this.setState({isShow:!this.state.isShow})
  componentDidMount(){
    console.log("componentDidMount")
    setInterval(this.handleShow, 1000);
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
    console.log("render")
    return (
      <div>
      <button onClick={this.handleShow}>{this.state.isShow?"Hide":"Sow"}</button>
      {
        this.state.isShow? <div>
        <img src='/image/image1.png' alt='image1'/>
        <h1> {this.state.fullName}</h1>
        <h2> {this.state.profession}</h2>
        <h3> {this.state.bio}</h3>
        </div>:null
      }
      </div>
    )
  }
}

import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state={
    imageSrc : "/image/image1.png",
    fullName:"Amal ben ammar",
    bio:"Diplômé de L Institut Supérieur d Informatique et de Multimédia de Sfax (ISIMS) , j interviens essentiellement dans les domaines de l image digitale pour site web et réseaux sociaux, de la prise de vue réelle et de la typographie, je maîtrise les techniques de photographie et de vidéo, ainsi que les logiciels correspondants. Créatif et passionné de nouvelles technologies, je cherche sans cesse à repousser mes limites et à innover",
    profession:"Designer graphique",
    isShow:true,
    count:0,

  }
  handlePlus=()=>this.setState({count:this.state.count+1})
  handleShow=()=>this.setState({isShow:!this.state.isShow})
  componentDidMount(){
    console.log("componentDidMount")
    setInterval(this.handlePlus, 1000);
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
      <div className='App'>
      <button className='btn' onClick={this.handleShow}>{this.state.isShow?"Hide":"Sow"}</button>
      {
        this.state.isShow? <div className='part'>
        <img src='/image/image1.png' alt='image1'/>
        <div className='texte'>
        <h1> {this.state.fullName}</h1>
        <h2> {this.state.profession}</h2>
        <p> {this.state.bio}</p> </div>
        </div>:null
      }
      <h1>{this.state.count}</h1>
      </div>
    )
  }
}

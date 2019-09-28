import React, { Component } from 'react';
import './App.css';
import Image_ from './components/Image_';
import { Gradient } from 'react-gradient';
import Texte from './components/Texte';
import  Login from './components/Login';
import Timer from './components/Timer_';
import { Widget,addResponseMessage , addLinkSnippet, addUserMessage  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from './components/images/avatar.png';
import logocarcam from './components/images/logo.jpg';

 
const gradients = [
    ['#00f', '#6600a1'],
    ['#00a','#660030'],
    ['#005', '#660030'],
    ['#00a','#660030'],
    ['#00f', '#6600a1'],
];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nom:"",
      email:"",
      numero:"",
      sujet:"",
      detail:"",
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  
  
handleSubmit () {
  //to do: make a sweet backend to send the mail with sender: email, text:sujet and detail
  alert('Please contact :+237.697.103.538');
  }

  handleChange(event){
    if(event.target.name==="nom"){
      this.setState({
        nom:event.target.value,
      });
    }
    if(event.target.name==="email"){
      this.setState({
        email:event.target.value,
      });
    }
    if(event.target.name==="numero"){
      this.setState({
        numero:event.target.value,
      });
    }
    if(event.target.name==="sujet"){
      this.setState({
        sujet:event.target.value,
      });
    }
    if(event.target.name==="detail"){
      this.setState({
        detail:event.target.value,
      });
    }
      
  }
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Please contact: +237.697.103.538");
  }
  componentDidMount() {
    addResponseMessage("Bienvénu à la méssagerie d'assistance de carcam, nous sommes ouvert à tous vos préocupations");
  }

  render(){
    return (
      <div className="App">
        
        <Gradient
          gradients={ gradients } // required
          property="background"
          duration={ 3000 }
          angle="90deg"
        > 
        <header>
          <div className="header">
            <nav>
              <div className="logo">
                <img src={logocarcam} alter="logo" className="logo192"/>
                <label>Une nouvelle vision de l'autopartage</label>
              </div>
              <div>
                <span>InfoLine:+237.697.103.538</span>
                <span><a href="#login">Contact Us</a></span>
              </div>
            </nav>
          </div>
        </header>
        </Gradient>
        <body >
        <Widget handleNewUserMessage={this.handleNewUserMessage}
                profileAvatar={logo}
                title="carcam"
                subtitle="Une nouvelle vision de l'autoparge"
                senderPlaceHolder="Ecrire un message" 
               /* handleQuickButtonClicked fonction utiliser pour savoir quand	l'utilisateur clique sur le bouton fermer la conversation*/
               />
          <div className="image">
            <Image_/>
          </div>
          <div className="texte">
            <Texte/>
          </div>
          <div className="timer">
            <Gradient
            gradients={ gradients } // required
            property="background"
            duration={ 300000 }
            angle="0deg"
            >
              <div className="timerjj">J-J</div>
              <Timer/>
            </Gradient>
          </div>
          <label id="login"></label>
          <Login  handleSubmit={this.handleSubmit} handleChange={this.handleChange} 
              nom={this.state.nom} email={this.state.email} numero={this.state.numero}
              sujet={this.state.sujet} detail={this.state.detail}/>
        
        </body>
        <footer>
          <div className="footer">
            <a href="https://www.uzenze.com" target="_blank">Copyright © 2019 | made by uzenze </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

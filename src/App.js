import React, { Component } from 'react';
import './App.css';
import Image_ from './components/Image_';
import Texte from './components/Texte';
import  Login from './components/Login';
import Timer from './components/Timer_';
import { Widget,addResponseMessage , addLinkSnippet, addUserMessage  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from './components/images/avatar.png';
import logocarcam from './components/images/logo.jpg';
import { ContactForm } from './comps/ContactForm/ContactForm';
import { ImageAndText } from './comps/ImageAndText/ImageAndText';

 
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
  }
  
  
  handleSubmit =  () =>  {
  //to do: make a sweet backend to send the mail with sender: email, text:sujet and detail
  alert('Please contact :+237.697.103.538');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value,
    });
      
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
        <ImageAndText/>
        <ContactForm/>
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

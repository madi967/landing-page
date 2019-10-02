import React, { Component } from 'react';
import './App.css';
import { addResponseMessage  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ImageAndText } from './components/ImageAndText/ImageAndText';



class App extends Component {
  constructor(props){
    super(props);
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
            <nav className="carcam_nav row wrap">
              <div className="row flex-1">
                <img src={'./images/logo.jpg'} alter="logo" className="carcam_logo"/>
                <label>Une nouvelle vision de l'autopartage</label>
              </div>
              <div className='flex-1 row space-between wrap' style={{padding: 20}}>
                <a href='tel:+237 697 103 538' style={{textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap'}}>InfoLine: +237 697 103 538</a>
                <a href="#contact" style={{textDecoration: 'none', color: 'inherit'}}>Contact Us</a>
              </div>
            </nav>
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

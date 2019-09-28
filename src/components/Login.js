import React,{Component} from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './TextValidator';
import Selection from './Selection';


export default class Login extends Component {

    render(){
    return (
        <div className="login">
          Veillez remplire le formulaire
          <ValidatorForm
            ref="form"
            onSubmit={this.props.handleSubmit}
           >
            <div className="champ-input">
            {/*className="dont-display"*/ 
         // <input placeholder="pas important"  />}
    }
              <TextValidator
                  onChange={this.props.handleChange}
                  name="nom"
                  value={this.props.nom}
                  placeholder="Nom complet"
              />
            </div >
            <div className="champ-input">
              <TextValidator
                  onChange={this.props.handleChange}
                  name="email"
                  value={this.props.email}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}
                  placeholder="Email"
              />
            </div>
            <div className="champ-input">
              <TextValidator
                  onChange={this.props.handleChange}
                  name="numero"
                  value={this.props.numero}
                  validators={['required', 'isNumber']}
                  errorMessages={['this field is required', 'number is not valid']}
                  placeholder="Numéro de téléphone"
              />
            </div>
            <div className="champ-selection">
              Objet : <Selection value={this.props.sujet} handleChange={this.props.handleChange} />
            </div>
            <div className="champ-texte">
              <textarea name="detail" value={this.props.detail} onChange={this.props.handleChange}
                placeholder="Ecrire un message" />
            </div>
            <div className="validation">
                <button type="submit">Envoyer</button>
            </div>
          </ValidatorForm>
        </div>
    );
    }
  }
 
import React,{Component} from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './TextValidator';



export default class Login extends Component {
   
    render(){
    return (
        <div className="login">
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
           >
            <TextValidator
                onChange={this.props.handleChange}
                name="nom"
                value={this.props.nom}
                validators={['required', 'required']}
                errorMessages={['this field is required', ' ']}
                placeholder="Nom complet"
            />
            <TextValidator
                onChange={this.props.handleChange}
                name="email"
                value={this.props.email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
                placeholder="Email"
            />
            <TextValidator
                onChange={this.props.handleChange}
                name="numero"
                value={this.props.numero}
                validators={['required', 'isNumber']}
                errorMessages={['this field is required', 'number is not valid']}
                placeholder="Numéro de téléphone"
            />
          <button type="submit">Envoyer</button>
        </ValidatorForm>
        </div>
    );
    }
  }
 
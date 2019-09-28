import React from 'react';

class Selection extends React.Component{

  render(){
    return (
        <select name="sujet" value={this.props.value} onChange={this.props.handleChange} >
            <option value="Inscrire sa voiture pour le lancement">Inscrire sa voiture pour le lancement</option>
            <option value="Reservation de voiture pour le lancement">Reservation de voiture pour le lancement</option>
            <option value="En savoir plus">En savoir plus</option>
            <option value="Autres">Autres</option>
        </select>
    );
  }
}

export default Selection;

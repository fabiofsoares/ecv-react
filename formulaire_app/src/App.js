import React, { Component } from 'react';
import Form from './components/form/';
import Steps from './components/steps/';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      courant: 0
    }
    this.data = [
          {
            title: 'DEMARRER LE TEST'
          },
          {
            title: 'Informations Personnelles',
            form: [
              {
                id:'civilite',
                type:'select',
                placeholder:'civilite',
                inputs : [
                    {
                        label : 'celibataire',
                        name: 'celibataire'
                    },
                    {
                        label : 'marrie',
                        name: 'marrie'
                    },
                    {
                        label : 'veuf(ve)',
                        name: 'veuf'
                    }
                ]
            },
            {
                id:'nom',
                type:'text',
                placeholder:'Nom'                
            },
            {
                id:'prenom',
                type:'text',
                placeholder:'Prenom'                
            },
            {
                id:'email',
                type:'email',
                placeholder:'Email'                
            },
            {
                id:'tel',
                type:'text',
                placeholder:'Tel'                
            }
          ]
          },
          {
            title: 'Questions sur I.T',
            form: [
                {
                  id:'framework',
                  type:'radio',
                  placeholder:'Framework préféré',
                  inputs : [
                      {
                          label : 'Vue',
                          name: 'vue'
                      },
                      {
                          label : 'Angular',
                          name: 'angular'
                      },
                      {
                          label : 'Symfony',
                          name: 'symfony'
                      }
                  ]
              },
              {
                  id:'autre',
                  type:'text',
                  placeholder:'Autre'                
              }
            ]
          },
          {
            title: 'Recaptulatif'
          }
      ]
    
  }
  
  next(){
    this.setState({
      courant: this.state.courant + 1
    })
  }
 
  back(){
    this.setState({
      courant: this.state.courant - 1
    })
  }

  render() {
   

    let step = this.data.map((item, index) => <Steps page={index} courant={this.state.courant} data={item} />)
   
    
    return (
      <div className="App">
        { step }
        <button onClick={this.back.bind(this)} disabled={this.state.courant < 1 ? true : false}>BACK</button>
        <button onClick={this.next.bind(this)} disabled={this.state.courant >= 3 ? true : false}>NEXT</button>
      </div>
    );
  }
}

export default App;

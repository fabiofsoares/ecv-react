import React, { Component } from 'react';
import Steps from './components/steps/';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      courant: 0,
      civilite: '',
      prenom: '',
      nom: '',
      email: '',
      tel: '',
      framework: ''
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
                          name: 'framework',
                          value: 'vue'
                      },
                      {
                          label : 'Angular',
                          name: 'framework',
                          value: 'angular'
                      },
                      {
                          label : 'Symfony',
                          name: 'framework',
                          value: 'symfony'
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
    const form_1 = this.refs.page_1;   
  
    if(form_1){
      this.setState({        
        prenom: form_1.refs.prenom.value ,
        nom: form_1.refs.nom.value,
        email: form_1.refs.email.value,
        tel: form_1.refs.tel.value
      })
    }
    
    let framework = this.refs.page_2.refs.framework.querySelector('input[name=framework]:checked');
    if(framework){
      this.setState({
        framework: framework.value
      })
    }

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
   
    console.log('list home >> : ', this.state)
    let step = this.data.map((item, index) => <Steps page={index} ref={'page_'+index} courant={this.state.courant} data={item} list={this.state.list} rec={this.state} />)
   
    console.log('refs : ', this.refs.step_1)
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

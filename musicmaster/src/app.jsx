import React, { Component } from 'react';
import './app.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search(){
    const BASE_URL = 'https://musicbrainz.org/ws/2/artist?';
    const FETCH_URL = `${BASE_URL}query=${this.state.query}&type=artist&limit=1`;
    console.log(FETCH_URL);
  }


  render(){
    return(
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl  type="text" 
                          placeholder = "Search for an Artist" 
                          value={this.state.query}
                          onChange={event =>{this.setState({query: event.target.value})}}
                          onKeyPress={event => {
                            if (event.key === 'Enter'){
                              this.search()
                            }
                          }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
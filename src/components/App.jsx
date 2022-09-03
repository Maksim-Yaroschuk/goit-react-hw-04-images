import { Component } from 'react';
import { getPhoto } from 'utils/api';
import { SearchField } from './Searchbar/Searchbar';

export class App extends Component {

  getData = () => {
    getPhoto().then((r) => {
      console.log(r)
    })
  }
  
  findResponse = e => {
    e.preventDefault();
    
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <button onClick={() => this.getData()}>React homework template</button> */}
<SearchField/>

      </div>
    );
  }
}

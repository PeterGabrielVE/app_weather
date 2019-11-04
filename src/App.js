import React,{Component} from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [ 'Barquisimeto,ve',
                 'Caracas,ve',
                  'Washington,us',
                  'Lima,pe',
                  'Barcelona,es',
                  'Madrid,es'];

class App extends Component {
    render(){
        return (
          <div className="App">
              <LocationList cities={cities}></LocationList>
          </div>
        );
    } 
}

export default App;

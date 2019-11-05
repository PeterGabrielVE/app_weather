import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';

const cities = [ 'Barquisimeto,ve',
                 'Caracas,ve',
                  'Washington,us',
                  'Lima,pe',
                  'Barcelona,es',
                  'Madrid,es'];

class App extends Component {
    handleSelectedLocation = city =>{
        console.log("handleSelectionLocation");
    }
    render(){
        return (
                <Grid fluid>
                    <Row>
                        <h1>Titulo</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationList cities={cities}
                            onSelectedLocation={this.handleSelectedLocation}>
                            </LocationList>
                        </Col>
                        <Col xs={12} md={6}>
                        <div className="Details"></div>
                        </Col>
                    </Row>
                   
                </Grid>     
        );
    } 
}

export default App;

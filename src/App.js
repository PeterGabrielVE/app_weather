import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';
import { setCity } from './actions';
import { store } from './store';

const cities = [ 'Barquisimeto,ve',
                 'Caracas,ve',
                  'Washington,us',
                  'Lima,pe',
                  'Barcelona,es',
                  'Madrid,es'];


class App extends Component {

    constructor(){
        super();
        this.state = { city: null };
    }

    handleSelectedLocation = city =>{
        this.setState({city});
        console.log("handleSelectionLocation");

        store.dispatch(setCity(city));
    }
    render(){
        const { city } = this.state;
        return (
                <Grid fluid>
                    <Row>
                        <AppBar position="sticky">
                            <Toolbar>
                                <Typography variant="title" color="inherit">
                                    WeatherApp
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationList cities={cities}
                            onSelectedLocation={this.handleSelectedLocation}>
                            </LocationList>
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper>
                                <div className="details">
                                {
                                    !city?
                                    <h1>No se seleccionó ciudad </h1> :
                                    <ForecastExtended city={ city }></ForecastExtended>
                                }
                                    </div>
                        </Paper>
                        </Col>
                    </Row>
                   
                </Grid>     
        );
    } 
}

export default App;

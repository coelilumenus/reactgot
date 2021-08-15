import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ToggleRandomChar from '../toggleRandomChar'


export default class App extends Component {
    state = {
        isShowRC: true
    }
    
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                isShowRC: !state.isShowRC
            }
        })
    }
    
    render() {
        const { isShowRC } = this.state;
        
        const randomChar = isShowRC ? <RandomChar/> : null;
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <ToggleRandomChar toggleRandomChar={this.toggleRandomChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

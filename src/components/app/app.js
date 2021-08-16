import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ToggleRandomChar from '../toggleRandomChar';
import ErrorMessage from '../errorMessage';
import { CharacterPage, BooksPage, HousePage } from '../pages';
import gotService from '../../services/gotService';


export default class App extends Component {
    
    gotService = new gotService();
    
    state = {
        isShowRC: true,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
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

        const randomChar = isShowRC ? <RandomChar /> : null;

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {randomChar}
                            <ToggleRandomChar toggleRandomChar={this.toggleRandomChar} />
                        </Col>
                    </Row>
                    <CharacterPage />
                    <BooksPage />
                    <HousePage />
                </Container>
            </>
        );
    }
};

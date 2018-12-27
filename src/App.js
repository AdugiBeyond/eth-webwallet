import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import LoginForm from './view/Login'


class App extends Component {
    render() {
        return (
            <div className="App-header">
                <Container>
                    <LoginForm />
                </Container>
            </div>
        );
    }
}

export default App;

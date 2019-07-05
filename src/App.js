import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: 'AIzaSyCikmVbTEqRrDqkiUCD_M-hvI30K-R0ZVk',
            authDomain: 'manager-70cec.firebaseapp.com',
            databaseURL: 'https://manager-70cec.firebaseio.com',
            projectId: 'manager-70cec',
            storageBucket: '',
            messagingSenderId: '769323681485',
            appId: '1:769323681485:web:b8c90614a75b56b1'
        };
          // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeApp from './reducers'
import { AppContainer } from 'react-hot-loader';
import App from './components/App'


let store = createStore(storeApp, applyMiddleware(
    thunkMiddleware
));

if(NODE_ENV==='development') {
    console.log(NODE_ENV);
    store.subscribe(()=>console.log(store.getState()));
}

const render = Component => {
    ReactDOM.render(
        <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
        </AppContainer>,
        document.getElementById('root'),
    )
};
render(App);
if (module.hot) {
    module.hot.accept('./components/App', () => { render(App) })
}
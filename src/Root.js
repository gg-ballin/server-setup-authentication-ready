import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import async from 'middlewares/async';
import stateValidator from './middlewares/stateValidator'


export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers, 
        initialState, 
        applyMiddleware(async, stateValidator))
    return( 
        <Provider store = {store}>
        {children}
        </Provider>   
        )
}


// En {props.children} puede ir el componente que quieras
// Mas que nada es util para testear componentes que requieran
// del store de la app para funcionar y ser renderizados.
// El segundo argumento de createStore (props.initialState)
// que es un argumento opcional para inicializar el state para
// la aplicacion.
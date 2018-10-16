import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root'
import App from './components/App';

ReactDOM.render(
<Root>
    <BrowserRouter> 
        <Route path="/" component = {App} />
    </BrowserRouter>
</Root>,
 document.querySelector('#root'))

 //El root pasa el store a App ya que en Root.js esta el Provider con el store.
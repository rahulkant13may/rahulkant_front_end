import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import PostPage from './PostPage';
import PostDetail from './PostDetail';
ReactDOM.render(

<Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/post_page/:id/:name" component={PostPage} />
            <Route path="/post_page/detail" component={PostDetail} />
        </div>
</Router>, document.getElementById('root'));

serviceWorker.unregister();

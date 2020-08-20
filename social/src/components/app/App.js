import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostsList from '../posts/PostsList';
import PostDetail from '../posts/PostDetail';
import history from '../../history';

const App = () => {
    
    return (
        <>
            <div className="ui header container" style={{ border: 'none', borderRadius: '0px', marginBottom: '1em', marginTop: '4em' }}>
                <div className="ui text">
                    <h1 className="header item">
                        Posts Challenge
                    </h1>
                </div>
            </div>
            <div className="ui container">
                <Router history={history}>
                <Switch>
                    <Route path="/" exact component={PostsList} />
                    <Route path="/post/:id" exact component={PostDetail} />
                </Switch>
                </Router>
            </div>
        </>
    )
}

export default App;
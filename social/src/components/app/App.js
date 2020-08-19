import React from 'react';
import PostsList from '../posts/PostsList';

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
                <PostsList />
            </div>
        </>
    )
}

export default App;
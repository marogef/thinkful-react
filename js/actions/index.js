//Add a comment to the top of the file listing the various things that you need to be able to do during a game.

//make an action property
const action = {
        type: 'pass_ball',
        content: 'the actions of the field'
    }
    //For example, one action might be to guess a number. Another action might generate a new random number.


//Add an action creator function for each of the actions that you've listed.

cont pass_ball = 'pass_ball';
const action {
    type: pass_ball,

}

//make an action property
const action = {
    type: 'generate_number',
    content: 'the actions of the generating a number'
}

const action = {
    type: 'guess_number',
    content: 'the actions of guessing a random number'
}


//Edit js/reducers/index.js, and set up an empty reducer.
const initialRepositoryState = [];

export const repositoryReducer = (state = initialRepositoryState, action) => {
    return state;
};


//Work out what your initial state for your Hot and Cold app should be, and add this to the reducer.
//Add an if statement to the reducer for each different type of action in your js/actions/index.js file.
//Fill in the bodies of the if statements to modify the state accordingly.



const initialRepositoryState = [];

export const repositoryReducer = (state = initialRepositoryState, action) => {
    if (action.type === actions.ADD_REPOSITORY_Hot) {
        return [...state, {
            name: action.repositoryHot,
            rating: null
            }];
    } else if (action.type === actions.ADD_REPOSITORY_Cold) {
        // Find the index of the matching repository
        return [...state, {
            name: action.repositoryCold,
            rating: null
            }];
    }

    const before = state.slice(0, index);
    const after = state.slice(index + 1);
    const newRepository = Object.assign({}, state[index], {
        rating: action.rating
    });
    return [...before, newRepository, ...after];
}

return state;
};


//Import the store and actions, then dispatch some actions by passing them to the store.dispatch method. Check that it worked by inspecting the state using the store.getState method.

import {
    createStore
}
from 'redux';

import * as reducers from './reducers/index';

export default createStore(reducers.repositoryReducer);
//




//use ReactDOM.render to render the Game component into the <div>

import React from 'react';
import ReactDOM from 'react-dom';

import RepositoryList from './components/game.js';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render( < RepositoryList / > , document.getElementById('repositoryName'))
);

//

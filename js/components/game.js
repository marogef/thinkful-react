//Create a component called Game in js/components/game.js

import React from 'react';
import {
    connect
}
from 'react-redux';

import Repository from './repository';
import * as actions from '../actions/index';

export class Game extends React.Component {
        constructor(props) {
            super(props);
            this.addRepository = this.addRepository.bind(this);
        }

        addRepository() {
            const repositoryName = this.repositoryNameInput.value;
            this.props.dispatch(actions.addRepository(repositoryName));
        }

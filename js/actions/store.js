//Add a file called js/store.js, and create and export a store that uses your reducer.
//Create a small file to manually test your actions, reducer, and store.
//
import * as actions from './actions/index';
import store from './store';

//Use the connect method to link the components to the appropriate data from your React store, replacing your dummy data

import {
    connect
}
from 'react-redux';
export default connect(mapStateToProps)(Show);

//Dispatch the appropriate actions from your components to make the game fully playable

addRepository() {
    const repositoryName = this.repositoryNameInput.value;
    this.props.dispatch(actions.addRepository(repositoryName));
}

store.dispatch(actions.addRepositoryHot('hot'));
store.dispatch(actions.addRepositoryCold('cold'));
console.log(store.getState()); // Logs [{ name: 'joe', rating: null}]

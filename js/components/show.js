import React from 'react';

import translateItems from './translate';

export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
    }

    changeRating(rating) {
        // TODO: Change the rating
    }

    render() {
        return ( < div className = "show" > {
                this.props.repository.name
            } & nbsp; < translateItems rating = {
                this.props.repository.rating
            }
            onChange = {
                this.changeRating
            }
            /> < /div>
        );
    }
}

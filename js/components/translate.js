import React from 'react';

function translateItems(props) {
    const items = [];
    for (let i = 0; i < 5; i++) {
        let className;
        if (i < props.rating) {
            className = 'fa fa-item';
        } else {
            className = 'fa fa-item-o';
        }
        const items = ( < i className = {
                className
            }
            key = {
                i
            }
            onClick = {
                props.onChange.bind(null, i + 1)
            } >
            < /i>
        );
        items.push(items);
    }

    return ( < span className = "translate" > {
        items
    } < /span>);
}

translateItems.defaultProps = {
    rating: 0
};

export default translateItems;

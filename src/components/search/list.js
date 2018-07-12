import React, { Component } from 'react';
import Item from './item';

class List extends Component {
    renderItems() {
    	const { items } = this.props;

    	return items.map(item => <Item key={item.id} entity={item} />)
	}

	render() {
    	const { isFetching } = this.props;

        return (
			<ul>
				{isFetching && 'Loading'}
				{!isFetching && this.renderItems()}
			</ul>
        )
	}
}

List.defaultProps = {
    items: []
};

export default List
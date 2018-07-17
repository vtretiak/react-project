import React, { Component } from 'react';
// import Item from '../containers/item';
import Item from './item';

class List extends Component {
    renderItems() {
    	const { items } = this.props;

    	return items.map(item => <Item key={item.id} entity={item} />)
	}

	showSpinner() {
    	return <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
	}

	render() {
    	const { isFetching } = this.props;

        return (
			<div>
				{isFetching && this.showSpinner()}
				{!isFetching && this.renderItems()}
			</div>
        )
	}
}

List.defaultProps = {
    items: []
};

export default List
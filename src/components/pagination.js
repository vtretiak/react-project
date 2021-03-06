import React, { Component } from 'react';
import {IMG_ON_PAGE} from '../constants';
import '../static/main.less';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this);
    }
    changePage (e) {
        const { fetch } = this.props;
        const { searchText } = this.props;
        fetch(searchText, e.target.textContent);
    }
    showPages () {
        const { totalHits } = this.props;
        if ( totalHits <= IMG_ON_PAGE){
            return null
        }
        const range = [];
        for (let i = 0; i < Math.ceil(totalHits / IMG_ON_PAGE); ++i) {
            range.push(i);
        }
        return range.map(v => <li className={ 'page-item' } key={v.toString()}>
                <a className="page-link" href="#" onClick={this.changePage}>{v + 1}</a>
            </li>
        );

    }

    render() {
        return (
            <div className='padination-container'>
                <ul className="pagination">
                {this.showPages()}
                </ul>
            </div>
        )
    }

}

export default Pagination
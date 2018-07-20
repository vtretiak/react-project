import React, { Component } from 'react';
import '../static/main.less';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: null
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleKeyPress(e) {
        if(e.key == 'Enter'){
            e.preventDefault();
            this.setState({
                searchText: e.target.value
            });

            this.handleSearch();
        }
    }

    handleSearch() {
        const { fetch } = this.props;

        fetch(this.state.searchText);
    }

    render() {
        return (
            <div className='search-container'>
                <form>
                    <h4>Search images!</h4>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Search: </span>
                            <input className="search" type="text" placeholder="ex. cat" onKeyPress={this.handleKeyPress} />
                            <input className="btn-danger" type="button" onClick={this.handleSearch} value="GO" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;

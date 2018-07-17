import React, { Component } from 'react';
import '../static/main.less';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchText: e.target.value
        })
    }

    search() {
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
                            <input className="search" type="text" placeholder="ex. cat" onChange={this.handleChange}/>
                            <input className="btn-danger" type="button" onClick={this.search} value="GO"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;

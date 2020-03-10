import React, { Component } from 'react'

class SearchProduct extends Component {
    state = {
        searchValue: ''
    }

    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value
        });
    }

    handleClick = (e) => {
        this.props.onSearch(this.state.searchValue);
    }

    render() {
        const { searchValue } = this.state;
        const styles = { margin: '1.5rem 0.3rem' };

        return (
            <form style={styles}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            name="search"
                            value={searchValue}
                            onChange={this.handleChange} /> 
                    </div>
                    <div className="control">
                        <button
                            className="button is-info"
                            type="button"
                            onClick={this.handleClick}
                        >Buscar</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchProduct;
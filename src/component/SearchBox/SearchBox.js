import React, { Component } from 'react'

class SearchBox extends Component {
    render() {
        const {onSearch} = this.props
        return (
            <div className="pa2">
                <input 
                    className = "pa3 ba b--green bg-lightest-blue"
                    type = "search"
                    placeholder = "Search for your robots!"
                    onChange={onSearch}
                />
            </div>
        )
    }
}

export default SearchBox

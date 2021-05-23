import React, { Component } from 'react'

class SearchBox extends Component {
    render() {
        const {onSearch,onClick} = this.props
        return (
            <div>
                <div className="pa2">
                <input 
                    className = "pa3 ba b--green bg-lightest-blue"
                    type = "search"
                    placeholder = "Search for your topics!"
                    onChange={onSearch}
                />
                </div>
                <div className="btn-group m-3">
                    <button type="button" className="btn btn-primary" onClick={onClick}  value ="all">All</button>
                </div>
                <div className="btn-group m-3">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Groups
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className='dropdown-item ' onClick={onClick} value='Academic'>Academic</button></li>
                        <li><button className='dropdown-item' onClick={onClick} value='Fl'>Financial Literacy</button></li>
                    </ul>
                </div>
                <div className="btn-group m-3">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Levels
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className='dropdown-item ' onClick={onClick} value='Ks1'>Key Stage 1</button></li>
                        <li><button className='dropdown-item ' onClick={onClick} value='Ks2'>Key Stage 2</button></li>
                        <li><button className='dropdown-item ' onClick={onClick} value='Fl'>Financial Literacy</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchBox

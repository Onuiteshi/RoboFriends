import React, { Component } from 'react'

export class ErrorBoundary  extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})
    }

    render() {
        const {hasError} = this.state

        if(hasError){
            return <h2>OOPS.... SOMETHING IS WRONG</h2>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary



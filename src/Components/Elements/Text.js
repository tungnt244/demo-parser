import React, {Component} from 'react'
import XMLParser from 'react-xml-parser'

// component extracts properties from json data from folder

export default class Text extends Component {
    constructor(props){
        super(props)
        let tempObj = this.props.self.elProps
        let nameEl = this.props.self.name
        this.state = tempObj
    }

    render(){
            return(
                <div style={this.state.style}>
                    <h1>{this.state.value}</h1>
                </div>
            )
    }
}
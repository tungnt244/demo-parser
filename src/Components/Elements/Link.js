import React, {Component} from 'react'
import XMLParser from 'react-xml-parser'
// component extracts properties from json data from folder

export default class Link extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.self.name,
            href: this.props.self.href,
            color: this.props.self.color
        }
    }

    render(){
        console.log('name',this.state.href) 
        return(
        <div>
            <h1><a href={this.state.href}>click</a></h1>
        </div>
        )
    }
}
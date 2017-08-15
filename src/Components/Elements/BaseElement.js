import React, {Component} from 'react'
import Image from './Image'
import Link from './Link'
import Text from './Text'

const LINKCODE = (props) => {
    console.log('props',props)
    return <Link self={props}/>
}

const IMAGECODE = (props) => {
    return <Image self={props}/>
}

const TEXTCODE = (props) => {
    return <Text self={props}/>
}

export default class BaseElement extends Component{
    constructor(props){
        super(props)
        let tempObj = this.props.self
        tempObj.id = this.props.id
        this.state = tempObj
    }

    getElement = () => {
        console.log('state',this.state )
        switch(this.state.name){
            case 'Image':
                return IMAGECODE(this.state)
            case 'Text':
                return TEXTCODE(this.state)
            case 'Link':
                return LINKCODE(this.state)
        }
    }

    render(){
        return(
            <div style={this.state.style}>
                {this.getElement()}
            </div>
        )
    }
}
import React, {Component} from 'react'
// var parseString = require('xml2js').parseString
import {parseString} from 'xml2js'
import Image from '../Elements/Image'
import Text from '../Elements/Text'
import Link from '../Elements/Link'
import BaseElement from '../Elements/BaseElement'
// import XMLParser from 'react-xml-parser'

const IMAGECODE = (key, imageProps) => {
    return <Image key={key} imageProps={imageProps}/>
}

const TEXTCODE = (key, textProps) => {
    return <Text key={key} textProps={textProps}/>
}

const LINKCODE = (key, linkProps) => {
    return <Link key={key} linkProps={linkProps}/>
}

const BLOCK_JSON = {
    id: 1,
    style: {
        backgroundColor: 'yellow',
        position: 'fixed',
        marginTop: '10px',
        marginLeft: '5px'
    },
    childrens: {
        1: {
            style:{
                height: '150px',
                width: '250px',
                backgroundColor: 'blue',
                position: 'relative',
                className: 'navbar-reverse',
                'z-index': '1000',
            },
            name: 'Text',
            elProps: {
                style: {
                    color: 'red',
                    size: '60px'
                },
                value: '"Buy cool watch" 101'
            }
        },
        4: {
            style: {
                height: '150px',
                width: '250px',
            },
            name: 'Text',
            elProps: {
                style: {
                    color: 'black',
                },
                value: '"Buy cool watch" 102'
            }
        }
    }
}

export default class Layout extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.setState(BLOCK_JSON)
    }

    renderChilren(id, children){
        return <BaseElement key={id} id={id} self={children} />
    }

    renderAllChildrens(){
        let tempChildrens = []
        let childrenIds = Object.keys(this.state.childrens)
        for(let idIndex in childrenIds) {
            let childrenId = childrenIds[idIndex]
            let childrenValue = this.state.childrens[childrenId]
            tempChildrens.push(this.renderChilren(childrenId, childrenValue))
        }
        return tempChildrens

    }

    render(){
        let childrens = {}
        if(typeof this.state != 'undefined' && this.state)
            if(this.state.childrens)
                childrens = this.state.childrens
        if(Object.keys(childrens).length > 0) 
            return(
                <div style={this.state.style}>
                    {this.renderAllChildrens()}
                </div>
            )
        return(
            <div>Wait a minute</div>
        )   
    }
}
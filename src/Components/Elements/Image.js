import React, {Component} from 'react'
import XMLParser from 'react-xml-parser'
import BaseElement from './BaseElement'


// component extracts properties from json data from folder

export default class Image extends Component {
    constructor(props){
        super(props)
    }


    render(){
            return(
                <div>
                    <h1>this is image element</h1>
                </div>
            )
    }
}
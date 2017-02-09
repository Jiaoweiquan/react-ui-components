import * as React from 'react'
import ColorPicker from '../component/colorPicker'
import Section from './section'

export default class extends React.Component<{},{}>  {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <Section color={'white'}>
            <ColorPicker />
            <svg width="500px" height="500px">
                <path stroke="black" fill="lightblue" d="M250 0 c 0 150, 250 150, 250 0 Z" />                
                <path stroke="red" d="M250 0 v 125" />
                <path stroke="red" d="M500 0 v 300" />
                <path stroke="black" d="M250 250 q 50 100, 100 0 s 50 -200,100 0" />
                <circle  cx="10" cy="10" r="5" fill="red"/>
            </svg>
        </Section>
    }
}
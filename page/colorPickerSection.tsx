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
        </Section>
    }
}
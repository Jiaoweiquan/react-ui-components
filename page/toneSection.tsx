import * as React from 'react'
import Section from './section'
import { tones } from '../utils/tone'
import Slider from '../component/slider'

interface CompProps{
}

interface CompState{

}

export default class ToneSection extends React.Component<CompProps, CompState> {
    static defaultProps= {
    }

    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }    

    render() {
        const p = this.props        
        return (
            <Section color={'hsl(320, 30%, 50%)'}>
                <button onClick={() => { tones.play(3000); this.forceUpdate()}}>
                    play
                </button>   
                <Slider />   
            </Section>
        )
    }
}

import * as React from 'react'
import Section from './section'
import { tones } from '../utils/tone'
import Slider from '../component/slider'
import {throttle} from '../utils/decorators'

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
    
    play = () => {
        const freqIns = (this.refs['pitch'] as HTMLInputElement).value
        const freq = parseInt(freqIns) || 1000
        tones.play(freq)
    }

    //change input dom value
    onSliderChange = (per:number) => {
        const max = 16000;
        (this.refs['pitch'] as HTMLInputElement).value = String(Math.round(max*per))
        this.playOnChange()
    }

    @throttle(500)
    playOnChange() {
        this.play()
    }

    render() {
        const p = this.props        
        return (
            <Section color={'hsl(320, 30%, 50%)'}>
                <input type='text' defaultValue={'3000'} ref='pitch' />
                <button onClick={this.play}>
                    play
                </button>   
                <Slider onChange={this.onSliderChange}/>   
            </Section>
        )
    }
}

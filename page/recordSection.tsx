import * as React from 'react'
import * as recordUtil from '../utils/media'
import Section from './section'

interface CompState{
    isRecording:boolean;
    ctime: Date;
    voice:Blob|null;
}

export default class extends React.Component<{},CompState>  {
    timer=0
    constructor(props) {
        super(props)
        this.state = {
            isRecording:false,
            ctime: new Date(),
            voice: null
        }        
    }

    handleStart = () => {
        this.setState({
            isRecording:true,
            ctime: new Date,
            voice:null
        })
        recordUtil.startRecord()
        this.timer = setInterval(() => this.forceUpdate(), 500) //clear when unmount
    }

    handleStop = ()=> {
        this.setState({
            isRecording:false
        })
        clearInterval(this.timer)        
        recordUtil.stopRecord().then(data => {
            console.log('record result: ',data)
            this.setState({voice: data})
        })
    }
        
    render() {
        const {isRecording, voice} = this.state
        const hasPermision = recordUtil.hasAudioPermission
        let diff:number = 0
        if(isRecording) {
            diff = Date.now() - this.state.ctime.getTime()
            diff = Math.round(diff/1000)
        }
        return <Section hue={20}>
            <button onClick={this.handleStart} disabled={isRecording || !hasPermision}>start</button>
            <button onClick={this.handleStop} disabled={!isRecording || !hasPermision} >stop</button>
            {!hasPermision &&
                <span>Please give me the permission to access audio.</span>
            }
            {isRecording &&
                <div>
                    <span> recording... (Ah,If only there is a loading component, that would be better.)</span>
                    <p>{diff}'s</p>
                </div>
            }
            {voice &&
                <div>
                    <audio src={URL.createObjectURL(voice)} controls={true}>hello</audio>
                </div>
            }
        </Section>
    }
}
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Section from './section'
import CardSection from './cardSection'
import ScrollButtonSection from './scrollButtonSection'
import RecordSection from './recordSection'
import WaveMap from '../component/waveMap'
import Flicker from '../component/flicker'
import HoverMenu from '../component/hoverMenu'
import { tones } from '../utils/tone'
import Draggable, { DragEvent } from '../component/draggable'

let hover:HoverMenu
function moveHover(evt: DragEvent) {
    if(!hover) return
    const offsetX = evt.currentX - evt.preX
    const offsetY = evt.currentY - evt.preY
    hover.move(offsetX, offsetY)
}

const App = (
    <div>
        <h1>react ui components collections</h1>
        <CardSection />
        <ScrollButtonSection />
        <RecordSection />
        <Section hue={40}>
            <WaveMap />
        </Section>
        <Section hue={300}>
            <Flicker hue={1} style={{textAlign:'center', padding: '1em'}}>
                <p> flickering</p>
            </Flicker>
        </Section>
        <Section hue={320}>
            <button onClick={() => tones.play(3000)}>
                play
            </button>      
        </Section>
        <Draggable onMove={moveHover}>
            <HoverMenu ref={node=>hover=node}/>
        </Draggable>  

    </div>    
)

export default App
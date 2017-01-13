import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Section from './section'
import CardSection from './cardSection'
import ScrollButtonSection from './scrollButtonSection'
import RecordSection from './recordSection'
import WaveMap from '../component/waveMap'
import Flicker from '../component/flicker'

const App = (
    <div>
        <h1>react ui components collections</h1>
        <CardSection />
        <ScrollButtonSection />
        <RecordSection />
        <Section hue={40}>
            <WaveMap />
        </Section>
        <Section hue={30}>
            <Flicker hue={1} style={{textAlign:'center', padding: '1em'}}>
                <p> flickering</p>
            </Flicker>
        </Section>
    </div>    
)

export default App
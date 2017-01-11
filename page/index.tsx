import * as React from 'react'
import * as ReactDOM from 'react-dom'
require('./style/base.css')
import {initRefresher} from '../utils/refresher'

import CardSection from './cardSection'
import ScrollButtonSection from './scrollButtonSection'
import RecordSection from './recordSection'
import WaveMap from '../component/waveMap'
import Flicker from '../component/flicker'

function main() {
    ReactDOM.render(
        <div>
            <h1>react ui components collections</h1>
            <CardSection />
            <ScrollButtonSection />
            <RecordSection />
            <WaveMap />
            <Flicker />
        </div>,
        document.getElementById('root')!
    )
}

initRefresher(main)

import * as React from 'react'
import * as ReactDOM from 'react-dom'
require('./style/base.css')
import {initRefresher} from '../utils/refresher'

import CardSection from './cardSection'
import ScrollButtonSection from './scrollButtonSection'
import RecordSection from './recordSection'

function main() {
    ReactDOM.render(
        <div>
            <h1>react ui components collections</h1>
            <CardSection />
            <ScrollButtonSection />
            <RecordSection />
        </div>,
        document.getElementById('root')!
    )
}

initRefresher(main)

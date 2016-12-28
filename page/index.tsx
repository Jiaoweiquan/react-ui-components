import * as React from 'react'
import * as ReactDOM from 'react-dom'
require('./style/base.css')

import CardSection from './cardSection'
import ScrollButtonSection from './scrollButtonSection'

ReactDOM.render(
    <div>
        <h1>react ui components collections</h1>
        <CardSection />
        <ScrollButtonSection />
    </div>,
    document.getElementById('root')!
)
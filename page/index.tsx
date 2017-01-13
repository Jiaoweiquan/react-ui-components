import * as React from 'react'
import * as ReactDOM from 'react-dom'
require('./style/base.css')
import {initRefresher} from '../utils/refresher'
import App from './app'

function main() {
    ReactDOM.render(App,document.getElementById('root')!)
}

initRefresher(main)

if((module as any).hot) {
    module.hot.accept()
}

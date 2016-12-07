import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Card from '../component/card'
require('./style/base.css')

ReactDOM.render(
    <div>
        <Card 
            title={'Anders'} 
            detail={'The author of typescript'} 
            imgSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Anders_Hejlsberg.jpg/220px-Anders_Hejlsberg.jpg'} 
            notation={'59yr'} 
        />
    </div>,
    document.getElementById('root')!
)
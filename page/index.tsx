import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Card from '../component/card'
import ScrollButton from '../component/scrollButton'
require('./style/base.css')

ReactDOM.render(
    <div>
        <section>        
            <Card 
                title={'Anders'} 
                detail={'The author of typescript'} 
                imgSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Anders_Hejlsberg.jpg/220px-Anders_Hejlsberg.jpg'} 
                notation={'59yr'} 
            />
        </section>
        <section>
            <ScrollButton />
        </section>
    </div>,
    document.getElementById('root')!
)
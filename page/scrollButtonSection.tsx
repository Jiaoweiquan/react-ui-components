import * as React from 'react'
import ScrollButton from '../component/scrollButton'
import Section from './section'

export default class extends React.Component<{},{btnValue: number}>  {
    constructor(props) {
        super(props)
        this.state = {
            btnValue:0
        }
    }
    render() {
        const expandStyle = {
            width: (this.state.btnValue + 10) * 20
        }
        return <Section className="scrollButtonSection">
            <ScrollButton onChange={value => this.setState({btnValue: value})} />    
            <div className="expand" style={expandStyle}></div>
            {/*<p>在按钮上滚动以改变数值</p> */}
        </Section>
    }
}
import * as React from 'react'
require('./hoverMenu.css')

interface CompProps{
}

interface CompState{
    offsetX:number;
    offsetY:number;
}

export class HoverMenu extends React.Component<CompProps, CompState> {
    static defaultProps= {
    }

    constructor(props) {
        super(props)
        this.state = {
            offsetX: 0,
            offsetY: 0
        }
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }   

    move(offsetX:number, offsetY:number) {
        this.setState({
            offsetX: offsetX + this.state.offsetX,
            offsetY: offsetY + this.state.offsetY
        })
    }

    render() {
        const p = this.props
        const {offsetX, offsetY} = this.state
        const style = {
            transform: `translate(${offsetX}px, ${offsetY}px)`
        }
        return (
            <div className='jvq-hover-menu' style={style}>
            </div>
        )
    }
}

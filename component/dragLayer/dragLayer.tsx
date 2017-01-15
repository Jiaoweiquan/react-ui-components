import * as React from 'react'

interface CompProps{
    //center of the drag layer
    x: number;
    y: number;
    width: number;
    height: number;
}

interface CompState{
}

export class DragLayer extends React.Component<CompProps, CompState> {
    static defaultProps= {
    }

    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }    

    handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
        const startX = e.clientX
        const startY = e.clientY
    }

    render() {
        const p = this.props

        const positionStyle = {
            left: p.x,
            top: p.y
        }   

        const touchStyle = {
            position: 'relative',
            width: p.width,
            height: p.height,
            left: - p.width/2,
            top: - p.height/2
        }     
        return (
            <div style={positionStyle}>
                <div style={touchStyle} onMouseDown={this.handleMouseDown}></div>
            </div>
        )
    }
}

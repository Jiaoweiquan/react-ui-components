import * as React from 'react'
import Draggable, {DragEvent} from '../draggable'
require('./slider.css')

interface CompProps{
}

interface CompState{
    pinPositon: number;
}

export class Slider extends React.Component<CompProps, CompState> {
    static defaultProps= {
    }

    pinWidth=19;  //Should be confiurable
    barWrapperPadding=5;
    barLength:number;
    constructor(props) {
        super(props)
        this.state = {
            pinPositon: 0
        }
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }    
    // shouldComponentUpdate(nextProps, nextState) {
    //      return nextProps !== this.props || this.state != nextState
    // }

    handleSlide = (evt: DragEvent) => {
        const offsetX = evt.currentX - evt.preX
        const nextPosition = offsetX + this.state.pinPositon

        if(nextPosition < 0 || nextPosition > (this.barLength - this.pinWidth))
            return
        this.setState({
            pinPositon: nextPosition
        })
    }

    //weird, draggable中stopPropgation只能阻止同为mousedown的事件，而不能阻止上层的onclick事件
    //因此这里用的onmousedown
    handleSliderClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        const targetPos = (evt.target as HTMLDivElement).getBoundingClientRect()
        const xAtTarget = evt.clientX - targetPos.left
        const yAtTarget = evt.clientY - targetPos.top
        // console.log(xAtTarget, yAtTarget)
        
        let pos = xAtTarget - this.barWrapperPadding
        pos = Math.max(pos, 0)
        pos = Math.min(pos, this.barLength - this.pinWidth)
        this.setState({
            pinPositon: pos
        })   
    }

    render() {
        const p = this.props    
        const pinStyle = {
            left: this.state.pinPositon
        }    
        return (
            <div className='jvq-slider' onMouseDown={this.handleSliderClick}>
                <div className='jvq-slider-bar' ref={node => node && (this.barLength = node.clientWidth)}>
                    <div className='jvq-slider-pin' style={pinStyle}>
                        <Draggable  onMove={this.handleSlide} className='jvq-slider-pin-overlay' />
                    </div>
                </div>
            </div>
        )
    }
}

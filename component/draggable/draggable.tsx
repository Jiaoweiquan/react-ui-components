import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DragEvent } from './index'


interface CompProps{
    onMove?: (evt: DragEvent) => void;
    //onStart 和 onStop 不传入参数应该更好
    onStart?: (evt?: DragEvent) => void;
    onStop?: (evt?: DragEvent) => void;
    style?: React.CSSProperties;
    className?: string;
}

interface CompState{

}

export class Draggable extends React.Component<CompProps, CompState> {
    static defaultProps= {
    }

    private startX:number;    
    private startY:number;
    private preX:number;
    private preY:number;

    constructor(props) {
        super(props)        
    }

    componentDidMount() {
    }
    componentDidUpdate() {
    }    

    /* mouse logic */
    handleMouseDown = (evt:React.MouseEvent<HTMLDivElement>) => {
        console.log('drag mouse down')
        evt.stopPropagation()        
        evt.preventDefault()

        this.preX = this.startX = evt.pageX
        this.preY = this.startY= evt.pageY

        const doc = ReactDOM.findDOMNode(this).ownerDocument;
        doc.addEventListener('mousemove', this.handleMouseMove)
        doc.addEventListener('mouseup', this.handleMouseUp)

        this.props.onStart && this.props.onStart({
            currentX: this.startX,
            currentY: this.startY,
            startX: this.startX,
            startY: this.startY,
            preX: this.preX,
            preY: this.preY
        })
    }

    handleMouseMove = (evt: MouseEvent) => {
        evt.stopPropagation()        
        evt.preventDefault()
        const { pageX, pageY } = evt
        this.props.onMove && this.props.onMove({
            currentX: pageX,
            currentY: pageY,
            startX: this.startX,
            startY: this.startY,
            preX: this.preX,
            preY: this.preY
        })
        this.preX = pageX
        this.preY = pageY
    }

    handleMouseUp = (evt: MouseEvent) => {
        evt.stopPropagation()          
        evt.preventDefault()   
        const doc = ReactDOM.findDOMNode(this).ownerDocument;   
        doc.removeEventListener('mousemove', this.handleMouseMove)
        doc.removeEventListener('mouseup', this.handleMouseUp)

        const { pageX, pageY } = evt
        this.props.onStop && this.props.onStop({
            currentX: pageX,
            currentY: pageY,
            startX: this.startX,
            startY: this.startY,
            preX: this.preX,
            preY: this.preY
        })
    }
    /* mouse logic end */

    /* touch logic start */
    private touchID:number;
    handleTouchStart  = (evt: React.TouchEvent<HTMLDivElement>) => {
        evt.preventDefault()
        evt.stopPropagation()
        this.touchID = evt.touches[0] && evt.touches[0].identifier
        const initialTouch = evt.touches[0]
        this.startX = this.preX = initialTouch.pageX
        this.startY = this.preY = initialTouch.pageY
        // console.log('touch start')  
        this.props.onStart && this.props.onStart()      
    }

    handleTouchMove = (evt: React.TouchEvent<HTMLDivElement>) => {
        evt.preventDefault()
        evt.stopPropagation()

        const touchList = evt.touches
        let initialTouch:React.Touch|null = null
        for(let i=0; i < touchList.length; i++) {
            if(touchList[i].identifier == this.touchID)
                initialTouch = touchList[i]
        }
        if(!initialTouch) {
            console.warn('unknow touch')
        } else {
            let {pageX, pageY} = initialTouch
            this.props.onMove && this.props.onMove({
                currentX: pageX,
                currentY: pageY,
                startX: this.startX,
                startY: this.startY,
                preX: this.preX,
                preY: this.preY                
            })
            this.preX = pageX
            this.preY = pageY
        }

        // console.log('touch move')
    }

    handleTouchEnd = () => {
        // console.log('touch end')
        this.props.onStop && this.props.onStop()
    }
    /*touch logic end*/

    render() {
        const p = this.props        
        return (
            <div style={p.style} className={p.className} 
                onMouseDown={this.handleMouseDown} 
                onTouchStart={this.handleTouchStart} 
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
                >
                {p.children}
            </div>
        )
    }
}

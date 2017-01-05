import * as React from 'react'
import {WaveMapProps, WaveMapState} from './index'

export class WaveMap extends React.Component<WaveMapProps, WaveMapState> {
    static defaultProps= {
        width:300,
        height:250
    }

    context:CanvasRenderingContext2D;
    constructor(props) {
        super(props)
    }

    saveContext = (node: HTMLCanvasElement) => {
        node && (this.context = node.getContext('2d')!)
    }    

    paint() {        
        let ctx = this.context        
        let p = this.props
        if(!ctx) return
        ctx.clearRect(0, 0, p.width!, p.height!)
        ctx.lineWidth = 1
        
        //http://stackoverflow.com/questions/13879322/drawing-a-1px-thick-line-in-canvas-creates-a-2px-thick-line
        //cavans can't draw a one px line.
        const pitch = (index:number, height:number) => {
            ctx.beginPath()
            ctx.moveTo(index+0.5, p.height!)
            ctx.lineTo(index+0.5, p.height! - height)
            ctx.closePath()
            ctx.stroke()            
        }
        // ctx.fillStyle = "green";
        // ctx.fillRect(10, 10, 100, 100);  
        // ctx.lineTo
        ctx.strokeStyle = 'hsl(0, 50%, 40%)'
        for(let i=0; i<p.width; i+=5) {
            pitch(i, Math.floor(Math.random() * p.height))
        }

    }
    componentDidMount() {
        this.paint()
    }
    componentDidUpdate() {
        this.paint()
    }    

    render() {
        const p = this.props        
        return (
            <canvas 
                ref={this.saveContext} 
                width={p.width} 
                onClick={() => this.forceUpdate()}
                height={p.height}>
                    Your browser doesn't support canvas
            </canvas>
        )
    }
}
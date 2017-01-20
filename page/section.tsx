import * as React from 'react'
import {isMobile} from '../utils/userAgent'

interface CompProps{
    [attr:string]:any;
    hue?:number;
    color?: string;    
}

interface CompState{
    height: number;
}

export default class Section extends React.Component<CompProps, CompState> {
    static defaultProps= {
        hue: 200
    }

    constructor(props) {
        super(props)
        this.state = {
            height: window.innerHeight
        }
    }
    layout = () => {
        this.setState({
            height: window.innerHeight
        })
    }
    componentDidMount() {
        !isMobile && window.addEventListener('resize', this.layout )
    }
    componentDidUpdate() {
    }    
    componentWillUnmount() {
        !isMobile && window.removeEventListener('resize', this.layout)
    }

    render() {
        const p = this.props  
        const bgColor = p.color || `hsl(${p.hue}, 50%, 80%)`
        const style = {
            height: this.state.height,
            backgroundColor: bgColor
        }
        const rawAttr = {...p}
        delete rawAttr.hue
        delete rawAttr.color
        return (
            <section {...rawAttr} style={style}>
                {p.children}
            </section>
        )
    }
}

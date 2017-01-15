import * as React from 'react'
import {isMobile} from '../utils/userAgent'

interface CompProps{
    [attr:string]:any;
    hue?:number;
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
        const style = {
            height: this.state.height,
            backgroundColor: `hsl(${p.hue}, 50%, 80%)`
        }
        const rawAttr = {...p}
        delete rawAttr.hue
        return (
            <section {...rawAttr} style={style}>
                {p.children}
            </section>
        )
    }
}

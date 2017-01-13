import * as React from 'react'

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
            height: document.documentElement.clientHeight
        }
    }
    layout = () => {
        this.setState({
            height: document.documentElement.clientHeight
        })
    }
    componentDidMount() {
        window.addEventListener('resize', this.layout )
    }
    componentDidUpdate() {
    }    
    componentWillUnmount() {
        window.removeEventListener('resize', this.layout)
    }

    render() {
        const p = this.props        
        const style = {
            height: this.state.height,
            backgroundColor: `hsl(${p.hue}, 50%, 80%)`
        }
        return (
            <section {...p} style={style}>
                {p.children}
            </section>
        )
    }
}

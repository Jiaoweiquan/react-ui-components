import * as React from 'react'
require('./flicker.css')

interface CompProps{
    style?: React.CSSProperties,
    color?: string;
    hue?: number;
}

interface CompState{

}

export class Flicker extends React.Component<CompProps, CompState> {
    static defaultProps= {
    }

    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    componentDidUpdate() {
    }    

    render() {
        const p = this.props
        const style = {
            ...p.style,
            backgroundColor: (p.hue === undefined) ? null: `hsl(${p.hue}, 60%, 80%)`
        }
        return (
            <div style={style} className={'jvq-flicker'}>
                {p.children}            
            </div>
        )
    }
}

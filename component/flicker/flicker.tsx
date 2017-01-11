import * as React from 'react'
require('./flicker.css')

interface CompProps{
    style?: React.CSSProperties,
    color?: string|number;
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
        return (
            <div style={p.style} className={'jvq-flicker'}>
                ok
            </div>
        )
    }
}

import * as React from 'react'
require('./hoverMenu.css')

interface CompProps{
}

interface CompState{
}

export class HoverMenu extends React.Component<CompProps, CompState> {
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
            <div className='jvq-hover-menu'>
            </div>
        )
    }
}

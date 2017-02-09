import * as React from 'react'
require('./colorPicker.less')

interface CompProps{
}

interface CompState{

}

export class ColorPicker extends React.Component<CompProps, CompState> {
    static defaultProps= {
    }

    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    componentDidUpdate() {
        React.createElement
    } 

    $colorfulSpots() {
        let ret:any = []
        for(let i=0; i< 7;i++) {
            const spotStyle = { transform: `rotateZ(${30+30*i}deg)`, backgroundColor:`hsl(${i*55}, 80%, 50%)`}
            ret.push(<div className="jvq-cp-spot" style={spotStyle}></div>)
        }
        return ret
    }   

    render() {
        const p = this.props     
        return (
            <div className="jvq-color-picker">
                <div className="jvq-cp-track">
                    {this.$colorfulSpots()}
                </div>
            </div>
        )
    }
}

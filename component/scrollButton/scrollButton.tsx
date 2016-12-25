import * as React from 'react'
import { ScrollProps, ScrollState } from './index'
const { Component } = React
require('./scrollButton.css')

export class ScrollButton extends Component<ScrollProps, ScrollState> {
    private isAnamating=false;
    static defaultProps = {
        maxValue:10,
        minValue:-10
    }

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            isActive: false
        }
        this.handleWhell = this.handleWhell.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    

    handleWhell(evt: React.WheelEvent<HTMLButtonElement>) {
        // console.log(evt, evt.deltaY);
        evt.stopPropagation()
        evt.preventDefault()
        if(evt.deltaY>0) {
            if(this.state.value >=this.props.maxValue) return this.flicker()
            else this.state.value +=1
        } else {
            if(this.state.value <= this.props.minValue) return this.flicker()
            else this.state.value -=1
        }
        this.forceUpdate()
    }

    handleClick() {
        this.flicker()
    }

    flicker() {
        if(this.isAnamating) return 
        this.isAnamating = true
        this.setState({
            isActive: true
        } as ScrollState, ()=>setTimeout(()=> {
            this.isAnamating = false
            this.setState({
                isActive:false
            } as ScrollState)
        }, 200))
    }    

    render() {    
        const btnCls = this.state.isActive ? 'active':''
        return (
            <div className={'jvq-rollBtn'}>
                <button onWheel={this.handleWhell} onClick={this.handleClick} className={btnCls} title='scoll to change value' >{this.state.value}</button>
            </div>
        )        
    }
}
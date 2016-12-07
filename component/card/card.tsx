import * as React from 'react'
import { CardProps } from './index'
const { Component } = React
require('./card.css')

export class Card extends Component<CardProps, {}> {

    render() {
        let imgStyle = {
            backgroundImage: `url(${this.props.imgSrc})`
        }
        return (
            <div className={'card'}>
                <div className='card-image' style={imgStyle}>
                </div>
                <div className='card-title' >{this.props.title}</div>
                <div className='card-detail' >{this.props.detail}</div>
                <div className='card-footer'>
                    <span>{this.props.notation}</span>
                </div>
            </div>
        )        
    }
}
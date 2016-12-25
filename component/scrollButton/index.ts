import { ScrollButton } from './scrollButton'

export interface ScrollProps {
    maxValue?:number;
    minValue?:number;
}

export interface ScrollState {
    value: number;
    isActive:boolean;
}

export default ScrollButton
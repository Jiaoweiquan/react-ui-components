
export {Draggable as default} from './draggable'

export interface DragEvent {
    startX: number;
    startY: number;
    currentX: number;    
    currentY: number;
    preX: number;
    preY: number;
}
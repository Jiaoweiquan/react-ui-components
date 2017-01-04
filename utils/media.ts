//  const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
import * as Recorder from '../res/recorder.js'
import {refresh} from './refresher'

const audio_context = new AudioContext();
export let hasAudioPermission = false
let recorder:any = null
let stream:MediaStream|null = null

function initStream():PromiseLike<MediaStream> {
    return new Promise((resolve, reject) => {
        navigator.getUserMedia({audio:true}, _stream => {
            stream = _stream
            resolve(_stream)
        }, reject)
    })
}

//清理stream, 不能直接stop
function clearStream() {
    // stream.stop()  //这个函数已经被弃用了额    
    if(stream) {
        stream.getTracks().forEach(track => track.stop())
        stream = null        
    }
}

//在页面加载后就获取audio权限，然后停止stream，不然标签栏一直会有icon闪耀。
function tryGetPermission() {
    initStream().then(_stream=> {
        setTimeout(refresh,0)
        console.log('got permission')
        hasAudioPermission = true
        clearStream()
    }, err => hasAudioPermission=false )
}
tryGetPermission()

export function startRecord() {
    if(!hasAudioPermission) return
    initStream().then(_stream => {
        let audioSourceNode = audio_context.createMediaStreamSource(_stream)
        recorder = new Recorder(audioSourceNode) 
        recorder.record()   
    })
}

export function stopRecord():Promise<Blob|null> {
    if(!recorder) return Promise.resolve(null)
    recorder.stop()
    clearStream()    
    return new Promise<Blob>(resolve => {
        recorder.exportWAV(resolve)
    })
}

interface Recorder {
    new(MediaStremSourceNode);
    record():void;
}


declare var Recorder:Recorder;
export = Recorder;

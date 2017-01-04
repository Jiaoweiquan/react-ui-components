
let _f:Function;

export function initRefresher(f:Function) {
    _f = f;
    refresh()
}

export function refresh() {
    if(_f) _f();
}
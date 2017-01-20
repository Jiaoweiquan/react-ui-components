
//decorator 例子，参照这里
//https://gist.github.com/remojansen/16c661a7afd68e22ac6e

export function throttle(msGap:number = 300) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        if(descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        }       

        let lastTime = 0
        var originalMethod = descriptor.value;
        descriptor.value = function(...args) {
            let cur
            if( (cur=Date.now()) - lastTime > msGap) {
                lastTime = cur
                originalMethod.apply(this, args)
            }
        }

        return descriptor
    }
}
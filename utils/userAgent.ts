
const userAgent = navigator.userAgent;

export const isIE11 = (userAgent.indexOf('Trident') >= 0 && userAgent.indexOf('MSIE') < 0);
export const isIE10 = (userAgent.indexOf('MSIE 10') >= 0);
export const isIE9 = (userAgent.indexOf('MSIE 9') >= 0);
export const isIE11orEarlier = isIE11 || isIE10 || isIE9;
export const isIE10orEarlier = isIE10 || isIE9;
export const isIE10orLater = isIE11 || isIE10;
export const isEdge = (userAgent.indexOf('Edge/') >= 0);
export const isEdgeOrIE = isEdge || isIE11 || isIE10 || isIE9;

export const isOpera = (userAgent.indexOf('Opera') >= 0);
export const isFirefox = (userAgent.indexOf('Firefox') >= 0);
export const isWebKit = (userAgent.indexOf('AppleWebKit') >= 0);
export const isChrome = (userAgent.indexOf('Chrome') >= 0);
export const isSafari = (userAgent.indexOf('Chrome') === -1) && (userAgent.indexOf('Safari') >= 0);
export const isIPad = (userAgent.indexOf('iPad') >= 0);

export const isAndroid = (userAgent.indexOf('Android') >= 0 );
export const isIPhone = (userAgent.indexOf('iPhone ') >= 0);
export const isMobile = isAndroid || isIPhone || isIPad;

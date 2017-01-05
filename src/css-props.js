let vendors = 'webkit|moz|ms|o'.split('|');
let transitionEventsMap = {
  'webkit': 'webkitTransitionEnd',
  'moz': 'transitionend',
  'o': 'otransitionend',
  '': 'transitionend'
};
let transitionEndEvent;
let transitionProperty = 'Transition';
let transitionVendor = '';
let transformProperty = 'Transform';
let perspectiveProperty = 'Perspective';
let backfaceProperty = 'BackfaceVisibility';
let backfaceKey = 'backfaceVisibility';
let perspectiveOrigin = '';
let transformOrigin = '';
let transformStyle = '';
let style = document.createElement('div').style;

if (transitionProperty.toLowerCase() in style) {
  transitionProperty = transitionProperty.toLowerCase();
} else if (!vendors.some(function(vendor) {
  if (vendor + transitionProperty in style) {
    transitionProperty = vendor + transitionProperty;
    transitionVendor = vendor.toLowerCase();
    return true;
  }

  return false;
})) {
  transitionProperty = null;
} else if (transitionVendor in transitionEventsMap) {
  transitionEndEvent = transitionEventsMap[transitionVendor];
}

if (!transitionVendor && !window.TransitionEvent && window.WebKitTransitionEvent) {
  transitionVendor = 'webkit';
  transitionProperty = transitionVendor + 'Transition';
  transitionEndEvent = transitionEventsMap[transitionVendor];
}

if (!transitionEndEvent) {
  transitionEndEvent = transitionEventsMap[''];
}

if (transformProperty.toLowerCase() in style) {
  transformProperty = transformProperty.toLowerCase();
  transformOrigin = transformProperty + 'Origin';
  transformStyle = transformProperty + 'Style';
} else if (!vendors.some(function(vendor) {
  if (vendor + transformProperty in style) {
    transformProperty = vendor + transformProperty;
    transformOrigin = transformProperty + 'Origin';
    transformStyle = transformProperty + 'Style';
    return true;
  }

  return false;
})) {
  transformProperty = null;
}

if (perspectiveProperty.toLowerCase() in style) {
  perspectiveProperty = perspectiveProperty.toLowerCase();
  perspectiveOrigin = perspectiveProperty + 'Origin';
} else if (!vendors.some(function(vendor) {
  if (vendor + perspectiveProperty in style) {
    perspectiveProperty = vendor + perspectiveProperty;
    perspectiveOrigin = perspectiveProperty + 'Origin';
    return true;
  }

  return false;
})) {
  perspectiveProperty = null;
}

if (backfaceKey in style) {
  backfaceProperty = backfaceKey;
} else if (!vendors.some(function(vendor) {
  if (vendor + backfaceProperty in style) {
    backfaceProperty = vendor + backfaceProperty;
    return true;
  }

  return false;
})) {
  backfaceProperty = null;
}

let pointerEvents = document.documentMode < 11 ? false : 'pointerEvents' in style;
// Utils.hasCSSWillChange = 'willChange' in computedOfDiv;
// Utils.hasCSSTouchAction = 'touchAction' in computedOfDiv ||
  // 'msTouchAction' in computedOfDiv;

style = null;
export default {
  transitionEndEvent,

  transform: transformProperty,
  transformOrigin,
  transformStyle,

  transition: transitionProperty,
  perspective: perspectiveProperty,
  backface: backfaceProperty,

  /* Backwards compatibility */
  transformProperty,
  transitionProperty,
  perspectiveProperty,
  backfaceProperty,

  pointerEvents,
};
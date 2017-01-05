'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var vendors = 'webkit|moz|ms|o'.split('|');
var transitionEventsMap = {
  'webkit': 'webkitTransitionEnd',
  'moz': 'transitionend',
  'o': 'otransitionend',
  '': 'transitionend'
};
var transitionEndEvent = void 0;
var transitionProperty = 'Transition';
var transitionVendor = '';
var transformProperty = 'Transform';
var perspectiveProperty = 'Perspective';
var backfaceProperty = 'BackfaceVisibility';
var backfaceKey = 'backfaceVisibility';
var perspectiveOrigin = '';
var transformOrigin = '';
var transformStyle = '';
var style = document.createElement('div').style;

if (transitionProperty.toLowerCase() in style) {
  transitionProperty = transitionProperty.toLowerCase();
} else if (!vendors.some(function (vendor) {
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
} else if (!vendors.some(function (vendor) {
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
} else if (!vendors.some(function (vendor) {
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
} else if (!vendors.some(function (vendor) {
  if (vendor + backfaceProperty in style) {
    backfaceProperty = vendor + backfaceProperty;
    return true;
  }

  return false;
})) {
  backfaceProperty = null;
}

var pointerEvents = document.documentMode < 11 ? false : 'pointerEvents' in style;
// Utils.hasCSSWillChange = 'willChange' in computedOfDiv;
// Utils.hasCSSTouchAction = 'touchAction' in computedOfDiv ||
// 'msTouchAction' in computedOfDiv;

style = null;
exports.default = {
  transitionEndEvent: transitionEndEvent,

  transform: transformProperty,
  transformOrigin: transformOrigin,
  transformStyle: transformStyle,

  transition: transitionProperty,
  perspective: perspectiveProperty,
  backface: backfaceProperty,

  /* Backwards compatibility */
  transformProperty: transformProperty,
  transitionProperty: transitionProperty,
  perspectiveProperty: perspectiveProperty,
  backfaceProperty: backfaceProperty,

  pointerEvents: pointerEvents
};
module.exports = exports['default'];
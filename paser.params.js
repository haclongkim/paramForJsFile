/*!
 * Copyright (c) 2017 - https://github.com/haclongkim/paramForJsFile
 * MIT licenses
 * Author: haclongkim
 */
function PaserParamCurrentFileJs() {
  // Thanks for watching
}
PaserParamCurrentFileJs.prototype.getAllAttributes = function() {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    var all_attributes = myScript.attributes;
    var result = new Object();
    var len = all_attributes.length;
    // convert attr to key -> value
    var result = {};
    for (var i = 0; i < len; i++) {
        value = all_attributes[i];
        result[value.nodeName] = value.nodeValue;
    };
    return result;
}
PaserParamCurrentFileJs.prototype.parseQuery = function parseQuery(query) {
    var Params = new Object();
    if (!query) return Params; // return empty object
    var Pairs = query.split(/[&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) continue;
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}
// can use correctly in load js file
// Extract "GET" parameters from a JS include querystring
PaserParamCurrentFileJs.prototype.getAllParams = function getAllParams() {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    // myScript.src is "domain/filename.js?param1=111&param2=222"
    var queryString = myScript.src.replace(/^[^\?]+\??/, '');
    // var queryString = myScript.src.split("?").pop();
    // queryString is "param1=111&param2=222"
    var params = this.parseQuery(queryString);
    return params;
}
// can use correctly in load js file
// get attribute add in thisjs file

// Extract "GET" parameters from a JS include querystring
PaserParamCurrentFileJs.prototype.getValueParam = function getValueParam(keyName) {
  // Find all script tags
  var scripts = document.getElementsByTagName("script");
  var index = scripts.length - 1;
  var myScript = scripts[index];

  // Look through them trying to find ourselves
  // Get an array of key=value strings of params
  // var pa = myScript.src.split("?").pop().split("&");
  var pa = myScript.src.replace(/^[^\?]+\??/, '').split("&");
  // Split each key=value into array, the construct js object
  var p = {};
  for(var j=0; j<pa.length; j++) {
    var kv = pa[j].split("=");
    if (keyName && kv[0] == keyName) {
      return kv[1];
    }
    p[kv[0]] = kv[1];
  }
  if (keyName) {
    // No scripts match
    return '';
  }
  return p;

}


PaserParamCurrentFileJs.prototype.getValueAttribute = function getValueAttribute(keyName) {
  // Find all script tags
  var scripts = document.getElementsByTagName("script");
  var index = scripts.length - 1;
  var myScript = scripts[index];
  var all_attributes = myScript.attributes;
  var len = all_attributes.length;
  // convert attr to key -> value
  var result = {};
    for (var i = 0; i < len; i++) {
        attr = all_attributes[i];
        if (keyName && attr.nodeName == keyName) {
          return attr.nodeValue;
        }
        result[attr.nodeName] = attr.nodeValue;
    };

    if (keyName) {
      // No scripts match
      return '';
    }
    return result;

}


var PaserCurrentFileJs = new PaserParamCurrentFileJs();
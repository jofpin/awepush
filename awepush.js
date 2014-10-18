/**
 *
 * <3 awepush.js
 *
 * Awesome push
 * Version: 1.0
 *
 * Find the project on GitHub: 
 * https://github.com/jofpin/awepush
 *
 * ============================
 * Copyright, 2014 by Jose Pino
 * https://twitter.com/jofpin
 * ============================
 */
$(function() {
  /**
   * @param {string} seconds
   * @return {undefined}
   */
  var init = function(seconds) {
    /** @type {string} */
    secs = seconds + "s";
    /** @type {string} */
    tag_awepush_css = "style";
    /** @type {string} */
    animation_value_css = "awepush_intro .6s ease both";
    /** @type {string} */
    kf_awepush = "<" + tag_awepush_css + ">" + "@-webkit-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-moz-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-ms-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-o-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } }" + 
    "</" + tag_awepush_css + ">";
    $(kf_awepush).appendTo(awepush);
    $(awepush).css({
      "-webkit-animation" : animation_value_css,
      "-moz-animation" : animation_value_css,
      "-ms-animation" : animation_value_css,
      "-o-animation" : animation_value_css,
      "animation" : animation_value_css,
      "-webkit-animation-delay" : secs,
      "-moz-animation-delay" : secs,
      "-ms-animation-delay" : secs,
      "-o-animation-delay" : secs,
      "animation-delay" : secs
    });
  };
  
  // running > seconds of transition load
  init("0.8");
  
});

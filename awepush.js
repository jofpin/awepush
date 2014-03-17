/**
 *
 * <3 Awepush.js
 *
 * Awesome push
 * Version: 1.0
 *
 * Find the project on GitHub: 
 * https://github.com/mrjopino/awepush
 *
 * ============================
 * Copyright, 2014 by Jose Pino
 * https://twitter.com/mrjopino
 * ============================
 */
$(document).ready(function () {
  version = '1.0';
  awepush = 'body';
  s_ap = '0.8s';
  u_ap = '*';
  images_ap = $('img');
  tag_awepush_css = 'style';
  animation_value_css = 'awepush_intro .6s ease both'
  kf_awepush = '<' + tag_awepush_css + '>' + '@-webkit-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-moz-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-ms-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-o-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } }' + '</' + tag_awepush_css + '>'
  
$(kf_awepush).appendTo(awepush);
$(images_ap).css("max-width","100%")
$(u_ap).css("border","0")
/* Intro body animation sexy */
$(awepush).css({
  "-webkit-animation": animation_value_css,
  "-moz-animation": animation_value_css,
  "-ms-animation": animation_value_css,
  "-o-animation": animation_value_css,
  "animation": animation_value_css,
  "-webkit-animation-delay": s_ap,
  "-moz-animation-delay": s_ap,
  "-ms-animation-delay": s_ap,
  "-o-animation-delay": s_ap,
  "animation-delay": s_ap
  }) 

});
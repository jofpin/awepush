/**
 *
 * <3 awepush.js
 *
 * Awesome push
 * Version: 1.0.1
 *
 * Find the project on GitHub: 
 * https://github.com/jofpin/awepush
 *
 * ============================
 * Copyright, 2014 by Jose Pino
 * https://twitter.com/jofpin
 * ============================
 */
var Awepush = (function(element, seconds) {
  var pull = {
    self: this,
    stripe: "-",
    tag: "style",
    prefix: {
      wk: "-webkit-",
      moz: "-moz-",
      ms: "-ms-",
      o: "-o-"
    },
    anim: "animation",
    valueDelay: "0." + seconds + "s",
    valueNormal: "intro .4s ease both",
    run: function() {
      // reflect seting()
       pull.self.seting();
    }
  };
  
  // seting (keyframes of intro)
  pull.self.seting = function() {
    var keyframes  = '<' + pull.tag + '>' + 
  '@-webkit-keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-moz-keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-ms-keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-o-keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } }' + 
  '</' + pull.tag + '>'; 

    /* Intro CSS animation */    
    $(element).css(pull.prefix.wk + pull.anim, pull.valueNormal);
    $(element).css(pull.prefix.moz + pull.anim, pull.valueNormal);
    $(element).css(pull.prefix.ms + pull.anim, pull.valueNormal);
    $(element).css(pull.prefix.o + pull.anim, pull.valueNormal);
    $(element).css(pull.prefix.wk + pull.anim + pull.stripe + "delay", pull.valueDelay);
    $(element).css(pull.prefix.moz + pull.anim + pull.stripe + "delay", pull.valueNormal);
    $(element).css(pull.prefix.ms + pull.anim + pull.stripe + "delay", pull.valueDelay);
    $(element).css(pull.prefix.o + pull.anim + pull.stripe + "delay", pull.valueDelay);
    $(element).css(pull.anim + pull.stripe + "delay", pull.valueDelay); 
    $(element).css(pull.anim, pull.valueNormal);
 
    // reflect animation
    $(keyframes).appendTo(element);
  };
  
  // running 
  pull.run();  
  
});

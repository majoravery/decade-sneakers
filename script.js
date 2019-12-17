// The MIT License (MIT)

// Copyright (c) 2013 Dustan Kasten

// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

"use strict";function polyfill(){var f=window,n=document;if(!("scrollBehavior"in n.documentElement.style&&!0!==f.__forceSmoothScrollPolyfill__)){var o,t=f.HTMLElement||f.Element,s=468,p={scroll:f.scroll||f.scrollTo,scrollBy:f.scrollBy,elementScroll:t.prototype.scroll||d,scrollIntoView:t.prototype.scrollIntoView},a=f.performance&&f.performance.now?f.performance.now.bind(f.performance):Date.now,l=(o=f.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);f.scroll=f.scrollTo=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?c.call(f,n.body,void 0!==arguments[0].left?~~arguments[0].left:f.scrollX||f.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:f.scrollY||f.pageYOffset):p.scroll.call(f,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:f.scrollX||f.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:f.scrollY||f.pageYOffset))},f.scrollBy=function(){void 0!==arguments[0]&&(e(arguments[0])?p.scrollBy.call(f,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):c.call(f,n.body,~~arguments[0].left+(f.scrollX||f.pageXOffset),~~arguments[0].top+(f.scrollY||f.pageYOffset)))},t.prototype.scroll=t.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==e(arguments[0])){var o=arguments[0].left,t=arguments[0].top;c.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");p.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},t.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):p.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},t.prototype.scrollIntoView=function(){if(!0!==e(arguments[0])){var o=function(o){for(;o!==n.body&&!1===(void 0,l=r(t=o,"Y")&&i(t,"Y"),e=r(t,"X")&&i(t,"X"),l||e);)o=o.parentNode||o.host;var t,l,e;return o}(this),t=o.getBoundingClientRect(),l=this.getBoundingClientRect();o!==n.body?(c.call(this,o,o.scrollLeft+l.left-t.left,o.scrollTop+l.top-t.top),"fixed"!==f.getComputedStyle(o).position&&f.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):f.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else p.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function d(o,t){this.scrollLeft=o,this.scrollTop=t}function e(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function r(o,t){return"Y"===t?o.clientHeight+l<o.scrollHeight:"X"===t?o.clientWidth+l<o.scrollWidth:void 0}function i(o,t){var l=f.getComputedStyle(o,null)["overflow"+t];return"auto"===l||"scroll"===l}function v(o){var t,l,e,r,i=(a()-o.startTime)/s;r=i=1<i?1:i,t=.5*(1-Math.cos(Math.PI*r)),l=o.startX+(o.x-o.startX)*t,e=o.startY+(o.y-o.startY)*t,o.method.call(o.scrollable,l,e),l===o.x&&e===o.y||f.requestAnimationFrame(v.bind(f,o))}function c(o,t,l){var e,r,i,s,c=a();s=o===n.body?(r=(e=f).scrollX||f.pageXOffset,i=f.scrollY||f.pageYOffset,p.scroll):(r=(e=o).scrollLeft,i=o.scrollTop,d),v({scrollable:e,method:s,startTime:c,startX:r,startY:i,x:t,y:l})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:polyfill}:polyfill();

(function() {
  var isDesktop;

  var shoeInModal;
  var activeYear;
  var activeYearButtonEl = document.querySelector('.nav-item.active');
  var bodyEl = document.querySelector('body');
  var modalNameEl = document.querySelector('.modal-info-name');
  var modalCopyEl = document.querySelector('.modal-info-copy');
  var modalImageEl = document.querySelector('.modal-image');

  var windowWidth = document.body.clientWidth;
  var navButtonWidth = 77;
  var navButtonGutter = 8;
  var centreXOffset = (windowWidth / 2) - (navButtonWidth / 2);

  var yearSectionTriggers = [];

  var setIsDesktop = function() {
    console.log('setIsDesktop');
    isDesktop = document.body.clientWidth >= 1024 ? true : false;
  }

  var setYearSectionScrollPositionTriggers = function() {
    console.log('setYearSectionScrollPositionTriggers');
    yearSectionTriggers = [];
    var yearSections = document.querySelectorAll('.section-wrap[id]');
    yearSections.forEach(function(section) {
      var year = section.getAttribute('id');
      var top = section.getBoundingClientRect().x;
      yearSectionTriggers.push({ [top]: year });
    }) 
  }

  var addNavButtonClickHandlers = function() {
    console.log('addNavButtonClickHandlers');
    var navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(function(btn) {
      btn.addEventListener('click', navButtonClickHandler);
    });

    var runnerUps = document.querySelectorAll('.runner-up[id]');
    runnerUps.forEach(function(ru) {
      ru.addEventListener('click', runnerUpClickHandler);
    });
  }

  var addModalCloseButtonClickHandler = function() {
    console.log('addModalCloseButtonClickHandler');
    var modalCloseButtonEl = document.querySelector('.modal-close-button');
    modalCloseButtonEl.addEventListener('click', function() {
      toggleModal(false);
    });
  }
  
  var navButtonClickHandler = function(e) {
    console.log('navButtonClickHandler');
    e.stopPropagation();
    e.preventDefault();
    var year = e.target.parentNode.dataset.year; // e.target is the <a>
    highlightActiveYearButton(year);

    var sectionOffset = document.getElementById(e.target.innerHTML).getBoundingClientRect().top;

    window.scroll({
      top: parseInt(window.pageYOffset) + parseInt(sectionOffset),
      behavior: 'smooth'
    });

    snapButtonToCenter(activeYear);
  }

  var runnerUpClickHandler = function(e) {
    console.log('runnerUpClickHandler');
    var target = e.target;
    if (e.target.classList.contains('runner-up-info')) {
      target = e.target.parentNode;
    }

    var id = target.id;
    shoeInModal = document.getElementById(id);
    populateModal();
    toggleModal(true);
  }

  var toggleModal = function(openModal) {
    console.log('toggleModal');
    if (openModal) {
      bodyEl.classList.add('modal-open');
      shoeInModal.classList.add('active');
    } else {
      bodyEl.classList.remove('modal-open');
      shoeInModal.classList.remove('active');
      clearModal();
    }
  }

  var populateModal = function() {
    console.log('populateModal');
    var name = shoeInModal.querySelector('.runner-up-name span').innerHTML;
    var copy = shoeInModal.querySelector('.runner-up-copy').innerHTML;
    var imgSrc = shoeInModal.querySelector('.runner-up-image img').src;

    modalNameEl.innerHTML = name;
    modalCopyEl.innerHTML = copy;
    modalImageEl.src = imgSrc;
  }
  
  var clearModal = function() {
    console.log('clearModal');
    modalNameEl.innerHTML = '';
    modalCopyEl.innerHTML = '';
    modalImageEl.src = '';
  }

  var animateModal = function() {
    console.log('animateModal');

  }

  var getActiveYearBasedOnScrollPosition = function() {
    console.log('getActiveYearBasedOnScrollPosition');
    console.log(yearSectionTriggers)
    if (!yearSectionTriggers) {
      return;
    }
    var y = window.scrollY;
    var triggers = Object.keys(yearSectionTriggers);
    for (var i = 0; i < triggers.length; i++) {
      if (y >= triggers[i] && y < triggers[i + 1]) {
        return yearSectionTriggers[triggers[i]];
      }
    }
  }

  var highlightActiveYearButton = function(year) {
    console.log('highlightActiveYearButton');
    if (!year) {
      return;
    }
    activeYear = year;
    console.log({activeYear});
    activeYearButtonEl.classList.remove('active');
    activeYearButtonEl = document.querySelector('.nav-item[data-year="' + activeYear + '"]');
    activeYearButtonEl.classList.add('active');

  }

  var snapButtonToCenter = function(year = 2010) {
    console.log('snapButtonToCenter');
    if (isDesktop) {
      return;
    }

    var index = document.querySelector('.nav-item[data-year="' + year + '"]').dataset.index;
    
    document.querySelector('.nav-bar').scroll({
      left: index * (navButtonWidth + navButtonGutter),
      behavior: 'smooth',
    });
  }

  window.onload = function() {
    setIsDesktop();

    addNavButtonClickHandlers();
    addModalCloseButtonClickHandler();
    snapButtonToCenter();

    setYearSectionScrollPositionTriggers();
    activeYear = getActiveYearBasedOnScrollPosition();
  }

  window.onresize = function() {
    setIsDesktop();
    setYearSectionScrollPositionTriggers();
    activeYear = getActiveYearBasedOnScrollPosition();
  }

  window.onscroll = function() {
    // TODO: throttle
    var currentYear = getActiveYearBasedOnScrollPosition();
    if (currentYear !== activeYear) {
      highlightActiveYearButton(currentYear);
      snapButtonToCenter(currentYear);
      activeYear = currentYear;
    }
  }
})();

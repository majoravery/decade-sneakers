(function() {
  var bodyEl = document.querySelector('body');

  var addNavBtnClickHandlers = function() {
    var navBtns = document.querySelectorAll('.nav-button');
    navBtns.forEach(function(btn) {
      btn.addEventListener('click', navBtnClickHandler);
    });

    var runnerUps = document.querySelectorAll('.runner-up[id]');
    runnerUps.forEach(function(ru) {
      ru.addEventListener('click', runnerUpClickHandler);
    });
  }
  
  var navBtnClickHandler = function(e) {
    e.preventDefault();
    var year = e.target.innerHTML;
    var sectionOffset = document.getElementById(year).getBoundingClientRect().top;

    window.scrollTo({
      top: parseInt(window.pageYOffset) + parseInt(sectionOffset),
      behavior: 'smooth'
    });
  }

  var runnerUpClickHandler = function(e) {
    console.log(e.target);
    var target = e.target;
    if (e.target.classList.contains('runner-up-info')) {
      target = e.target.parentNode;
    }

    var id = target.id;
    populateModal(id);
    toggleModal(true);
    
    var modalCloseButtonEl = document.querySelector('.modal-close-button');
    modalCloseButtonEl.addEventListener('click', function() {
      toggleModal(false);
    });
  }

  var toggleModal = function(openModal) {
    if (openModal) {
      bodyEl.classList.add('modal-open');
    } else {
      bodyEl.classList.remove('modal-open');
    }
  }

  var populateModal = function(id) {
    if (!id) {
      return;
    }

    var name = document.querySelector('#' + id + ' .runner-up-name span').innerHTML;
    var copy = document.querySelector('#' + id + ' .runner-up-copy').innerHTML;
    var imgSrc = document.querySelector('#' + id + ' .runner-up-image img').src;

    var modalNameEl = document.querySelector('.modal-info-name');
    var modalCopyEl = document.querySelector('.modal-info-copy');
    var modalImageEl = document.querySelector('.modal-image');

    modalNameEl.innerHTML = name;
    modalCopyEl.innerHTML = copy;
    modalImageEl.src = imgSrc;
    console.log({name, copy, imgSrc});
  }

  window.onload = function() {
    addNavBtnClickHandlers();
  }
})();

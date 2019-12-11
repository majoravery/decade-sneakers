(function() {
  var shoeInModal;
  var activeYearButtonEl = document.querySelector('.nav-button.active');
  var bodyEl = document.querySelector('body');
  var modalNameEl = document.querySelector('.modal-info-name');
  var modalCopyEl = document.querySelector('.modal-info-copy');
  var modalImageEl = document.querySelector('.modal-image');

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

  var addModalCloseButtonClickHandler = function() {
    var modalCloseButtonEl = document.querySelector('.modal-close-button');
    modalCloseButtonEl.addEventListener('click', function() {
      toggleModal(false);
    });
  }
  

  var navBtnClickHandler = function(e) {
    e.stopPropagation();
    e.preventDefault();
    activeYearButtonEl.classList.remove('active');
    activeYearButtonEl = e.target;
    activeYearButtonEl.classList.add('active');
    
    var sectionOffset = document.getElementById(e.target.innerHTML).getBoundingClientRect().top;

    window.scrollTo({
      top: parseInt(window.pageYOffset) + parseInt(sectionOffset),
      behavior: 'smooth'
    });
  }

  var runnerUpClickHandler = function(e) {
    var target = e.target;
    if (e.target.classList.contains('runner-up-info')) {
      target = e.target.parentNode;
    }

    var id = target.id;
    populateModal(id);
    toggleModal(true);
  }


  var toggleModal = function(openModal) {
    if (openModal && shoeInModal) {
      bodyEl.classList.add('modal-open');
      shoeInModal.classList.add('active');
    } else {
      bodyEl.classList.remove('modal-open');
      shoeInModal.classList.remove('active');
      clearModal();
    }
  }

  var populateModal = function(id) {
    if (!id) {
      return;
    }

    shoeInModal = document.getElementById(id);

    var name = shoeInModal.querySelector('.runner-up-name span').innerHTML;
    var copy = shoeInModal.querySelector('.runner-up-copy').innerHTML;
    var imgSrc = shoeInModal.querySelector('.runner-up-image img').src;

    modalNameEl.innerHTML = name;
    modalCopyEl.innerHTML = copy;
    modalImageEl.src = imgSrc;
  }
  
  var clearModal = function() {
    modalNameEl.innerHTML = '';
    modalCopyEl.innerHTML = '';
    modalImageEl.src = '';
  }

  var animateModal = function() {

  }

  window.onload = function() {
    addNavBtnClickHandlers();
    addModalCloseButtonClickHandler();
  }
})();

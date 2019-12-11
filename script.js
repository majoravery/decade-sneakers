(function() {
  var isDesktop;

  var shoeInModal;
  var activeYearButtonEl = document.querySelector('.nav-button.active');
  var bodyEl = document.querySelector('body');
  var modalNameEl = document.querySelector('.modal-info-name');
  var modalCopyEl = document.querySelector('.modal-info-copy');
  var modalImageEl = document.querySelector('.modal-image');

  var windowWidth = document.body.clientWidth;
  var navButtonWidth = document.querySelector('.nav-button').getBoundingClientRect().width;
  var navButtonGutter = 8;
  var centreXOffset = (windowWidth / 2) - (navButtonWidth / 2);

  var setIsDesktop = function() {
    isDesktop = document.body.clientWidth > 1023 ? true : false;
  }

  var addNavButtonClickHandlers = function() {
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
    var modalCloseButtonEl = document.querySelector('.modal-close-button');
    modalCloseButtonEl.addEventListener('click', function() {
      toggleModal(false);
    });
  }
  

  var navButtonClickHandler = function(e) {
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

    snapActiveNavButtonToCenter();
  }

  var runnerUpClickHandler = function(e) {
    console.log('runnerUp');
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

  var snapActiveNavButtonToCenter = function() {
    if (isDesktop) {
      return;
    }

    var button = document.querySelector('.nav-button.active');
    var index = button.dataset.index;

    var ulTranslateX = centreXOffset - (index * (navButtonWidth + navButtonGutter));
    var ul = document.querySelector('.nav-bar > ul');
    ul.style.transform = 'translateX(' + ulTranslateX + 'px)';
  }

  window.onload = function() {
    setIsDesktop();
    addNavButtonClickHandlers();
    addModalCloseButtonClickHandler();
    snapActiveNavButtonToCenter();
  }
})();

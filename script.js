(function() {
  var addNavBtnClickHandlers = function() {
    var navBtns = document.querySelectorAll('.nav-button');
    navBtns.forEach(function(btn) {
      btn.addEventListener('click', navBtnClickHandler);
    });
  }
  
  var navBtnClickHandler = function(e) {
    console.log({ e, id: e.target.id });
    e.preventDefault();
    var year = e.target.innerHTML;
    var sectionOffset = document.getElementById(year).getBoundingClientRect().top;

    window.scrollTo({
      top: parseInt(window.pageYOffset) + parseInt(sectionOffset),
      behavior: 'smooth'
    });

    console.log(document.getElementById(year));
    console.log({year, sectionOffset});
  }

  window.onload = function() {
    addNavBtnClickHandlers();
  }
})();

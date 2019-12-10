window.onload = function() {
  var navBtns = document.querySelectorAll('.nav-button');
  navBtns.forEach(function(btn) {
    btn.addEventListener('click', navBtnClickHandler);
  });

  var navBtnClickHandler = function(e) {
    console.log(e.target.id);
  }
}

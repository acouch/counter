document.addEventListener("DOMContentLoaded", function(event){
  var start = moment([2019, 11, 17]);
  var now = moment(Date.now());
  let days = now.diff(start, 'days'); 
  var counter = document.getElementById("count");
  var text = document.createTextNode(days);
  counter.appendChild(text);



function scaleHeader() {
  console.log('wtf');
  var scalable = document.getElementById("count");
  var margin = 0;
    var scalableContainer = scalable.parentNode;
    scalable.style.transform = 'scale(1)';
    var scalableContainerWidth = scalableContainer.offsetWidth - margin;
    var scalableWidth = scalable.offsetWidth;
		console.log(scalableWidth);
		console.log(scalableContainerWidth);
    scalable.style.transform = 'scale(' + scalableContainer.offsetHeight / scalable.offsetHeight + ')';
    scalableContainer.style.height = scalableContainer.offsetHeight + 'px';
} 
  // Debounce by David Walsch
  // https://davidwalsh.name/javascript-debounce-function

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

var myScaleFunction = debounce(function() {
  scaleHeader();
}, 250);

myScaleFunction();
scaleHeader();

window.addEventListener('resize', myScaleFunction());

});

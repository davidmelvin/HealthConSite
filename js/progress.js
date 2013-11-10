
var pBar = document.getElementById('caloriesProgress');
var updateProgress = function(value) {
  pBar.value = value;
  pBar.getElementsByTagName('span')[0].innerHTML = Math.floor((100 / 70) * value);
}
updateProgress(60);

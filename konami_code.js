const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  var i = 0;
  document.addEventListener('Keydown', function(e) {
    const key = e.key;
    if (key === codes[i]) {
      index++;
      if (i === codes.length-1) {
        alert('You did it!');
        index = 0;
      }
    }else {
      index =0;
    }
  });
}


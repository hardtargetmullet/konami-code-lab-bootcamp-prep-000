const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const b = document.querySelector('body')
  //console.log(b)
  
  //b.addEventListener('keydown', function(e) { {
  //      console.log(e.detail || e.which)
  //    }
  //});
  let index = 0;
  
  b.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.which);
    console.log(parseInt(key))
  })
 
}
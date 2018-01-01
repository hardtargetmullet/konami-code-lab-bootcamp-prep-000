const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const code_str = ["ArrowUp",
                  "ArrowUp", 
                  "ArrowDown", 
                  "ArrowDown", 
                  "ArrowLeft", 
                  "ArrowRight",
                  "ArrowLeft",
                  "ArrowRight",
                  "a",
                  "b"];
                  
function init() {
  // Write your JavaScript code inside the init() function
  
  let index = 0;
  
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === code_str[index]) {
      index++;
      if (index === 2) {
        alert("Hurray!")
      }
    } else {
      index = 0;
    }
  })
    //alert('keydown event\n\n' + 'key: ' + keyName);
}
 
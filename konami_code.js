const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const b = document
  //console.log(b)
  
  b.addEventListener('keydown', function(e) { {
       console.log(e.detail || e.which)
      }
  });
  //let index = 0;
  
  //b.addEventListener('keydown', function onKeyDownHandler(e) {
   // const key = parseInt(e.which || e.detail);
    
    //if (key === code[index]) {
     // index++;
      
     // if (index === code.length) {
     //   alert("Hurray!");
        
     //   index = 0;
    //  }
      
   // } else {
     // index = 0;
   // }
   // console.log(parseInt(key))
 // })
 
}
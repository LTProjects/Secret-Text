var arr = [ 'Blayer', 'Midfont', 'Tfont'
          ];
var i = 0;


function setup() {  
    
}

function draw() {
    if (i < arr.length) {
    document.getElementById("myP").style.fontFamily = arr[i];
        i++;
       console.log(arr[i]);
    }else{i=0;}
}

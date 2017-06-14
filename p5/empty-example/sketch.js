var arr = [ 'Georgia', 'Palatino Linotype', 'Book Antiqua', 'Times New Roman', 'Arial', 'Helvetica', 'Arial Black', 'Impact', 'Lucida Sans Unicode', 'Tahoma', 'Verdana', 'Courier New', 'Lucida console'];
     var i = 0;


function setup() {
    
   
}


function draw() {
    if (i < arr.length) {
    document.getElementById("myP").style.fontFamily = arr[i];
        i++;
       //console.log(arr[i]);
    }else{i=0;}
}

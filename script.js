function changeColors(){
    var hex_number =["0", "1", "2", "3", "4", "5", "6", "7", "8", 
    "9", "A", "B", "C", "D", "E", "F"];

    var hex_code = "";

    for(var i=0; i < 6; i++ ){
        var random_int = Math.floor(Math.random()*hex_number.length);

        hex_code += hex_number[random_int];
    }


    document.getElementById("hex-code").innerHTML = hex_code; 

    document.getElementsByTagName("body")[0].style.background = "#" + hex_code;


    // console.log(Math.random()*hex_number.length);


}
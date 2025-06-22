function dice() {
    let numX = Math.floor(Math.random() * 6) + 1;
    let numY = Math.floor(Math.random() * 6) + 1;
 
    document.getElementById("1").src = numX + ".png";
    document.getElementById("2").src = numY + ".png";
}


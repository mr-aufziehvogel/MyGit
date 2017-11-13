function checkpw() {
    var pw = document.getElementById("tbox").value; 
    var rev = pw.split("").reverse().join("");
    if (rev == "fledermausland") {
        document.getElementById("demo").textContent = "Korrekt!";
    } else {
        document.getElementById("demo").textContent = "Falsch!";
    }
}
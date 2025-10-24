setInterval (piszCzas, 1000)
function piszCzas(){
    let d = new Date();
    let hh = d.getHours(), mm = d.getMinutes(), ss=d.getSeconds();
    czas = "" + hh + ":" + mm + ":" + ss;
    document.getElementById("czas").innerHTML = czas;
}
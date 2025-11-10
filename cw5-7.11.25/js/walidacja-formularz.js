document.getElementById("formularz").addEventListener("submit", function(event) {
    let dataur = new Date(document.getElementById("data_urodzenia").value);
    let datadz = new Date(document.getElementById("data_roz_dzialalnosci").value);

    if (dataur <= datadz){
        let info=document.getElementById("info")
        info.innerHTML="<p>Data urodzenia musi być wcześniejsza niż data zakończenia</p>";
        event.preventDefault();
    }
    else document.getElementById("info").innerHTML="";
});
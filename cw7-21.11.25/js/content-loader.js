document.addEventListener("DOMContentLoaded",function(){
    ladujPodstrona('./main.html');
});
function ladujPodstrona(strona){
    const element = document.getElementById("zawartosc-main");
    fetch(strona)
        .then(response => {
            if(!response.ok) {
                throw new Error("Błąd sieci");
            }
            return response.text();
        })
        .then(data => {
            element.innerHTML=data;
        })
        .catch(error => {
            element.innerHTML = '<p>Błąd ładowania treści</p>';
        })
}
function rechercherDestination(event){

    event.preventDefault();


    let destination = document
    .getElementById("destinationSearch")
    .value
    .trim();


    if(destination === ""){

        return;

    }


    window.location.href =
    "resultats.html?destination="
    + encodeURIComponent(destination);


}

let test = JSON.parse(localStorage.getItem("lieu")) || [];
let bandeau = document.querySelector('#bandeau_favs');
//Création boucle pour affichage
for (let i = 0; i <= test.length ; i++){
bandeau.style.display = "flex";
bandeau.innerHTML += `
<div class="image"><img class="logo"src="assets/image/Crous-logo-lille-nord-pas-de-calais.webp" alt="Logo Crous"></div>
<div class="description">
    <h2>${test[i].fields.title}</h2>
    <p>Adresse :${test[i].fields.contact}</p>
    <p>Description : ${test[i].fields.infos}</p>
</div>
<div class="action">
    <button id="del">X</button>
</div>
`;

document.getElementById("del").addEventListener("click", function () {
    bandeau.style.display = 'none';
    // Suppression du Local Storage
    localStorage.clear();
})

}
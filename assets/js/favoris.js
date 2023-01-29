
let test = JSON.parse(localStorage.getItem("lieu")) || [];
console.log(test)
let bandeau = document.querySelector('#bandeau');
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
    localStorage.clear();
})

}







/*let fav = document.querySelector('#bandeau')

function data(data){
    bandeau.style.display = "flex";
    bandeau.innerHTML =`
    <div class="image"></div>
    <div class="description">
        <h2>${localStorage.getItem("lieu.title")}</h2>
        <p>Adresse :${localStorage.getItem("lieu.contact")}</p>
        <p>Description : ${localStorage.getItem("lieu.infos")}</p>
    </div>
    <div class="action">
        <button id="del">X</button>
    </div>
    `;
    document.getElementById("del").addEventListener("click", function () {
        bandeau.style.display = 'none';
        localStorage.clear();

})}


    data();

    //3 fonctions, save(), get(), add()
    //save = enregistrer
    //get = || [] json.parse(locastorage)
    //add = rajout dans le tableau(local storage)


    //*/
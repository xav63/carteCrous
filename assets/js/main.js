let bandeau = document.querySelector('.bandeau');
let favoris = document.querySelector('.favs');
let save = document.getElementById('save')

//Carte Leaflet
let map = L.map('map').setView([50.629719, 3.062781], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([50.629719, 3.062781]).addTo(map);


// requête HTTP en Ajax avec Fetch
// utilisation Fetch :
const url = 'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=ensemble-des-lieux-de-restauration-des-crous&q=&rows=20&facet=type&facet=zone';
fetch(url)
    .then((res) => res.json())
    .then((res) => {
        // Traitement Js
        const lieux = res.records;
        //console.log(lieux[0]);
        // on fait une boucle pour lire les infos du tableau (lieu)
        for(let lieu of lieux) {
            const marker = L.marker(lieu.fields.geolocalisation).addTo(map).bindPopup(lieu.fields.title, {permanent: true, direction: 'top'});
            marker.on("click", () => data(lieu.fields));
            
        }
    })

    .catch((error) => console.log("Erreur de type : " + error));

    


function data(data){
    bandeau.style.display = "flex";
    bandeau.innerHTML =`
    <div class="image"></div>
    <div class="description">
        <h2>${data.title}</h2>
        <p>Adresse :${data.contact}</p>
        <p>Description : ${data.infos}</p>
    </div>
    <div class="action">
        <button id="save">Enregistrer</button>
        <button id="del">X</button>
    </div>
    `;
    document.getElementById("del").addEventListener("click", function () {
        bandeau.style.display = 'none';

    })
    document.getElementById("save").addEventListener("click", function (){
        localStorage.setItem("fav", JSON.stringify(data.title, data.contact, data.infos));
        
    })


}



    //format JSON:
    let monObjetJSON = '{"prop1":"valeur1","prop2":"valeur2"}';
    
    //Format Objet:
    let monObjet = {
        prop1:'valeur1',
        prop2:'valeur2',
    }

    //Transformer un objet en chaîne:
    let objetString = JSON.stringify(monObjet)

    //Transformer une chaîne en objet:
    let objet = JSON.parse(monObjetJSON)
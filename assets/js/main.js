let bandeau = document.querySelector('#bandeau');
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
        // on fait une boucle pour lire les infos du tableau (lieu)
        for(let lieu of lieux) {
            const marker = L.marker(lieu.fields.geolocalisation).addTo(map).bindPopup(lieu.fields.title, {permanent: true, direction: 'top'});
            marker.on("click", () => {
                data(lieu.fields)
                function data(data){
                    bandeau.style.display = "flex";
                    bandeau.innerHTML =`
                    <div class="image"><img class="logo"src="assets/image/Crous-logo-lille-nord-pas-de-calais.webp" alt="Logo Crous"></div>
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
                    //Action sur le bouton x afin de fermer le bandeau
                    document.getElementById("del").addEventListener("click", function () {
                        bandeau.style.display = 'none';
                        
                
                    })
                    //Action sur le bouton Enregister afin d'envoyer les informations sur le LocalStorage
                    
                    document.getElementById("save").addEventListener("click", function () {
                        let test = JSON.parse(localStorage.getItem("lieu")) || [];
                                    let newLieu = lieu;
                                    test.push(newLieu);
                                    localStorage.setItem("lieu", JSON.stringify(test));
                    
                    alert('Le lieu a été rajouté à vos favoris');
                    })
            
        }});
        }
    })

    .catch((error) => console.log("Erreur de type : " + error));
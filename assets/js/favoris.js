let fav = document.querySelector('#bandeau')
function data(data){
    bandeau.style.display = "flex";
    bandeau.innerHTML =`
    <div class="image"></div>
    <div class="description">
        <h2>${localStorage.getItem('favTitle')}</h2>
        <p>Adresse :${localStorage.getItem('favContact')}</p>
        <p>Description : ${localStorage.getItem('favInfos')}</p>
    </div>
    <div class="action">
        <button id="del">X</button>
    </div>
    `;}
    data();
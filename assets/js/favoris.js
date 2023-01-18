class Favoris {
    constructor() {
        this.test = document.querySelector('.test');
        this.lieu = document.querySelector('.lieu');

        this.test.addEventListener('click', () => {
            this.fav();
        })
        
    }
    fav() {
        if(this.test === true){
            console.log(test)
        
        /*this.lieu.innerHTML += `
        <div class="lieu">
        <div class="image">
        </div>
        <div class="description">
        <h2>Titre du lieu</h1>
        <h2>Adresse : 59000 Lille</h2>
        <p>Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="action">
        <button class="save">Enregistrer</button>
        <div class="del"><i class="fa-solid fa-xmark"></i></div>
        </div>
        `*/
    }}
}

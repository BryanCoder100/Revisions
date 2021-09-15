
// ● Première section :

const p = document.querySelector('#p');
const nom = "Pergaud";
const prenom ="Bryan";
const btn = document.getElementById('RoundButton');

p.innerHTML = "Votre nom est " + nom + " Votre prenom est " + prenom;

// /* CREATION DE CARRE */
// Deuxième section :


const square = document.getElementById("square");

square.addEventListener("click", function () {
square.style.cssText = "border-radius: 100px; background-color:rgb(222, 49, 99)";
});

/*Button films et dice */
// ● Troisième section

btn.addEventListener("click", function() {
    var movies = 5;
    var randomMovies = Math.random();
    var number = Math.round((movies - 1) * randomMovies) + 1;
        allMovies = new Array;
        allMovies[1] = "Superman";
        allMovies[2] = "Wonder Woman";
        allMovies[3] = "The Batman";
        allMovies[4] = "The Flash";
        allMovies[5] = "Aquaman";
document.getElementById("nameMovies").innerHTML = allMovies[number];
           
});


// ● Quatrième section :

var conversion = document.getElementById("paragraph");
var change = document.getElementById("buttonFive");
change.addEventListener("click", function(){
    var Input = document.getElementById("Input").value;
    var convers = [];
    const AlphabetMin = "abcdefghijklmnopqrstuvwxyz";
    const AlphabetMax = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pos = -1;
    for(let i = 0; i < Input.length; i++) {
        if (AlphabetMin.indexOf(Input[i]) >= 0){
            pos = AlphabetMin.indexOf(Input[i]);
            convers.push(AlphabetMax[pos]);
        } else if (AlphabetMax.indexOf(Input[i]) >= 0 ){
            pos = AlphabetMax.indexOf(Input[i]);
            convers.push(AlphabetMin[pos]);
        }
    }
    convers = convers.toString().replace(/, /g, "");
    conversion.innerHTML = `<p>${convers}</p>`;

});

// ● cinquième section :
let generer = document.getElementById('generer');
let resultat = document.getElementById('resultat');
let passwordRandom = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;

generer.addEventListener('click', function(){
    let password = "";
    for (let i = 0; i <= passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * passwordRandom.length);
        password += passwordRandom.substring(randomNumber, randomNumber + 1);
    }
    resultat.innerHTML= `<p>${password}</p>`;
});
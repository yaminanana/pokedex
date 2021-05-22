let allPokemon = [];
let tableauFin = [];

const formAction = document.querySelector('.trouverpoke input');
const myButton = document.querySelector('submit');
const List = document.getElementById('pokelist');

//faire une fonction fetch pour récupérer l'api


//animation input
/*formAction.addEventListener('input',function(e){

});*/
function pokemonBase() {
  
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then(reponse => reponse.json())
  .then((allPoke)=>{
    console.log (allPoke);
  })
}

pokemonBase();

  
    

    


/*const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

//créer une requête 
let requete = new XMLHttpRequest();//crée notre objet qui nous permettra de faire nos requêtes
requete.open('GET', url);
requete.responseType = 'json';// on demande une réponse en format json
requete.send();

//dès qu'on reçoit une réponse, cette fonction est éxécutée
requete.onload = function(){
    if(requete.readyState === XMLHttpRequest.DONE){//on vérifie l'état de notre requête : est elle = à l'état DONE(accomplie) de notre requete xmlhttprequest
      if(requete.status === 200){
        let reponse = requete.response;//stocke la réponse
        console.log(reponse);
      }
      else{
          alert('un problème est intervenu, merci de revenir plus tard. ');
      }
    }
  }*/
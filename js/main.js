'use strict';



//console.log(paragraf);


function ustawTlo(){
var paragraf = document.getElementsByClassName('par');
    paragraf[0].style.backgroundColor='red';
    paragraf[1].style.backgroundColor='green';
}


function pobierzImie(event){
    event.preventDefault();
    console.log('Funkcja pobierzImie(event) ');
    var inputTab = document.getElementsByTagName('input');
    
    for(var i=0 ; i < inputTab.length ; i++){
        console.log(inputTab[i]);
    }

    var imie = inputTab[0].value ;
    var nazwisko = inputTab[1].value ;
    
    console.log(imie);
    console.log(nazwisko);
    
}
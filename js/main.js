'use strict';

var paragraf = document.getElementsByClassName('par');

//console.log(paragraf);


function ustawTlo(){
    paragraf[0].style.backgroundColor='red';
    paragraf[1].style.backgroundColor='green';
}


function pobierzImie(event){
    event.preventDefault();
    console.log('Funkcja pobierzImie(event) ');
    var Imie = document.getElementById('formularz').fname.value ;
    var Nazwisko = document.getElementById('formularz').lname.value ;
    console.log('Imię : ' + Imie );
    console.log('Nazwisko : ' + Nazwisko );
}
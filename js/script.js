"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Skolko filmov vi smotrely?','');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
   }
      
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};



function rememberMyFilms(){
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
         
      if (a != null && b != null && a != ''  && b != '' && a.length < 50){
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;   
         }
      }
}

//rememberMyFilms();


   
      function detectPersonalLevel() {
         if (personalMovieDB.count < 10) {
            console.log('"Просмотрено довольно мало фильмов"');
            }else if  (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
               console.log("Вы классический зритель");
            }else if(personalMovieDB.count >= 30) {
               console.log("Kinoman!");
            }else {
               console.log("oshibka!");
            }
      }
   //detectPersonalLevel();

   function showMyDb (hidden) {
      if(!hidden) {
         console.log(personalMovieDB);
      }
   }

      showMyDb(personalMovieDB);

      function writeYourGenres() {
         for (let i =1; i<=3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Vash lubimiy janr pod nomerom ${i}`);
      }
   }
      writeYourGenres();

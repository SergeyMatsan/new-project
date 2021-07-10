const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB ={
   count: numberOfFilms,
   movies: {},
   actors: {},
   gender: [],
   privat: false
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('на сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
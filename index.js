'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i=0; i < 2; i++) {
    const movieAnswer = prompt('Один из последних просмотренных фильмов?', ''); 
    const markAnswer = prompt('На сколько оцените его?', '');
    if (movieAnswer == '' || markAnswer == '' || movieAnswer.length > 50) i--;
    else personalMovieDB.movies[movieAnswer] = markAnswer;
}
console.log(personalMovieDB);

if (personalMovieDB.count < 10) alert("Просмотрено довольно мало фильмов");
else if (personalMovieDB.count < 31) alert("Вы классический зритель");
else if (personalMovieDB.count > 30) alert("Вы киноман");
else alert("Произошла ошибка")

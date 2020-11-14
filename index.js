
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



// const movie = {};

for (let i=0; i < 2; i++) {
    const movieAnswer = prompt('Один из последних просмотренных фильмов?', ''); 
    const markAnswer = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[movieAnswer] = markAnswer;
}
console.log(personalMovieDB);
// console.log(movie);
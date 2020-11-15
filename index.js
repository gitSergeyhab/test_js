'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
function askAnswer(pmdb) {
    for (let i=0; i < 2; i++) {
        const movieAnswer = prompt('Один из последних просмотренных фильмов?', ''); 
        const markAnswer = prompt('На сколько оцените его?', '');
        if (movieAnswer == '' || markAnswer == '' || movieAnswer.length > 50 || movieAnswer == null || markAnswer == null) i--;
        else pmdb.movies[movieAnswer] = markAnswer;
    }
    return pmdb;
}

//console.log(personalMovieDB);
function filmsAndYou(pmdb) {
   if (pmdb.count < 10) alert("Просмотрено довольно мало фильмов");
    else if (pmdb.count < 31) alert("Вы классический зритель");
    else if (pmdb.count > 30) alert("Вы киноман");
    else alert("Произошла ошибка"); 
}


// 3

function showMyDB(pWDB) {
    if (pWDB.privat == false) {
        console.log(pWDB);
    }
}
let tolog3 = askAnswer(personalMovieDB);
let tolog4 = filmsAndYou(personalMovieDB);
let toLog1 = showMyDB(personalMovieDB);
//console.log(toLog1);

function writeYourGenres(pWDB) {
    for (let i=1; i<4; i++) {
        const favGanre = prompt(`Ваш любимый жанр под номером ${i}`);
        pWDB.genres[i-1] =favGanre;
    }  
    return pWDB;
}

let toLog2 = writeYourGenres(personalMovieDB);
console.log(toLog2);


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
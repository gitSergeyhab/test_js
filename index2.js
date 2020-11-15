//4

'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    askAnswer: function(){
        for (let i=0; i < 2; i++) {
            const movieAnswer = prompt('Один из последних просмотренных фильмов?', ''); 
            const markAnswer = prompt('На сколько оцените его?', '');
            if (movieAnswer == '' || markAnswer == '' || movieAnswer.length > 50 || movieAnswer == null || markAnswer == null) {
                i--;
            } else {
                    personalMovieDB.movies[movieAnswer] = markAnswer;
                }
        }
    },

    filmsAndYou: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 31) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
                alert("Произошла ошибка"); 
            }

    },

    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },


    /*
    3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

    writeYourGenres: function () {
        for (let i=1; i<4; i++) {
            let favGanre = prompt(`Ваш любимый жанр под номером ${i}`);
            while (favGanre == '' || favGanre == null) {
                favGanre = prompt(`Ваш любимый жанр под номером ${i}`);
            }  
            personalMovieDB.genres[i-1] = favGanre;
        }  
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр №1 ${i+1} - это ${item}`);

        });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
    }
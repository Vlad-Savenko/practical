'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = prompt("how many fils your watches?");
        while (personalMovieDB.count == '' || npersonalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("how many fils your watches?");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх фільмів який ви подивилися?').trim;
            b = prompt('Яку оцінку ви поставите йому?');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done')
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count <= 30) {
            console.log('Вы класический зритель')
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман')
        } else {
            console.log('Error')
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },

    toggleLeVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },

    WriteYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр фильма под номером ${i} `);

            if (genre === null || personalMovieDB.genres === '') {
                console.log('Вы ввели неверные данные')
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

            // let genres = prompt(`Введите ваши любимые жанры через запятую`);
            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели неверные данные')
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            // }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1}  - это ${item}`)
        });
    },


};
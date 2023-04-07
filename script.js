let numberOfFilms;

function start() {
    const numberOfFilms = prompt("how many fils your watches?");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        const numberOfFilms = prompt("how many fils your watches?");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFilms() {
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
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы класический зритель')
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман')
    } else {
        console.log('Error')
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр фильма под номером ${i} `);
    }
}
writeYourGenres();
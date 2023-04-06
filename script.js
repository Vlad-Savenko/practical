const numberOfFilms = +prompt("how many fils your watches?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
let i = 0;
2
while (i < 2) {
    const a = prompt('Один з останніх фільмів який ви подивилися?');
    b = prompt('Яку оцінку ви поставите йому?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error');
        i--;
    }
    i++
}
if (personalMovieDB.count <= 10) {
    console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count <= 30) {
    console.log('Вы класический зритель')
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман')
} else {
    console.log('Error')
}
console.log(personalMovieDB)
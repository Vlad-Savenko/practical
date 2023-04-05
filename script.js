const numberOfFilms = +prompt("how many fils your watches?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const a = prompt('Один з останніх фільмів який ви подивилися?');
b = prompt('Яку оцінку ви поставите йому?');
c = prompt('Один з останніх фільмів який ви подивилися?');
d = prompt('Яку оцінку ви поставите йому?');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
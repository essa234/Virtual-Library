const {Media} = require('./Media');
class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static longestMovie(arr){
        let highest = arr[0];
        for(let x of arr){
            if(x.duration > highest.duration){
                highest = x;
            }
        }
        return highest;
    }
}

module.exports = {
    Movie,
}
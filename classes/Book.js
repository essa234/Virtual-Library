const {Media} = require('./Media');
class Book extends Media{
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static highestRating(arr){
        // let ratingarr = arr.map((book) => {
        //     return book.rating;
        // });     
        // let i = ratingarr.indexOf(Math.max(ratingarr));
        // return arr[i];
        let highest = arr[0];
        for(let x of arr){
            if(x.rating > highest.rating){
                highest = x;
            }
        }
        return highest;
    }
}

module.exports = {
    Book,
}


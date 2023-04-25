const {Media} = require('./Media');
class Music extends Media{
    constructor(title, year, genre, artist, length){
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }

    static shortestAlbum(arr){
        let lowest = arr[0];
        for(let x of arr){
            if(x.length < lowest.length){
                lowest = x;
            }
        }
        return lowest;
    }
}

module.exports = {
    Music,
}
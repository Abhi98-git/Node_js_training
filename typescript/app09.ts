class Song {
    constructor(private artist: string, private title: string) {  }
    play() {
        console.log('Playing: ' + this.title + ', by ' + this.artist);
    }
}



class Jukebox {
    constructor(private songs: Song[]) {
    }
    play() {
        let song = this.getRandomSong();
        song.play();
    }

    private getRandomSong() {
        let songCount = this.songs.length;
        let songIndex = Math.floor(Math.random() * songCount);

        return this.songs[songIndex];
    }
}

let songs = [
    new Song('Arijit Singh', 'Ae Dil Hai Mushkil'),
    new Song('Amit Mishra & Shilpa Rao', 'Bulleya'),
    new Song('Armaan Malik & Neeti Mohan', 'Sau Aasmaan'),
    new Song('Arijit Singh', 'Lo Maan Liya'),
    new Song('Palak Muchhal', 'Kaun Tujhe')
];

let jukebox = new Jukebox(songs);
jukebox.play();




interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details:Details;
}
 
interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
const song = 'New song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details


// console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);

// Esto en JavaScript Sería ---> const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , trunks = 'Not found']: string[] = ['Goku','Vegeta','Trunks'];

console.log('Personaje 3: ', trunks);








export {}
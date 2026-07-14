// import { invoke } from "@tauri-apps/api/core"
const { invoke } = window.__TAURI__.core;

window.addEventListener('dragover', (e) => {
  e.preventDefault();
});

window.addEventListener('drop', (e) => {
  e.preventDefault();
});

// async function test_greet () {
//     const message = await invoke("greet", {name:"StrawberrySkeleton"})

//     console.log(message)
// }

// test_greet()

const songName = document.getElementById('song-name')
const artistName = document.getElementById('artist-name')
const albumName = document.getElementById('album-name')
const sourceName = document.getElementById('source-name')

async function loadSong() {
    const song = await invoke("current_song");

    console.log(song);
    songName.textContent = song.title
    artistName.textContent = song.artist
    albumName.textContent = song.album_name
    sourceName.textContent = song.source
}

loadSong();
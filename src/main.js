// import { invoke } from "@tauri-apps/api/core"
const { invoke } = window.__TAURI__.core;

window.addEventListener('dragover', (e) => {
  e.preventDefault();
});

window.addEventListener('drop', (e) => {
  e.preventDefault();
});

async function test_greet () {
    const message = await invoke("greet", {name:"StrawberrySkeleton"})

    console.log(message)
}

test_greet()
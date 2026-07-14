const { invoke } = window.__TAURI__.core;


import { getCurrentWindow } from '@tauri-apps/api/window';

const appWindow = getCurrentWindow();

document.querySelector('main').addEventListener('mousedown', (e) => {
  // Only drag on left click and ensure they didn't click a button inside it
  if (e.buttons === 1 && e.target.tagName !== 'BUTTON') {
    appWindow.startDragging();
  }
});
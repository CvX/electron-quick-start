// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron');

let index = 1;

setInterval(() => {
  ipcRenderer.send('notification', index++);
}, 5000);

ipcRenderer.send('notification', index++);

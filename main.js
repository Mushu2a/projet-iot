const {app, BrowserWindow} = require('electron')
const path = require('path');
const url = require('url');


let win = null;

app.on('ready', function () {

    // Initialize the window to our specified dimensions
    win = new BrowserWindow({
        // skipTaskbar: true,
        // autoHideMenuBar: true,
        width: 480, height: 320});


        win.loadURL("http://localhost:3000");
        win.webContents.openDevTools();

    // Remove window once app is closed
    win.on('closed', function () {
        win = null;
    });

});

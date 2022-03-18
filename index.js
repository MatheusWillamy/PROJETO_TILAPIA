const { app, BrowserWindow} = require('electron')

let mainWindow


app.on('ready', () =>{

    mainWindow = new BrowserWindow({
        width: 1280,
        heigth:720

    })

    mainWindow.loadURL(`file://${__dirname}/_views/index.html`)




})
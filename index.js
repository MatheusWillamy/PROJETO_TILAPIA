const { app, BrowserWindow} = require('electron')

let mainWindow


app.on('ready', () =>{

    mainWindow = new BrowserWindow({
        width: 1920,
        heigth: 1080,
        minHeight:720,
        minWidth:1280,

    })

    mainWindow.loadURL(`file://${__dirname}/_views/index.html`)



})
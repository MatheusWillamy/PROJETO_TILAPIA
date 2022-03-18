<<<<<<< HEAD
const { app, BrowserWindow} = require('electron')

let mainWindow


app.on('ready', () =>{

    mainWindow = new BrowserWindow({
        width: 1280,
        heigth:720

    })

    mainWindow.loadURL(`file://${__dirname}/_views/index.html`)




=======
const { app, BrowserWindow} = require('electron')

let mainWindow


app.on('ready', () =>{

    mainWindow = new BrowserWindow({
        width: 1280,
        heigth:720

    })

    mainWindow.loadURL(`file://${__dirname}/_views/index.html`)




>>>>>>> 69e1d03098fb3a53cdafaec9f0c6c83312d9a579
})
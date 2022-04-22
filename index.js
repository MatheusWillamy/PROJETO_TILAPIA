const { app, BrowserWindow} = require('electron')

const { spawn } = require('child_process')
const child_Python = spawn('python', ['index.py'])

//const child_Python = spawn('python', ['--version'])

child_Python.stdout.on('data', (data) =>{
    console.log(`stdout: ${data}`);
})

child_Python.stderr.on('data', (data) =>{
    console.error(`stderr: ${data}`)
})

child_Python.on('close', (code) =>{
    console.log(`child process exited with code ${code}`)
})



let mainWindow


app.on('ready', () =>{

    mainWindow = new BrowserWindow({
        width: 1920,
        heigth: 1080,
        minHeight:720,
        minWidth:1280,
        webPreferences:{
            nodeIntegration: true
        }

    })

    mainWindow.loadURL(`file://${__dirname}/src/pages/home/index.html`)



})


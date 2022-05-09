const { app, BrowserWindow} = require('electron')

var dado = '{ph:"aguarde", temperatura:"aguarde", turbidez:"aguarde"}'
function serial_consulta_de_dado(){
    
    const { spawn } = require('child_process')
    const child_Python = spawn('python', ['engine/index.py'])

    //const child_Python = spawn('python', ['--version'])

    child_Python.stdout.on('data', (data) =>{
        dado = data.toString()
        //console.log(`stdout: ${data}`);
        
        return dado;
    })

    child_Python.stderr.on('data', (data) =>{
        console.error(`stderr: ${data}`)
    })

    child_Python.on('close', (code) =>{
        //console.log(`child process exited with code ${code}`)
    })
    return dado
   
}
let mainWindow


app.on('ready', () =>{

    mainWindow = new BrowserWindow({
        width: 1920,
        heigth: 1080,
        minHeight:720,
        minWidth:1280,
        webPreferences:{
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true,
            enableRemoteModule: true,
            contextIsolation:false
        }

    })

    mainWindow.loadURL(`file://${__dirname}/src/pages/home/index.html`)

    

})
app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})




//================================================
//ELECTRON CANAL\
//===================================

const {ipcMain} = require('electron');

ipcMain.on('serial_consulta_de_dado', function(event, mensagem){
    const chamada = mensagem;
    if (chamada == "atualizar"){
        dado = serial_consulta_de_dado()
        event.reply('serial_consulda_de_dado_res', dado)
        console.log(`RETORNO:${dado} `)

    }  
    

})

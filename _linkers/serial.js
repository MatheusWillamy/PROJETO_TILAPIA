function teste_serial(){
    console.log("Testando_serial")
    var {PythonShell} = require('python-shell')
    var path = require('path')

    serial_teste = document.getElementById("serial_teste")

    var opcoes = {
        scriptPath: path.join(__dirname, '../_engine'),
        args: [1]
    }

    var serial = new PythonShell('serial.py', opcoes)

    serial.on("message", function(message){
        swal(message)
    })

}
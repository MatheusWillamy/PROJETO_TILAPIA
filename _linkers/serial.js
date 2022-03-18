const { spawn } = require("child_process")

function serial_analise(){
    const child = spawn("python", ["serial.py"])
    child.on("exit", (code) => console.log("exitCode:", code))

    child.stdout.on("data", function (buffer) {
        const message = String(buffer);
        console.log("stdout:", message);
    });

    child.stdin.write("Olá Python!\n");
}
export {message, seria_analise}
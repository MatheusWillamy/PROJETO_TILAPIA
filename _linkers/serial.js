<<<<<<< HEAD
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
=======
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
>>>>>>> 69e1d03098fb3a53cdafaec9f0c6c83312d9a579
export {message, seria_analise}
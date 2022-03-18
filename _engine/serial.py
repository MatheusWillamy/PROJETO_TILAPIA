from email import message
from sys import stdin, stdout

import serial
import time

import serial.tools.list_ports
ports = serial.tools.list_ports.comports()
portList = []
#verificando portas COM
for onePort in ports:
    portList.append(str(onePort))
    print(str(onePort))

#selecionando dados de porta 
serialcomm=serial.Serial('COM3', 9600)
serialcomm.timeout=1



while True:
    
    #DECODIFICAÇÃO DE SERIAL ARDUINO
    print(serialcomm.readline().decode("ASCII"))
    time.sleep(0.5)

    message = stdin.readline()

    stdout.write('Ola Node! Recebi sua mensagem: ' + message)
    stdout.flush()

    
    


serialcomm.close()
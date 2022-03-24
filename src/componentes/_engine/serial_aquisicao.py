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
serialcomm=serial.Serial('COM6', 115200)
serialcomm.timeout=1


while True:
    
    #DECODIFICAÇÃO DE SERIAL ARDUINO
    print(serialcomm.readline().decode("ASCII"))
    # time.sleep(0.5)

    

serialcomm.close()

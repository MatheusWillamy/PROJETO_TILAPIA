import random
import json







lista_de_dados = {
    "ph": random.randrange(1, 9),
    "temperatura":  random.randrange(20, 40),
    "turbidez":  random.randrange(0, 5000)
}
lista_de_dados = json.dumps(lista_de_dados)
print(lista_de_dados)


random.seed()
# print(random.random())
import random
import json







lista_de_dados = {
    "ph": random.random(),
    "temperatura": random.random(),
    "turbidez": random.random()
}
lista_de_dados = json.dumps(lista_de_dados)
print(lista_de_dados)


random.seed()
# print(random.random())
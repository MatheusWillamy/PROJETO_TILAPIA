import random
import json







lista_de_dados = {
    "ph": random.randrange(0, 8),
    "temperatura":  random.randrange(28, 37),
    "turbidez":  random.randrange(500, 3000, 100)
}
lista_de_dados = json.dumps(lista_de_dados)
print(lista_de_dados)


random.seed()
# print(random.random())
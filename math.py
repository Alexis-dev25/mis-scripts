#jueo de matematicas, numbers y simbolos aleatorios

import random
print("Hecho por Alex_dev")
print(" ")
def jugar():
    print("Escoje una dificuldad: (Fácil 1-10)  (Medio 1-50)  (Díficil 1-100) (Extremo 100-500)")
    print("Las operaciones seran: +, -, *")
    dificultad = input("Dificultad: ").capitalize()
    if dificultad == "Facil":
        numbers = list(range(1, 11))
    elif dificultad == "Medio":
        numbers = list(range(1, 51))
    elif dificultad == "Dificil":
        numbers = list(range(1, 101))
    elif dificultad == "Extremo":
        numbers = list(range(100, 501))
    num1 = random.choice(numbers)
    num2 = random.choice(numbers)
    simbolos = [ "+", "-", "*", ]
    simbolo = random.choice(simbolos)

    op = f"{int(num1)} {simbolo} {int(num2)}"
    respuesta = eval(op)
    print(" ")
    print("Resuelve lo siguiente: ",op)
    user = int(input("Respuesta: "))

    if user == respuesta:
        print("¡Que insano eres mi crack!, Correcto")
    else:
        print("¡Incorrecto mi crack!")
    print(" ") 

jugar_de_nuevo = "si"
while jugar_de_nuevo.lower() == "si":
    jugar()
    print("¿Quieres jugar otra vez? (si/no)")
    jugar_de_nuevo = input().lower()

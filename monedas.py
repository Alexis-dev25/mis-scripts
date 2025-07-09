#juego de la moneda
import random

caras = ["Sello", "Cruz" ]
print(" ")
print("Opciones:")
print("(Sello)  (Cruz)")

user = input("Elige una cara: ").capitalize()
cpu = random.choice(caras)

print(" ")
if user == cpu:
    print("Ganaste!")
else:
    print("Perdiste, callo: " , cpu)
RED = "\033[38;2;255;0;0m"
ORANGE = "\033[38;2;255;143;0m"
GREEN = "\033[38;2;0;255;0m"
LBLUE = "\033[38;2;36;159;222m"
BLUE = "\033[38;2;20;52;255m"
YELLOW = "\033[38;2;255;255;64m"
RESET = "\033[0m"

#Piedra, papel o tijera

import random

opciones = ["tijera" , "papel" , "piedra"]
print("opciones" , opciones)
user = input("Elige: ").lower()
pc = random.choice(opciones)

if user not in opciones:
    print(RED + "ERROR 404" + RESET)
    quit()
    
if user == pc:
    print(ORANGE + "Empate" + RESET)
elif user == "tijera" and pc == "piedra" or user == "piedra" and pc == "papel" or user == "papel" and pc == "tijera":
    print(RED + "Has perdido contra la PC!" + RESET)
else:
    print(GREEN + "Le has ganado a la PC!" + RESET)
    
print(" ")
print("Gracias por preferir a " + RED + "Alex_dev")
print(RESET + "Hecho con " + YELLOW + "Pyt" + BLUE + "hon!" + RESET)

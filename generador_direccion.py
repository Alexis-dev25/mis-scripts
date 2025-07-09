#generador de direccion de correo electronico
import random

name = input("Nombre: ").lower()
apellido = input("Apellido: ").lower()
characters = ["@" , "!", "#", "$", "%", "&", "*", "<", ">", "?", "~", "^", "¿"]
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

caracter = random.choice(characters)
numero = random.choice(numbers)
numero2 = random.choice(numbers)

gmail = ("@gmail.com")
microsoft = ("@outlook.com")
microsoft_legacy = ("@hotmail.com")
secundaria = ("@est142jal.edu.mx")

print("Escoje entre Gmail(1), Outlook(2), Hotmail(3) 0 Est142(4)")
terminal = input("escoge una terminal: ")

if int(terminal) == 1:
    print("Tu terminal sera: ", gmail)
    Mail1 = name + apellido + numero + numero2 + caracter + gmail
    Mail2 = name + numero + apellido + numero2 + caracter + gmail
    Mail3 = apellido + name + numero + numero2 + caracter + gmail
if int(terminal) == 2:
    print("Tu terminal sera: ", microsoft)
    Mail1 = name + apellido + numero + numero2 + caracter + microsoft
    Mail2 = name + numero + apellido + numero2 + caracter + microsoft
    Mail3 = apellido + name + numero + numero2 + caracter + microsoft
if int(terminal) == 3:
    print("Tu terminal sera: ", microsoft_legacy)
    Mail1 = name + apellido + numero + numero2 + caracter + microsoft_legacy
    Mail2 = name + numero + apellido + numero2 + caracter + microsoft_legacy
    Mail3 = apellido + name + numero + numero2 + caracter + microsoft_legacy
if int(terminal) == 4:
    print("Tu terminal sera: ", secundaria)
    Mail1 = name + apellido + numero + numero2 + caracter + secundaria
    Mail2 = name + numero + apellido + numero2 + caracter + secundaria
    Mail3 = apellido + name + numero + numero2 + caracter + secundaria

print(" ")
print("Tu correo electronico es: ", Mail1)
print("Otra opcion es: ", Mail2)
print("Otra opcion es: ", Mail3)
print("Contraseña: ", name + numero + numero2 + caracter)
print(" ")
print("Hecho por Alex_dev")
import tkinter as tk
from tkinter import ttk
import random

def generar_correo():
    name = nombre_entry.get().lower()
    apellido = apellido_entry.get().lower()
    characters = ["@", "!", "#", "$", "%", "&", "*", "<", ">", "?", "~", "^", "¿"]
    numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    caracter = random.choice(characters)
    numero = random.choice(numbers)
    numero2 = random.choice(numbers)

    gmail = "@gmail.com"
    microsoft = "@outlook.com"
    microsoft_legacy = "@hotmail.com"
    secundaria = "@est142jal.edu.mx"

    terminal_seleccionada = terminal_var.get()
    terminal = ""

    if terminal_seleccionada == 1:
        terminal = gmail
    elif terminal_seleccionada == 2:
        terminal = microsoft
    elif terminal_seleccionada == 3:
        terminal = microsoft_legacy
    elif terminal_seleccionada == 4:
        terminal = secundaria

    Mail1 = name + apellido + numero + numero2 + caracter + terminal
    Mail2 = name + numero + apellido + numero2 + caracter + terminal
    Mail3 = apellido + name + numero + numero2 + caracter + terminal
    password = name + numero + numero2 + caracter

    resultado_text.delete(1.0, tk.END)
    resultado_text.insert(tk.END, f"Tu terminal será: {terminal}\n\n")
    resultado_text.insert(tk.END, f"Tu correo electrónico es: {Mail1}\n")
    resultado_text.insert(tk.END, f"Otra opción es: {Mail2}\n")
    resultado_text.insert(tk.END, f"Otra opción es: {Mail3}\n")
    resultado_text.insert(tk.END, f"Contraseña: {password}")

# Crear la ventana principal
ventana = tk.Tk()
ventana.title("Generador de Direcciones de Correo")
ventana.geometry("500x400")

# Crear y configurar el marco principal
marco = ttk.Frame(ventana, padding="10")
marco.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))

# Crear widgets
ttk.Label(marco, text="Nombre:").grid(row=0, column=0, sticky=tk.W)
nombre_entry = ttk.Entry(marco)
nombre_entry.grid(row=0, column=1, padx=5, pady=5, sticky=(tk.W, tk.E))

ttk.Label(marco, text="Apellido:").grid(row=1, column=0, sticky=tk.W)
apellido_entry = ttk.Entry(marco)
apellido_entry.grid(row=1, column=1, padx=5, pady=5, sticky=(tk.W, tk.E))

ttk.Label(marco, text="Selecciona el tipo de correo:").grid(row=2, column=0, columnspan=2, sticky=tk.W, pady=10)

terminal_var = tk.IntVar()
ttk.Radiobutton(marco, text="Gmail", variable=terminal_var, value=1).grid(row=3, column=0, sticky=tk.W)
ttk.Radiobutton(marco, text="Outlook", variable=terminal_var, value=2).grid(row=3, column=1, sticky=tk.W)
ttk.Radiobutton(marco, text="Hotmail", variable=terminal_var, value=3).grid(row=4, column=0, sticky=tk.W)
ttk.Radiobutton(marco, text="Est142", variable=terminal_var, value=4).grid(row=4, column=1, sticky=tk.W)

generar_btn = ttk.Button(marco, text="Generar Correo", command=generar_correo)
generar_btn.grid(row=5, column=0, columnspan=2, pady=15)

resultado_text = tk.Text(marco, height=8, width=50)
resultado_text.grid(row=6, column=0, columnspan=2, pady=10)

# Configurar el grid para que se expanda
ventana.columnconfigure(0, weight=1)
ventana.rowconfigure(0, weight=1)
marco.columnconfigure(1, weight=1)

# Iniciar el loop principal
ventana.mainloop()
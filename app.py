from flask import Flask, render_template

# Crea una instancia de la aplicación Flask
app = Flask(__name__)

# Define una ruta y una función para manejarla


@app.route('/')
def index():
    return render_template('/sitio/index.html')


# Ejecuta la aplicación en el servidor web de desarrollo
if __name__ == '__main__':
    app.run(debug=True)

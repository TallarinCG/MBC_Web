// app.js
const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

// Configurar body-parser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Crear la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'bzvuzzck1rgyg7kpzsts-mysql.services.clever-cloud.com',
  user: 'uvt5wahvkpbeitq7',
  password: 'SCV1GsEbYyWFWvZ78pRE',
  database: 'bzvuzzck1rgyg7kpzsts',
});

// Verificar la conexión a MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL establecida');
});

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.render('sitio/index.html');
});

// Ruta para el procesamiento del formulario de inicio de sesión
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Verificar las credenciales en la base de datos
  try {
    const [rows] = await connection.promise().query(
      'SELECT * FROM admin WHERE nombre = ? AND contrasena = ?',
      [username, password]
    );

    if (rows.length > 0) {
      res.send(`¡Bienvenido, ${username}!`);
    } else {
      res.send('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  } catch (err) {
    console.error('Error al realizar la consulta:', err);
    res.status(500).send('Error del servidor');
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});

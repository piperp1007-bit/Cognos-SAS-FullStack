// ==========================================
// ARCHIVO DE CONEXIÓN A POSTGRESQL (db.js)
// ==========================================

const { Pool } = require('pg');
require('dotenv').config(); // Permite leer el archivo .env

// Configuramos la conexión para que use la variable secreta de Render o tu .env
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Esto es obligatorio para bases de datos en la nube
    }
});

// Verificamos que la conexión sea exitosa
pool.on('connect', () => {
    console.log('🟢 Conexión exitosa a la base de datos en la nube de Cognos');
});

// Exportamos el 'pool'
module.exports = pool;
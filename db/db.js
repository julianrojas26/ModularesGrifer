import mysql from 'mysql2'
import fs from 'fs'

var conection = mysql.createConnection({
    host: "localhost",
    database: "ModularesGrifer",
    user: "root",
    password: "123456"
});

conection.connect((err) => {
    if (err) {
        console.log(err.stack);
        return;
    }
})

export default conection;
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cantor_college'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');

    // Check if the courses table exists and log the first 10 rows
    connection.query('SELECT * FROM courses LIMIT 10', (error, results) => {
        if (error) {
            console.error('Error fetching courses:', error);
        } else {
            console.log('Courses data:', results);
        }
    });
});

module.exports = connection;

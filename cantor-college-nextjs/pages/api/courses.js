const connection = require('../../db');

export default function handler(req, res) {
    console.log(`API endpoint hit with method: ${req.method}`);

    if (req.method === 'GET') {
        console.log('Executing GET request to fetch courses');
        connection.query('SELECT * FROM courses', (error, results) => {
            if (error) {
                console.error('Error fetching courses:', error);
                res.status(500).json({ error: error.message });
                return;
            }
            console.log('Courses data:', results);
            res.status(200).json(results);
        });
    } else if (req.method === 'POST') {
        const { title, type, summary, award, ucas_code, ucas_points, mode_of_attendance, study_length, has_foundation_year, course_subject, no_longer_recruiting } = req.body;

        console.log('Executing POST request to insert a new course');
        connection.query(
            'INSERT INTO courses (title, type, summary, award, ucas_code, ucas_points, mode_of_attendance, study_length, has_foundation_year, course_subject, no_longer_recruiting) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [title, type, summary, award, ucas_code, ucas_points, mode_of_attendance, study_length, has_foundation_year, course_subject, no_longer_recruiting],
            (error, results) => {
                if (error) {
                    console.error('Error inserting course:', error);
                    res.status(500).json({ error: error.message });
                    return;
                }
                console.log('Course inserted with ID:', results.insertId);
                res.status(201).json({ id: results.insertId, ...req.body });
            }
        );
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

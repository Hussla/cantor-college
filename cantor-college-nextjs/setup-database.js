const mysql = require('mysql2');

// Database connection configuration (without database specified initially)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change this to your MySQL username
    password: '', // Change this to your MySQL password
});

// Course data from the Excel file
const coursesData = [
    {
        title: 'Computing',
        type: 'Undergraduate',
        summary: 'Learn how to code, configure and integrate applications, databases and systems architectures which form the pillars of modern technology in today\'s world.',
        award: 'BSc (Honours)',
        ucas_code: 'G504',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Computing',
        no_longer_recruiting: false
    },
    {
        title: 'Computer Networks',
        type: 'Undergraduate',
        summary: 'This course includes general computing skills in programming, cyber security, information systems, management and professionalism in a technical environment.',
        award: 'BSc (Honours)',
        ucas_code: 'G420',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Computing',
        no_longer_recruiting: false
    },
    {
        title: 'Cyber Security with Forensics',
        type: 'Undergraduate',
        summary: 'Prepare for a career in cyber security by designing security systems, identifying evidence of cybercrimes and acting as detectives in a digital world.',
        award: 'BSc (Honours)',
        ucas_code: 'F4G4',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Computing',
        no_longer_recruiting: false
    },
    {
        title: 'Computer Science for Games',
        type: 'Undergraduate',
        summary: 'Create the software powering the next generation of blockbuster games.',
        award: 'BSc (Honours)',
        ucas_code: 'G611',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Computing',
        no_longer_recruiting: false
    },
    {
        title: 'Software Engineering',
        type: 'Undergraduate',
        summary: 'Gain experience in the whole software development process and prepare for a career in software engineering.',
        award: 'BEng (Honours)',
        ucas_code: 'G600',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Computing',
        no_longer_recruiting: false
    },
    {
        title: 'Computer Science',
        type: 'Undergraduate',
        summary: 'Gain a solid foundation in the core areas of computer science, including programming, algorithms, data structures and software development.',
        award: 'BSc (Honours)',
        ucas_code: 'G400',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Computing',
        no_longer_recruiting: false
    },
    {
        title: 'Computing with Foundation Year',
        type: 'Undergraduate',
        summary: 'Gain a degree in computing – with an initial foundation year to prepare for the course.',
        award: 'BSc (Honours)',
        ucas_code: 'A020',
        ucas_points: 80,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '4/5 Years',
        has_foundation_year: true,
        course_subject: 'Computing',
        no_longer_recruiting: true
    },
    {
        title: 'Cyber Security with Forensics with Foundation Year',
        type: 'Undergraduate',
        summary: 'Gain a degree in cyber security with forensics, with an initial foundation year to prepare for the course.',
        award: 'BSc (Honours)',
        ucas_code: 'A023',
        ucas_points: 80,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '4/5 Years',
        has_foundation_year: true,
        course_subject: 'Computing',
        no_longer_recruiting: true
    },
    {
        title: 'Software Engineering with Foundation Year',
        type: 'Undergraduate',
        summary: 'Gain a degree in software engineering, with an initial foundation year to prepare for the course.',
        award: 'BEng (Honours)',
        ucas_code: 'A017',
        ucas_points: 80,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '4/5 Years',
        has_foundation_year: true,
        course_subject: 'Computing',
        no_longer_recruiting: true
    },
    {
        title: 'Cyber Security with Foundation Year',
        type: 'Undergraduate',
        summary: 'Gain a degree in cyber security – with an initial foundation year to prepare for the course.',
        award: 'BSc (Honours)',
        ucas_code: 'A093',
        ucas_points: 80,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '4/5 Years',
        has_foundation_year: true,
        course_subject: 'Computing',
        no_longer_recruiting: true
    },
    {
        title: 'Information Technology with Business Studies with Foundation Year',
        type: 'Undergraduate',
        summary: 'Gain a degree in information technology with business studies, with an initial foundation year to prepare for the course.',
        award: 'BSc (Honours)',
        ucas_code: 'A019',
        ucas_points: 80,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '4/5 Years',
        has_foundation_year: true,
        course_subject: 'Computing',
        no_longer_recruiting: true
    },
    {
        title: 'Computer Science with Foundation Year',
        type: 'Undergraduate',
        summary: 'Gain a degree in computer science, with an initial foundation year to prepare for the course.',
        award: 'BSc (Honours)',
        ucas_code: 'A022',
        ucas_points: 80,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '4/5 Years',
        has_foundation_year: true,
        course_subject: 'Computing',
        no_longer_recruiting: true
    },
    {
        title: 'Computer Science for Games with Foundation Year',
        type: 'Undergraduate',
        summary: 'Gain a degree in computer science for games, with an initial foundation year to prepare for the course.',
        award: 'BSc (Honours)',
        ucas_code: 'A092',
        ucas_points: 80,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '4/5 Years',
        has_foundation_year: true,
        course_subject: 'Computing',
        no_longer_recruiting: true
    },
    {
        title: 'Business and Digital Technology with Foundation Year',
        type: 'Undergraduate',
        summary: 'Gain a degree in business and digital communications technology – with an initial foundation year to prepare for the course.',
        award: 'BSc (Honours)',
        ucas_code: 'A018',
        ucas_points: 80,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '4/5 Years',
        has_foundation_year: true,
        course_subject: 'Computing',
        no_longer_recruiting: true
    },
    {
        title: 'Computing',
        type: 'Postgraduate',
        summary: 'A course enhanced by real-life project experience for non-computing graduates wanting to pursue a career in the IT industry.',
        award: 'MSc',
        ucas_code: '',
        ucas_points: null,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Part-time',
        study_length: '3 Years',
        has_foundation_year: false,
        course_subject: 'Computing',
        no_longer_recruiting: false
    },
    {
        title: 'Computing and Informatics',
        type: 'Postgraduate',
        summary: 'Conduct a period of intensive, supervised study where you critically investigate and evaluate an approved topic and make an original contribution to knowledge.',
        award: 'MPhil',
        ucas_code: '',
        ucas_points: null,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Part-time',
        study_length: '3 Years',
        has_foundation_year: false,
        course_subject: 'Computing',
        no_longer_recruiting: false
    },
    {
        title: 'Cyber Security',
        type: 'Postgraduate',
        summary: 'Develop your skills and academic knowledge in the growing field of cyber security through academic teaching, industry input and practical skills development. Currently applications for this course are only open to home students.',
        award: 'MSc',
        ucas_code: '',
        ucas_points: null,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '1 Year',
        has_foundation_year: false,
        course_subject: 'Computing',
        no_longer_recruiting: false
    },
    {
        title: 'Graphic Design',
        type: 'Undergraduate',
        summary: 'Develop your own creative and innovative approach to graphic design by challenging and exploring contemporary practices through a series of exciting and diverse projects.',
        award: 'BA (Honours)',
        ucas_code: 'W210',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Art and design',
        no_longer_recruiting: false
    },
    {
        title: 'Interior Architecture and Design',
        type: 'Undergraduate',
        summary: 'Develop your own creative and sustainable approach to interior architecture and design by challenging and exploring contemporary practices through a series of exciting and diverse projects.',
        award: 'BA (Honours)',
        ucas_code: 'W250',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Art and design',
        no_longer_recruiting: false
    },
    {
        title: 'Jewellery, Materials and Design',
        type: 'Undergraduate',
        summary: 'Develop your own creative and innovative approach to jewellery design, challenging and exploring contemporary practices through new technologies and craft techniques.',
        award: 'BA (Honours)',
        ucas_code: 'W721',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Art and design',
        no_longer_recruiting: false
    },
    {
        title: 'Game Design and Development',
        type: 'Undergraduate',
        summary: 'Study a course with a distinctive, practice-based approach to games design – gaining a diverse skill set and useful experience within the field.',
        award: 'BA (Honours)',
        ucas_code: 'A112',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Art and design',
        no_longer_recruiting: false
    },
    {
        title: 'Product Design',
        type: 'Undergraduate',
        summary: 'Develop a highly creative approach to producing innovative \'future-facing\' products by exploring and challenging design through a series of exciting and diverse projects.',
        award: 'BSc (Honours)',
        ucas_code: 'D009',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Art and design',
        no_longer_recruiting: false
    },
    {
        title: 'Product Design',
        type: 'Undergraduate',
        summary: 'Develop a creative and innovative approach to product design and service innovation by challenging and exploring contemporary practices through a series of exciting and diverse projects.',
        award: 'BA (Honours)',
        ucas_code: 'W240',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Art and design',
        no_longer_recruiting: false
    },
    {
        title: 'Digital Media Production',
        type: 'Undergraduate',
        summary: 'Design and produce new media products in film, animation, interactive media, web, apps, VR, cross-media and games.',
        award: 'BA (Honours)',
        ucas_code: 'W212',
        ucas_points: 112,
        year_of_entry: '2025/26',
        mode_of_attendance: 'Full-time',
        study_length: '3 / 4 Years',
        has_foundation_year: false,
        course_subject: 'Art and design',
        no_longer_recruiting: false
    }
];

function setupDatabase() {
    console.log('Setting up Cantor College database...');

    // Create database if it doesn't exist
    connection.query('CREATE DATABASE IF NOT EXISTS cantor_college', (err) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log('Database created or already exists.');

        // Use the database
        connection.query('USE cantor_college', (err) => {
            if (err) {
                console.error('Error selecting database:', err);
                return;
            }

            // Create courses table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS courses (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    type VARCHAR(50) NOT NULL,
                    summary TEXT,
                    award VARCHAR(100),
                    ucas_code VARCHAR(10),
                    ucas_points INT,
                    year_of_entry VARCHAR(20),
                    mode_of_attendance VARCHAR(50),
                    study_length VARCHAR(50),
                    has_foundation_year BOOLEAN DEFAULT FALSE,
                    course_subject VARCHAR(100),
                    no_longer_recruiting BOOLEAN DEFAULT FALSE,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `;

            connection.query(createTableQuery, (err) => {
                if (err) {
                    console.error('Error creating courses table:', err);
                    return;
                }
                console.log('Courses table created or already exists.');

                // Clear existing data
                connection.query('DELETE FROM courses', (err) => {
                    if (err) {
                        console.error('Error clearing courses table:', err);
                        return;
                    }
                    console.log('Cleared existing courses data.');

                    // Insert course data
                    const insertQuery = `
                        INSERT INTO courses (
                            title, type, summary, award, ucas_code, ucas_points, 
                            year_of_entry, mode_of_attendance, study_length, 
                            has_foundation_year, course_subject, no_longer_recruiting
                        ) VALUES ?
                    `;

                    const values = coursesData.map(course => [
                        course.title,
                        course.type,
                        course.summary,
                        course.award,
                        course.ucas_code,
                        course.ucas_points,
                        course.year_of_entry,
                        course.mode_of_attendance,
                        course.study_length,
                        course.has_foundation_year,
                        course.course_subject,
                        course.no_longer_recruiting
                    ]);

                    connection.query(insertQuery, [values], (err, results) => {
                        if (err) {
                            console.error('Error inserting courses:', err);
                            return;
                        }
                        console.log(`Successfully inserted ${results.affectedRows} courses.`);
                        
                        // Verify the data
                        connection.query('SELECT COUNT(*) as count FROM courses', (err, results) => {
                            if (err) {
                                console.error('Error counting courses:', err);
                            } else {
                                console.log(`Total courses in database: ${results[0].count}`);
                            }
                            connection.end();
                            console.log('Database setup complete!');
                        });
                    });
                });
            });
        });
    });
}

// Run the setup
setupDatabase();

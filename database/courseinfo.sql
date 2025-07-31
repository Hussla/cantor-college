
-- This file contains all course data from the provided Excel file
-- 24 courses total: 17 Computing, 7 Art & Design

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS cantor_college;
USE cantor_college;

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type ENUM('Undergraduate', 'Postgraduate') NOT NULL,
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
);

-- Clear existing data
DELETE FROM courses;

-- Insert all 24 courses from Excel data
INSERT INTO courses (title, type, summary, award, ucas_code, ucas_points, year_of_entry, mode_of_attendance, study_length, has_foundation_year, course_subject, no_longer_recruiting) VALUES

-- COMPUTING COURSES (17 total)
-- Active Undergraduate Computing Courses (6)
('Computing', 'Undergraduate', 'Learn how to code, configure and integrate applications, databases and systems architectures which form the pillars of modern technology in today\'s world.', 'BSc (Honours)', 'G504', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Computing', FALSE),

('Computer Networks', 'Undergraduate', 'This course includes general computing skills in programming, cyber security, information systems, management and professionalism in a technical environment.', 'BSc (Honours)', 'G420', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Computing', FALSE),

('Cyber Security with Forensics', 'Undergraduate', 'Prepare for a career in cyber security by designing security systems, identifying evidence of cybercrimes and acting as detectives in a digital world.', 'BSc (Honours)', 'F4G4', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Computing', FALSE),

('Computer Science for Games', 'Undergraduate', 'Create the software powering the next generation of blockbuster games.', 'BSc (Honours)', 'G611', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Computing', FALSE),

('Software Engineering', 'Undergraduate', 'Gain experience in the whole software development process and prepare for a career in software engineering.', 'BEng (Honours)', 'G600', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Computing', FALSE),

('Computer Science', 'Undergraduate', 'Gain a solid foundation in the core areas of computer science, including programming, algorithms, data structures and software development.', 'BSc (Honours)', 'G400', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Computing', FALSE),

-- Foundation Year Computing Courses (8) - No longer recruiting
('Computing with Foundation Year', 'Undergraduate', 'Gain a degree in computing – with an initial foundation year to prepare for the course.', 'BSc (Honours)', 'A020', 80, '2025/26', 'Full-time', '4/5 Years', TRUE, 'Computing', TRUE),

('Cyber Security with Forensics with Foundation Year', 'Undergraduate', 'Gain a degree in cyber security with forensics, with an initial foundation year to prepare for the course.', 'BSc (Honours)', 'A023', 80, '2025/26', 'Full-time', '4/5 Years', TRUE, 'Computing', TRUE),

('Software Engineering with Foundation Year', 'Undergraduate', 'Gain a degree in software engineering, with an initial foundation year to prepare for the course.', 'BEng (Honours)', 'A017', 80, '2025/26', 'Full-time', '4/5 Years', TRUE, 'Computing', TRUE),

('Cyber Security with Foundation Year', 'Undergraduate', 'Gain a degree in cyber security – with an initial foundation year to prepare for the course.', 'BSc (Honours)', 'A093', 80, '2025/26', 'Full-time', '4/5 Years', TRUE, 'Computing', TRUE),

('Information Technology with Business Studies with Foundation Year', 'Undergraduate', 'Gain a degree in information technology with business studies, with an initial foundation year to prepare for the course.', 'BSc (Honours)', 'A019', 80, '2025/26', 'Full-time', '4/5 Years', TRUE, 'Computing', TRUE),

('Computer Science with Foundation Year', 'Undergraduate', 'Gain a degree in computer science, with an initial foundation year to prepare for the course.', 'BSc (Honours)', 'A022', 80, '2025/26', 'Full-time', '4/5 Years', TRUE, 'Computing', TRUE),

('Computer Science for Games with Foundation Year', 'Undergraduate', 'Gain a degree in computer science for games, with an initial foundation year to prepare for the course.', 'BSc (Honours)', 'A092', 80, '2025/26', 'Full-time', '4/5 Years', TRUE, 'Computing', TRUE),

('Business and Digital Technology with Foundation Year', 'Undergraduate', 'Gain a degree in business and digital communications technology – with an initial foundation year to prepare for the course.', 'BSc (Honours)', 'A018', 80, '2025/26', 'Full-time', '4/5 Years', TRUE, 'Computing', TRUE),

-- Postgraduate Computing Courses (3)
('Computing', 'Postgraduate', 'A course enhanced by real-life project experience for non-computing graduates wanting to pursue a career in the IT industry.', 'MSc', '', NULL, '2025/26', 'Part-time', '3 Years', FALSE, 'Computing', FALSE),

('Computing and Informatics', 'Postgraduate', 'Conduct a period of intensive, supervised study where you critically investigate and evaluate an approved topic and make an original contribution to knowledge.', 'MPhil', '', NULL, '2025/26', 'Part-time', '3 Years', FALSE, 'Computing', FALSE),

('Cyber Security', 'Postgraduate', 'Develop your skills and academic knowledge in the growing field of cyber security through academic teaching, industry input and practical skills development. Currently applications for this course are only open to home students.', 'MSc', '', NULL, '2025/26', 'Full-time', '1 Year', FALSE, 'Computing', FALSE),

-- ART & DESIGN COURSES (7 total)
-- Undergraduate Art & Design Courses (7)
('Graphic Design', 'Undergraduate', 'Develop your own creative and innovative approach to graphic design by challenging and exploring contemporary practices through a series of exciting and diverse projects.', 'BA (Honours)', 'W210', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Art and design', FALSE),

('Interior Architecture and Design', 'Undergraduate', 'Develop your own creative and sustainable approach to interior architecture and design by challenging and exploring contemporary practices through a series of exciting and diverse projects.', 'BA (Honours)', 'W250', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Art and design', FALSE),

('Jewellery, Materials and Design', 'Undergraduate', 'Develop your own creative and innovative approach to jewellery design, challenging and exploring contemporary practices through new technologies and craft techniques.', 'BA (Honours)', 'W721', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Art and design', FALSE),

('Game Design and Development', 'Undergraduate', 'Study a course with a distinctive, practice-based approach to games design – gaining a diverse skill set and useful experience within the field.', 'BA (Honours)', 'A112', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Art and design', FALSE),

('Product Design', 'Undergraduate', 'Develop a highly creative approach to producing innovative \'future-facing\' products by exploring and challenging design through a series of exciting and diverse projects.', 'BSc (Honours)', 'D009', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Art and design', FALSE),

('Product Design', 'Undergraduate', 'Develop a creative and innovative approach to product design and service innovation by challenging and exploring contemporary practices through a series of exciting and diverse projects.', 'BA (Honours)', 'W240', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Art and design', FALSE),

('Digital Media Production', 'Undergraduate', 'Design and produce new media products in film, animation, interactive media, web, apps, VR, cross-media and games.', 'BA (Honours)', 'W212', 112, '2025/26', 'Full-time', '3 / 4 Years', FALSE, 'Art and design', FALSE);

-- Verify the data has been inserted
SELECT 
    course_subject,
    type,
    COUNT(*) as count
FROM courses 
GROUP BY course_subject, type
ORDER BY course_subject, type;

-- Total count verification
SELECT COUNT(*) as total_courses FROM courses;

-- Course statistics
SELECT 
    'Computing Courses' as category,
    COUNT(*) as count 
FROM courses 
WHERE course_subject = 'Computing'
UNION ALL
SELECT 
    'Art & Design Courses' as category,
    COUNT(*) as count 
FROM courses 
WHERE course_subject = 'Art and design'
UNION ALL
SELECT 
    'Undergraduate Courses' as category,
    COUNT(*) as count 
FROM courses 
WHERE type = 'Undergraduate'
UNION ALL
SELECT 
    'Postgraduate Courses' as category,
    COUNT(*) as count 
FROM courses 
WHERE type = 'Postgraduate'
UNION ALL
SELECT 
    'Active Courses' as category,
    COUNT(*) as count 
FROM courses 
WHERE no_longer_recruiting = FALSE
UNION ALL
SELECT 
    'Foundation Year Courses' as category,
    COUNT(*) as count 
FROM courses 
WHERE has_foundation_year = TRUE;

import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch('/api/courses');
                const coursesData = await response.json();
                setCourses(coursesData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setLoading(false);
            }
        }

        fetchCourses();
    }, []);

    if (loading) {
        return (
            <>
                <Head>
                    <title>Courses - Cantor College</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h1>Loading courses...</h1>
                </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Courses - Cantor College</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            
            <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
                <header style={{ backgroundColor: '#003366', color: 'white', padding: '1rem' }}>
                    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ margin: 0 }}>Cantor College - Courses</h1>
                        </div>
                        <div>
                            <a href="/" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Home</a>
                            <a href="/courses" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>Courses</a>
                        </div>
                    </nav>
                </header>

                <main style={{ padding: '2rem' }}>
                    <section>
                        <h2>All Courses ({courses.length})</h2>
                        <p>Complete list of courses from our database:</p>
                        
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ 
                                width: '100%', 
                                borderCollapse: 'collapse', 
                                marginTop: '1rem',
                                border: '1px solid #ddd'
                            }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f5f5f5' }}>
                                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Title</th>
                                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Type</th>
                                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Award</th>
                                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>UCAS Code</th>
                                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>UCAS Points</th>
                                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Mode</th>
                                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Duration</th>
                                        <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Subject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((course, index) => (
                                        <tr key={course.id || index} style={{ 
                                            backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9' 
                                        }}>
                                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                                                <strong>{course.title}</strong>
                                                <br />
                                                <small style={{ color: '#666' }}>{course.summary}</small>
                                            </td>
                                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{course.type}</td>
                                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{course.award}</td>
                                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{course.ucas_code || 'N/A'}</td>
                                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{course.ucas_points || 'N/A'}</td>
                                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{course.mode_of_attendance}</td>
                                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{course.study_length}</td>
                                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>{course.course_subject}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section style={{ marginTop: '3rem' }}>
                        <h2>Course Statistics</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            <div style={{ padding: '1rem', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
                                <h3>Computing Courses</h3>
                                <p style={{ fontSize: '2rem', margin: 0, color: '#003366' }}>
                                    {courses.filter(c => c.course_subject === 'Computing').length}
                                </p>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: '#f0fff0', borderRadius: '8px' }}>
                                <h3>Art & Design Courses</h3>
                                <p style={{ fontSize: '2rem', margin: 0, color: '#006600' }}>
                                    {courses.filter(c => c.course_subject === 'Art and design').length}
                                </p>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: '#fff8f0', borderRadius: '8px' }}>
                                <h3>Undergraduate</h3>
                                <p style={{ fontSize: '2rem', margin: 0, color: '#cc6600' }}>
                                    {courses.filter(c => c.type === 'Undergraduate').length}
                                </p>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: '#f8f0ff', borderRadius: '8px' }}>
                                <h3>Postgraduate</h3>
                                <p style={{ fontSize: '2rem', margin: 0, color: '#6600cc' }}>
                                    {courses.filter(c => c.type === 'Postgraduate').length}
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
                    <p>&copy; 2024 Cantor College. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}

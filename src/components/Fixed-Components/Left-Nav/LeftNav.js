import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("https://test-server-nu.vercel.app/courses")
            .then(res => res.json())
            .then(data => setCourses(data));
    })
    return (
        <div>
            <h2>Courses</h2>
            <div>
                {
                    courses.map(course => <p key={course.id}><Link to={`/course/${course.id}`} className="text-decoration-none">{course.title}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
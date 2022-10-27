import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './Course-Card/CourseCard';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className='row'>
            {courses.map(course => <CourseCard
                key={course.uid}
                course={course}
            ></CourseCard>)}
        </div>
    );
};

export default Home;
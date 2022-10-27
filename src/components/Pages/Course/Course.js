import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Course = () => {
    const course = useLoaderData();
    return (
        <div className='d-flex justify-content-center'>
            <Card className='col-6'>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                    <Card.Title className='text-center'>{course.title}</Card.Title>
                    <Card.Text>
                        <p>{course.description}</p>
                    </Card.Text>
                </Card.Body>
            </Card >
        </div>
    );
};

export default Course;
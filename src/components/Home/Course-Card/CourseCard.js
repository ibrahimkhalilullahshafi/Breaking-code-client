import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {

    return (
        <Card className='col-md-6 col-lg-4 mb-3'>
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
                <Card.Title className='text-center'>{course.title}</Card.Title>
                <Card.Text>
                    {course.description.length > 250 ?
                        <>{course.description.slice(0, 100) + '...'}<Link to={`/course/${course.id}`}>More</Link>
                        </>
                        :
                        <>{course.description}</>
                    }
                </Card.Text>
                <Link to={`/course/${course.id}`}><Button className='w-100' variant="primary">Details</Button></Link>
            </Card.Body>
        </Card >
    );
};

export default CourseCard;
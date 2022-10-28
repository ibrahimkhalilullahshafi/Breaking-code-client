import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";


const Course = () => {
    const course = useLoaderData();
    const ref = createRef();
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div><h2>{course.title}</h2></div>
                <div><Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button variant="primary" onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                </div>

            </div>
            <div ref={ref} className='mt-5'>
                <div className='d-flex justify-content-center'>
                    <Card className='col-6 bg-transparent'>
                        <Card.Img variant="top" src={course.image} />
                        <Card.Body>
                            <Card.Title className='text-center'>{course.title}</Card.Title>
                            <Card.Text>
                                <p>{course.description}</p>
                            </Card.Text>
                        </Card.Body>
                        <Link to={`/checkout/${course.id}`}><Button className='w-100' variant="primary">Get Premium Access</Button></Link>
                    </Card >
                </div>
            </div>
        </div>

    );
};

export default Course;
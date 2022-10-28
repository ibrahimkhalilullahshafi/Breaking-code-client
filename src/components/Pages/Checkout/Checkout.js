import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <div className='d-flex justify-content-center'><h1 className='text-primary'>Checkout</h1></div>
            <br />
            <h4>Course added:</h4>
            <li>{course.title}</li>
        </div>
    );
};

export default Checkout;
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FreqQues = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Is there a difference between a coder and a programmer?</Accordion.Header>
                    <Accordion.Body>
                        Although the main activity for both coders and programmers is coding, programmers typically have a more complex set of tasks they need to perform. Coders usually solely write application code in the programming language they are instructed to, whereas programmers also need to create software functions, develop automation logic and solve various problems.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What skills do programmers need?</Accordion.Header>
                    <Accordion.Body>
                        The most important skills for a programmer are:
                        <li>Mathematical skills: A basic understanding of both arithmetic and algebra is essential for programming.</li>
                        <li>Problem-solving: A significant amount of a programmer's time is spent on solving various issues with the software.</li>
                        <li>Communication: Most software development jobs are team efforts, so programmers need to be able to successfully communicate with other team members.</li>
                        <li>Computer skills: Most programmers have computer knowledge beyond the programming languages they routinely use.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the job outlook for programmers?</Accordion.Header>
                    <Accordion.Body>
                        According to the Bureau of Labor Statistics, the job outlook for programmers is likely to decline by 7% from 2018 to 2028. Since computer programming can be performed from anywhere in the world, many companies hire programmers in places where compensation is lower, which may limit job growth for programmers in the United States.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What are the most popular programming sub-specialties?</Accordion.Header>
                    <Accordion.Body>
                        The most widely-used programming types are:
                        <li>Web developers: They write the code for a website's looks and functionality.</li>
                        <li>Software programmers: They are responsible for creating and enhancing software.</li>
                        <li>Data scientists: They typically work in academia and analyze large amounts of data.</li>
                        <li>Mobile app developers: They are responsible for creating mobile software.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Why do programmers charge by the hour?</Accordion.Header>
                    <Accordion.Body>
                        Programmers usually charge by the hour because a programming job implies many variables, and therefore it is very difficult to accurately estimate the time needed to write and review all the code.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default FreqQues;
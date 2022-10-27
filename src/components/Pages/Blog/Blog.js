import React from 'react';
import Card from 'react-bootstrap/Card';


const Blog = () => {
    return (
        <div>
            <Card border="dark">
                <Card.Header>Question:1: what is cors?</Card.Header>
                <Card.Body>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.<br />
                        An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="dark">
                <Card.Header>Question:2: Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
                <Card.Body>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        <h3>We use firebase because:</h3>
                        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.
                        The Realtime Database provides a flexible, expression-based rules language, called Firebase Realtime Database Security Rules, to define how your data should be structured and when data can be read from or written to. When integrated with Firebase Authentication, developers can define who has access to what data, and how they can access it.<br />
                        <h3>Some other options to implement authentication:</h3>
                        Single-Factor/Primary Authentication,
                        Two-Factor Authentication (2FA),
                        Single Sign-On (SSO),
                        Multi-Factor Authentication (MFA),
                        Password Authentication Protocol (PAP),
                        Challenge Handshake Authentication Protocol (CHAP),
                        Extensible Authentication Protocol (EAP)
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="dark">
                <Card.Header>Question:3: How does the private route work?</Card.Header>
                <Card.Body>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.<br />
                        The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card border="dark">
                <Card.Header>Question:4: What is Node? How does Node work?</Card.Header>
                <Card.Body>
                    <Card.Title>Answer:</Card.Title>
                    <Card.Text>
                        <h3>Node:</h3>
                        Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.

                        Now that we know what is Node, let's look at why it is so prevalent in web development.

                        <h3>Why We Use Node:</h3>
                        There are many reasons for which we prefer using NodeJs for the server side of our application, some of them are discussed in the following:
                        NodeJs is built on Google Chrome’s V8 engine, and for this reason its execution time is very fast and it runs very quickly.
                        There are more than 50,000 bundles available in the Node Package Manager and for that reason developers can import any of the packages any time according to their needed functionality for which a lot of time is saved.
                        As NodeJs do not need to wait for an API to return data , so for building real time and data intensive web applications, it is very useful. It is totally asynchronous in nature that means it is totally non-blocking.
                        The loading time for an audio or video is reduced by NodeJs because there is better synchronization of the code between the client and server for having the same code base.
                        As NodeJs is open-source and it is nothing but a JavaScript framework , so for the developers who are already used to JavaScript, for them starting developing their projects with NodeJs is very easy.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;
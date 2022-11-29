import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        1. What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>Ans:
                            i.SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format. And NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.<br />
                            ii.SQL database is a language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data.And NOSQL database is a software to retrieve, store and manage scalability of databases.<br />
                            Examples of SQL database are, SQL supports databases like MySQL, SQL Server, Oracle, etc.<br />
                            Examples of NoSQL database are,
                            Nosql databases are Hbase, MongoDB, Redis, etc.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        2. What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p>Ans: JSON Web Token is an open industry standard used to share information between two entities, usually a client and a server.
                            They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.

                            For example, when you sign in with Google, Google issues a JWT which contains the following claims / JSON payload:
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        3. What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content">
                        <p>Ans: tJavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.</p>
                    </div>
                </div>
            </div>
            <div>
                <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        4. How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content">
                        <p>Ans: Node.js can process upwards of multiple requests per second and speed limited only to the speed of your network card. Note that it's multiple requests per second not clients connected simultaneously. It can handle the multiple simultaneous clients without issue</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;
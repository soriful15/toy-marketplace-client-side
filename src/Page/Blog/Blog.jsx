import React from 'react';
import useTitle from '../../hooks/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className=" my-24 md:mx-32 mx-6">

                    <div
                        tabIndex={0}
                        className="collapse collapse-plus border border-base-300  rounded-box"
                    >
                        <div className="collapse-title text-xl font-medium">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Access Token: A secure string that is used to access a client protected resource.  An example would be to issue access tokens to clients that have a valid authorization grant.  Each access token has a specific scope with lifetime and other attributes. <br /> <br />
                                Refresh Token: A refresh token has a very long lifetime which theoretically allows token bearers to obtain a new access token at any time to access the protected resources with infinite power.  The bearer of the refresh token can be either a legitimate user or a malicious user.  Security organizations, such as Auth0, have this strong token held primarily by intended parties and have mechanisms in place to ensure continued use.

                                <br /> <br />
                                How do they work and where should we store them on the client-side: A secure file or storage mechanism can be used to store access tokens and refresh tokens on the device.  In order to protect this storage space, the device requires data encryption and decryption.
                                Web applications may also use browser storage mechanisms to store tokens, known as local storage or cookies.  It actually uses the local storage mechanism of the client device
                            </p>
                        </div>
                    </div>
                    <div
                        tabIndex={1}
                        className="collapse collapse-plus border border-base-300 rounded-box"
                    >
                        <div className="collapse-title text-xl font-medium">
                            Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content">
                            <p>
                                SQL: SQL database are known as RBMS and these database have fixed or static schema and cannot be changed as they have rows and columns so sql database are best suited for complex query operation . EXAMPLE: MySQL,  MS SQL <br /> <br />

                                NoSQL: NoSQL database are called non-relation database database .NoSQL database  is dynamic where data is primarily stored in json object,key value pair, graph node, node js ,etc ..EXAMPLE: MongoDB Couch Db etc.
                            </p>
                        </div>
                    </div>
                    <div
                        tabIndex={2}
                        className="collapse collapse-plus border border-base-300 rounded-box"
                    >
                        <div className="collapse-title text-xl font-medium">
                            What is express js? What is Nest JS ?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Express js: Express.js is a fast assertive essential and moderate web framework of node js .It can be assumed  as a layer built on top of the Node.js that helps manage server and routes .
                                <br /> <br />
                                Nest js:Nest js. is a TypeScript based framework for building server side applications. NestJS is a progressive Node framework that is open source, extensible and adaptable in its way of working.JS builds, frameworks for engaging and challenging backend systems.  This is now the fastest growing rate.
                            </p>
                        </div>
                    </div>
                    <div
                        tabIndex={3}
                        className="collapse collapse-plus border border-base-300  rounded-box"
                    >
                        <div className="collapse-title text-xl font-medium">
                            What is MongoDB aggregate and how does it work ?
                        </div>
                        <div className="collapse-content">
                            <p>
                                MongoDB Aggregate is a powerful feature that prepares the database documents for querying the MongoDB database and applies certain types of operations to them using the aggregation pipeline.Aggregation pipeline consists of various stages or cleanups through which we can apply any organizational operations to the database, such as grouping, sorting, filtering, sampling, counting, etc.The aggregation pipeline is a cascading system that first applies basic operations and filters the data.  The results are then sorted, grouped or any necessary operations applied
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Blog;
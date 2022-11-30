import React from 'react';
import useTitle from '../../hooks/useTitle.js/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        1. What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>Ans:
                            React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        2 How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>Ans:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        3. What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>Ans: A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                            <br />
                            Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        4. React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p>Ans:Angular, React and Vue are all highly popular JavaScript libraries and frameworks that help developers build complex, reactive and modern user interfaces for the web. Actually, with additional libraries like React Native, Ionic (with Angular or with React) or NativeScript you can even build native mobile apps for mobile devices with help of Angular, React and Vue.

                            In this article, we'll not really look at why you would need such a framework. I'll also not start explaining those libraries here - for that, you can check out other resources, like my courses on those topics (Angular, React, Vue - all included in our Pro subscription of course).

                            Instead, I want to share some thoughts on how those frameworks and libraries compare and which of the three you might want to choose for your next project.

                            I also want to mention that there are other, smaller, libraries or technologies like Svelte which do similar things. I do have a comparison on Svelte vs Angular etc as well.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;
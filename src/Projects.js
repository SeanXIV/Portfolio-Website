import React from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'; // Import ExternalLinkIcon or any other icon you prefer
import toDoListImage from './assets/images/to-do-list.png';
import orderProcessImage from './assets/images/Order-Processing-System.png';
import weatherImage from './assets/images/weather.jpeg';
import employeeManagerImage from './assets/images/Employee-management.png';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "To Do List App",
            tags: ["JavaScript", "MERN Stack"],
            image: toDoListImage,
            description: "I worked as a fullstack developer to build a to-do list app which allows users to efficiently manage their tasks with a sleek and modern user interface.",
            githubLink: "https://github.com/SeanXIV/To-Do-List-App",
            liveLink: "https://to-do-list-app-frontend-tau.vercel.app/"
        },
        {
            title: "Order Processing API",
            tags: ["Java", "Spring Boot", "PostgreSQL"],
            image: orderProcessImage,
            description: "I worked as a backend developer to build a restful api for processing orders in an e-commerce application. This includes order creation, updating order status, and retrieving order history.",
            githubLink: "https://github.com/SeanXIV/Order-Processing-API"
        },
        {
            title: "Employee Manager API",
            tags: ["Java", "Spring Boot", "PostgreSQL"],
            image: employeeManagerImage,
            description: "I worked as a backend developer to build an API that manages employee records including adding, updating, deleting, and retrieving employee information.",
            githubLink: "https://github.com/SeanXIV/Employee-Management-API"
        },
        {
            title: "Weather Application",
            tags: ["Python"],
            image: weatherImage,
            description: "I created a weather app which uses the OpenWeatherMap API to retrieve weather data and use the requests library in Python to fetch the weather API.",
            githubLink: "https://github.com/SeanXIV/Weather-app-Python"
        }
    ];

    return (
        <div className="projects-container">
            <h1 className="projects-heading">My Projects</h1>
            
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-card-content">
                            <div className="card-header">
                                <h2 className="project-title">{project.title}</h2>
                                <div className="tags-container">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="image-container">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="project-image"
                                />
                            </div>

                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>

                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="github-button"
                            >
                                <GithubIcon size={20} />
                                View on GitHub
                            </a>

                            {project.liveLink && (
                                <a 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="live-button"
                                >
                                    <ExternalLinkIcon size={20} />
                                    View Live
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

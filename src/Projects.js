import React from 'react';
import { GithubIcon } from 'lucide-react';
import wasteSortImage from './assets/images/waste-sorting.jpg';
import weatherImage from './assets/images/weather.jpeg';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Waste Sorting API",
            tags: ["Java"],
            image: wasteSortImage,
            description: "I worked as a backend developer to build a restful api that is user-friendly and that empowers users to make environmentally conscious decisions about waste disposal.",
            githubLink: "https://github.com/SeanXIV/Waste-sorting-api"
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
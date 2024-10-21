import React from 'react';
import { SchoolIcon, BriefcaseIcon } from 'lucide-react';

const ExperienceCard = ({ title, subtitle, description, icon: Icon }) => (
  <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-200">
    <div className="flex items-center mb-4">
      <div className="bg-blue-500 rounded-full p-2 mr-4">
        <Icon className="text-white" size={24} />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
    <p className="text-gray-700 font-sans">{description}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: 'Graduated at WeThinkCode',
      subtitle: 'Gauteng',
      description: `WeThinkCode_ Alumni. Attending WeThinkCode_ had an immensely positive influence on my life. 
                    It equipped me with essential skills, knowledge, and opportunities that have significantly 
                    shaped my career and personal development.`,
      icon: SchoolIcon,
    },
    {
      title: 'Web Developer Intern',
      subtitle: 'Remote',
      description: `This remote internship lasted for four weeks (one month), during which I embarked on a rewarding journey 
                    as a Web Development Intern at VeriTech. I gained hands-on experience with real-world projects, refined my web 
                    development skills, and acquired practical industry insights.`,
      icon: BriefcaseIcon,
    },
    {
      title: 'Java Developer Intern',
      subtitle: 'Remote',
      description: `This internship, provided by Oasis Infobyte, was a learning opportunity for me that spanned one month. 
                    During this time, I enhanced my Java skills and developed projects using Java. The internship included
                    an orientation and emphasized learning new skills, with a deeper understanding of concepts through 
                    hands-on application of the knowledge I gained as an intern.`,
      icon: BriefcaseIcon,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12 font-sans">My Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
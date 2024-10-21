import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import './Skills.css';  // External CSS for styling

function Skills() {
  const skillsRow1 = ['Agile Methodologies', 'Problem Solving', 'Linux'];
  const skillsRow2 = ['Python', 'Java','JavaScript', 'C#', 'HTML', 'CSS'];
  const skillsRow3 = [
    'Software Development',
    'Web Development',
    'Systems Integration',
    'Dev Ops',
    'Unit Testing',
  ];
  const skillsRow4 = ['Relational Databases', 'Docker', 'Rest APIs'];
  const skillsRow5 = ['React js', 'Blazor']

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <Paper key={index} className="skill-paper" elevation={3}>
        {skill}
      </Paper>
    ));

  return (
    <div className="skills-container">
      <Typography variant="h4" gutterBottom align="center" className="skills-heading">
        My Skills
      </Typography>
      <Box sx={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
        <div className="skills-row">{renderSkills(skillsRow1)}</div>
        <div className="skills-row">{renderSkills(skillsRow2)}</div>
        <div className="skills-row">{renderSkills(skillsRow3)}</div>
        <div className="skills-row">{renderSkills(skillsRow4)}</div>
        <div className='skills-row'>{renderSkills(skillsRow5)}</div>
      </Box>
    </div>
  );
}

export default Skills;
